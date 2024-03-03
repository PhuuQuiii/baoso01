
"use client";
import React, { useState, useEffect } from "react";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Page = ({ params: { lng } }) => {
  const [canListening, setCanListening] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [socket, setSocket] = useState(null); // State for WebSocket

  if (!canListening) {
    var url = "/vi/";
    window.location = url;
  }

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.0.77:8080");
    // Establish WebSocket connection
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onclose = (event) => {
      console.log("WebSocket connection closed", event);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    return () => {
      if (ws.readyState !== ws.CLOSED) {
        ws.close();
      }
    };
  }, []);

  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  useEffect(() => {
    recognition.onstart = () => {
      console.log("Voice recognition started");
    };

    recognition.onresult = (event) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setSpokenText(transcript);
      console.log(socket.readyState)

      if (socket) {
        socket.send(JSON.stringify({ transcript, lng }));
      } else {
        console.error("WebSocket connection is not open");
      }
    };

    recognition.onend = () => {
      console.log("Voice recognition ended");
      setIsListening(false);
    };
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        var answerMessage = data.message
        if ((answerMessage === "Tạm biệt quý khách hàng.") || (answerMessage === "Goodbye to our valued customers.")) {
          setCanListening(false)
        }
        setAnswerText("\"" + answerMessage + "\"")
      };
    }
  }, [socket]);

  useEffect(() => {
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [isListening]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-4xl font-bold mb-8">{spokenText}</p>
      <p className="text-4xl font-bold mb-8">{answerText}</p>
      <button
        onClick={toggleListening}
        className={`rounded-full p-4 mb-12 ${isListening ? "bg-blue-500" : "bg-white"
          }`}
        style={{ marginTop: "calc(100vh / 3)" }}
      >
        <img
          src="/microphone.png"
          alt="Microphone"
          style={{ width: 150, height: 150 }}
        />
      </button>
    </div>
  );
};

export default Page;

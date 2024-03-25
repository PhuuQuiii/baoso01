"use client";
import React, { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const speakAnswer = new SpeechSynthesisUtterance();

const Page = ({ params: { lng } }) => {
  const [screenLocation, setscreenLocation] = useState(0);
  //0: voice, 1: home, 2: quầy thủ tục
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [socket, setSocket] = useState(null); // State for WebSocket

  //mac dinh chuyen qua map
  var url = "/" + lng + "/Map/Map1?id=ICONISmokingQT";
  window.location = url;

  if (screenLocation === 1) {
    var url = "/vi/";
    window.location = url;
  } else if (screenLocation === 2) {
    var url = "/" + lng + "/Lookup";
    window.location = url;
  } else if (screenLocation === 3) {
    var url = "/" + lng + "/Map";
    window.location = url;
  }

  useEffect(() => {
    const ws = new WebSocket("ws://192.168.0.13:8080");
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
      console.log(socket.readyState);

      if (socket) {
        socket.send(JSON.stringify({ transcript, lng }));
        console.log({ transcript, lng });
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
        var answerMessage = data.message[0];
        var language = data.message[1];
        if (language === "vi") speakAnswer.lang = "vi-VN";
        else if (language === "en") speakAnswer.lang = "en-US";
        speakAnswer.text = answerMessage;
        speechSynthesis.speak(speakAnswer);

        if (
          answerMessage === "Tạm biệt quý khách hàng." ||
          answerMessage === "Goodbye to our valued customers."
        ) {
          setscreenLocation(1);
        } else if (
          answerMessage.includes("là danh sách chuyến bay hiện có") ||
          answerMessage.includes("list of available flights.")
        ) {
          setscreenLocation(2);
        } else if (
          answerMessage.includes("hiện trên bản đồ.") ||
          answerMessage.includes("So on the map.")
        ) {
          setscreenLocation(3);
        }
        // const utterance = new SpeechSynthesisUtterance(answerMessage);

        // const isVietnamese = /[\p{Script=Latin} \p{Mark}]/u.test(answerText);
        // utterance.lang = 'vi-VN';

        // window.speechSynthesis.speak(utterance);
        setAnswerText('"' + answerMessage + '"');
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
        className={`rounded-full p-4 mb-12 ${
          isListening ? "bg-blue-500" : "bg-white"
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

"use client";
// import React from "react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Toaster, toast } from "sonner";

export default function Page({ params: { lng } }) {
  const [translation, setTranslation] = useState(null);

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const { t } = await useTranslation(lng, "Home");
        console.log("Translation object:", t); // Debugging
        setTranslation(() => t);
      } catch (error) {
        console.error("Error fetching translation:", error);
      }
    };

    fetchTranslation();
  }, [lng]);

  console.log("Current translation object:", translation); // Debugging

  if (!translation) {
    console.log("Translation object is null. Rendering null."); // Debugging
    return null;
  }

  console.log("Rendering with translation object:", translation); // Debugging

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-6xl font-bold mb-28">{translation("title")}</h1>
      <div className="grid grid-cols-2 gap-16 w-2/3">
        <Link href={`/${lng}/Voice`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {translation("VOICE")} {/* Liên kết tới trang Voice */}
          </button>
        </Link>
        <Link href={`/${lng}/Map/Map1`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {translation("MAP")} {/* Liên kết tới trang Map */}
          </button>
        </Link>
        <Link href={`/${lng}/Lookup`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {translation("LOOKUP")} {/* Liên kết tới trang Lookup */}
          </button>
        </Link>
        <Link href={`/${lng}/`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {translation("EXIT")} {/* Liên kết tới trang Exit */}
          </button>
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 mb-8 mr-8">
        <Toaster position="top-center" richColors />
        <button
          className="bg-red-500 text-white text-4xl py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() =>
            toast.success(translation("THONGBAO"), {
              unstyled: true,
              classNames: {
                toast: "bg-blue-400",
                title: "text-red-400 text-2xl",
                description: "text-red-400",
                actionButton: "bg-zinc-400",
                cancelButton: "bg-orange-400",
                closeButton: "bg-lime-400",
              },
              style: {
                minWidth: "400px", // Đặt độ rộng tối thiểu
                minHeight: "100px", // Đặt độ cao tối thiểu
                fontSize: "24px", // Đặt kích thước chữ
                padding: "20px", // Thêm padding
                display: "flex", // Sử dụng flexbox
                justifyContent: "center", // Căn giữa theo chiều ngang
                alignItems: "center", // Căn giữa theo chiều dọc
              },
            })
          }
        >
          {translation("SOS")}
        </button>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { useTranslation } from "../../i18n";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Home");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center text-6xl font-bold mb-28">{t("title")}</h1>
      <div className="grid grid-cols-2 gap-16 w-2/3">
        <Link href={`/${lng}/Voice`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {t("VOICE")} {/* Liên kết tới trang Voice */}
          </button>
        </Link>
        <Link href={`/${lng}/Map`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {t("MAP")} {/* Liên kết tới trang Map */}
          </button>
        </Link>
        <Link href={`/${lng}/Lookup`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {t("LOOKUP")} {/* Liên kết tới trang Lookup */}
          </button>
        </Link>
        <Link href={`/${lng}/`}>
          <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            {t("EXIT")} {/* Liên kết tới trang Exit */}
          </button>
        </Link>
      </div>
    </div>
  );
}

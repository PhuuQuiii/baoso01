import Link from "next/link";

export default function Page({ params: { lng } }) {
  return (
    <>
      <div className=" flex flex-col justify-center">
        <div className=" flex justify-between w-[80%] mx-auto mt-6">
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src="/VAA.png"
              alt="Học viện Hàng không Việt Nam"
              className=" w-28"
            />
            <p className="text-center text-2xl font-semibold mt-4">
              HỌC VIỆN HÀNG KHÔNG VIỆT NAM
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src="/Color_Logo đơn.png"
              alt="Khoa Công nghệ thông tin"
              className=" w-32"
            />
            <p className="text-center text-2xl font-semibold mt-4">
              KHOA CÔNG NGHỆ THÔNG TIN
            </p>
          </div>
        </div>
        <div className=" mt-12 flex flex-col justify-center">
          <h1 className="text-center text-7xl font-bold text-gray-800 mb-16">
            XIN CHÀO
          </h1>
          <h1 className="text-center text-7xl font-bold text-gray-800 mb-16">
            WELCOME
          </h1>
          <p className="text-center text-4xl mb-4">
            VUI LÒNG LỰA CHỌN NGÔN NGỮ
          </p>
          <p className="text-center text-4xl mb-16">
            PLEASE SELECT YOUR LANGUAGE
          </p>
          <div className=" w-1/2 mx-auto mt-12">
            <div className=" flex justify-between w-full">
              <Link href={`/${lng === "en" ? "vi" : "en"}/Home`}>
                <button className="bg-blue-500 text-white text-4xl py-10 px-24 rounded-lg">
                  {lng === "en" ? "TIẾNG VIỆT" : "ENGLISH"}
                </button>
              </Link>
              <div className="invisible">02</div>
              <Link href={`/${lng}/Home`}>
                <button className="bg-blue-500 text-white text-4xl py-10 px-24  rounded-lg">
                  {lng === "en" ? "ENGLISH" : "TIẾNG VIỆT"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

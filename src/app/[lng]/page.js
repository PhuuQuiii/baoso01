import Link from "next/link";

export default function Page({ params: { lng } }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center text-8xl mb-16">XIN CHÀO</h1>
        <h1 className="text-center text-8xl mb-16">WELCOME</h1>
        <p className="text-center text-4xl mb-4">VUI LÒNG LỰA CHỌN NGÔN NGỮ</p>
        <p className="text-center text-4xl mb-16">
          PLEASE SELECT YOUR LANGUAGE
        </p>
        <div className="grid grid-cols-3 gap-4 w-2/3">
          <Link href={`/${lng === 'en' ? 'vi' : 'en'}/Home`}>
            <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg">
              {lng === 'en' ? 'TIẾNG VIỆT' : 'ENGLISH'}
            </button>
          </Link>
          <div className="invisible">02</div>
          <Link href={`/${lng}/Home`}>
            <button className="bg-blue-500 text-white text-4xl py-4 px-6 w-full h-40 rounded-lg">
              {lng === 'en' ? 'ENGLISH' : 'TIẾNG VIỆT'}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

// import Link from 'next/link'

// export default function Page({ params: { lng } }) {
//   return (
//     <>
//       <h1>Hi there!</h1>
//       <Link href={`/${lng}/Home`}>
//         Home
//       </Link>
//     </>
//   )
// }
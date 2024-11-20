import Image from "next/image";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between pt-14 px-6 md:px-16 gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-left font-bold text-black text-4xl md:text-6xl max-w-xl leading-tight">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[#787054] text-lg md:text-2xl font-[Libre Bodoni] font-medium leading-relaxed tracking-wide text-left max-w-2xl mt-6">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>

          <button
              className="mt-8 bg-[#A29875] text-white text-lg font-semibold rounded-[8.6px] px-6 py-3 transition hover:opacity-90"
               style={{
               width: "247.67px",
               height: "49.2px"}}>Explore Now</button>

        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/images/image.svg"
            alt="Profile image"
            width={380}
            height={380}
          />
        </div>
      </div>
    </div>
  );
}

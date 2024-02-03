import Image from "next/image";
import media1 from "@/assets/media1.png";
import media2 from "@/assets/media2.png";
import media3 from "@/assets/media3.png";
import { GoChevronRight } from "react-icons/go";

const Media = () => {
  return (
    <section className="pt-[4rem] pl-[2rem] md:pl-[6rem] pb-[4rem]">
      <div className="text-black flex items-center justify-between pr-[2rem] md:pr-[6rem]">
        <h1 className="font-medium text-[2rem]">MEDIA</h1>
        <GoChevronRight size={40} className="cursor-pointer" />
      </div>
      <div className="flex mt-[1rem]">
        <Image
          src={media1}
          width={400}
          height={400}
          className="w-[500px]"
          alt=""
        />
        <Image
          src={media2}
          width={400}
          height={400}
          className="w-[500px]"
          alt=""
        />
        <Image
          src={media3}
          width={400}
          height={400}
          className="w-[400px]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Media;

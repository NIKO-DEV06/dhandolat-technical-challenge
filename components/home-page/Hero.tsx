import heroImg from "@/assets/hero-img.png";
import assistance from "@/assets/assistance.svg";
import growth from "@/assets/growth.svg";
import property from "@/assets/property.svg";
import investment from "@/assets/investment.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover md:bg-center bg-no-repeat overflow-clip text-white pb-[4rem] lg:pb-0 pt-[9rem] lg:pt-[4rem] lg:flex lg:items-center px-[2rem] md:px-[6rem]"
      style={{
        backgroundImage: 'url("/hero-bg.jpg")',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-[3rem] lg:gap-[3rem] xl:gap-[8rem] w-full">
        <div className="flex flex-col gap-[3rem] lg:gap-[4rem] xl:w-[65rem]">
          <div className="bg-[#969696]/25 flex flex-col items-center rounded-[29px] gap-[0.5rem] py-[4rem] px-[2.5rem] lg:px-[6rem] backdrop-filter backdrop-blur-[8px] shadow-custom">
            <h2 className="text-[3rem] leading-none font-medium">DISCOVER</h2>
            <p className="text-[1.3rem] font-light">Investment Opportunities</p>
            <button className="bg-[#FFC107] text-black md:w-fit lg:w-full w-full rounded-[11px] py-[0.35rem] mt-[0.6rem] shadow-custom md:px-[7rem] lg:px-0">
              CLICK HERE
            </button>
          </div>
          <div className="bg-[#969696]/25 flex px-[1.5rem] lg:px-[2.5rem] pt-[1.5rem] pb-[1rem] items-end rounded-[29px] backdrop-filter backdrop-blur-[8px] shadow-custom text-[0.75rem] font-medium gap-[1.2rem] lg:gap-[2.1rem] justify-center">
            <div className="flex flex-col items-center gap-[1rem]">
              <Image src={growth} width={25} height={25} alt="" />
              <p>GROWTH</p>
            </div>
            <div className="flex flex-col items-center gap-[1rem]">
              <Image src={investment} width={31} height={31} alt="" />
              <p>INVESTMENT</p>
            </div>
            <div className="flex flex-col items-center gap-[1rem]">
              <Image src={property} width={37} height={37} alt="" />
              <p>PROPERTY</p>
            </div>
            <div className="flex flex-col items-center gap-[1rem]">
              <Image src={assistance} width={30} height={30} alt="" />
              <p>ASSISTANCE</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={heroImg}
            width={400}
            height={400}
            className="w-full h-[465px]"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

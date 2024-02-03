import Image from "next/image";
import propertyHero from "@/assets/property-hero.png";

const PropertyHero = () => {
  return (
    <section
      className="bg-cover bg-no-repeat overflow-clip text-white  pt-[7rem] lg:pt-[10rem] px-[2rem] md:px-[6rem] pb-[4rem]"
      style={{
        backgroundImage: 'url("/property-bg.jpg")',
      }}
    >
      <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[5rem]">
        <Image
          src={propertyHero}
          width={500}
          height={500}
          className="w-full"
          alt=""
        />
        <div className="flex flex-col w-[100%] gap-[1rem]">
          <h1 className="text-[#FFC107] text-[2rem] font-medium">NAME NAME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit
            amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor
            sit amet,
          </p>
          <div className="flex flex-col gap-[2rem] bg-[#969696]/25 backdrop-filter backdrop-blur-[8px] shadow-custom rounded-[29px] px-[2rem] py-[1.5rem] mt-[3rem] translate-y-[-1.5rem]">
            <div className="flex gap-[4rem]">
              <div>
                <p className="text-[#89E4D6] text-[1.1rem]">20 Lakhs</p>
                <p className="text-[0.8rem]">MIN INVESTMENT</p>
              </div>
              <div>
                <p className="text-[#89E4D6] text-[1.1rem]">100 sq.ft.</p>
                <p className="text-[0.8rem]">MIN AREA</p>
              </div>
            </div>
            <div className="flex gap-[5.3rem]">
              <div>
                <p className="text-[#89E4D6] text-[1.1rem]">9%-12%</p>
                <p className="text-[0.8rem]">RENTAL YIELD</p>
              </div>
              <div>
                <p className="text-[#89E4D6] text-[1.1rem]">
                  Sector 121, Noida
                </p>
                <p className="text-[0.8rem]">LOCATION</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default PropertyHero;

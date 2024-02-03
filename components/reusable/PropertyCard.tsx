import thumbnail from "@/assets/property-thumbnail.png";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = () => {
  return (
    <div className="bg-[#969696]/25 backdrop-filter backdrop-blur-[8px] shadow-custom rounded-[29px] pt-[0.3rem] pb-[5rem] flex flex-col justify-end relative ">
      <Link href={"/property"} className="relative w-[360px] md:w-[380px]">
        <Image
          src={thumbnail}
          width={500}
          height={500}
          className="translate-x-[0.3rem] w-[360px] md:w-[380px]"
          alt="thumbnail"
        />
        <p className="absolute bottom-[2rem] left-[2.5rem] text-[1.8rem] font-medium text-[#FFC107]">
          NAME NAME
        </p>
      </Link>
      <div className="flex flex-col gap-[2rem] pl-[2rem]">
        <div className="flex gap-[4rem]">
          <div>
            <p className="text-[#89E4D6]">20 Lakhs</p>
            <p className="text-[0.8rem]">MIN INVESTMENT</p>
          </div>
          <div>
            <p className="text-[#89E4D6]">100 sq.ft.</p>
            <p className="text-[0.8rem]">MIN AREA</p>
          </div>
        </div>
        <div className="flex gap-[5.3rem]">
          <div>
            <p className="text-[#89E4D6]">9%-12%</p>
            <p className="text-[0.8rem]">RENTAL YIELD</p>
          </div>
          <div>
            <p className="text-[#89E4D6]">Sector 121, Noida</p>
            <p className="text-[0.8rem]">LOCATION</p>
          </div>
        </div>
      </div>
      <p className="absolute cursor-pointer text-[#FFC107] border-[#FFC107] border-[1.5px] border-x-0 border-t-0 w-fit right-[3rem] bottom-[2.3rem] text-[0.9rem]">
        CONTACT
      </p>
    </div>
  );
};

export default PropertyCard;

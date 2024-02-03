import { AiFillCaretLeft } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import PropertyCard from "../reusable/PropertyCard";
const Properties = () => {
  return (
    <section
      className="bg-cover relative bg-no-repeat overflow-clip text-white px-[2rem] md:px-[6rem] pt-[4rem] lg:pt-[5rem] pb-[8rem] lg:pb-[12rem]"
      style={{
        backgroundImage: 'url("/properties-homepage-bg.jpg")',
      }}
    >
      <div className="flex justify-center items-center text-[#FFC107] gap-[0.5rem]">
        <AiFillCaretLeft size={30} />
        <p className="text-[2rem]">PROPERTIES</p>
      </div>
      <div className="flex justify-between gap-[3rem] mt-[3rem] w-auto overflow-x-scroll">
        {Array.from({ length: 3 }, (_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>
      <GoChevronRight
        size={40}
        className="fill-white absolute right-0 md:right-[2rem] top-1/2 -translate-y-[2rem]"
      />
    </section>
  );
};

export default Properties;

"use client";
import { AiFillCaretLeft } from "react-icons/ai";
import PropertyCard from "../reusable/PropertyCard";
import Filter from "./Filter";
import { useState } from "react";

const PropertiesPage = () => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const toggleFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };
  return (
    <section className="min-h-screen bg-[#111959] pt-[8rem] lg:pt-[10rem] px-[2rem] md:px-[6rem]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center text-[#FFC107] gap-[0.5rem]">
          <AiFillCaretLeft size={30} />
          <p className="text-[1.5rem]">PROPERTIES</p>
        </div>
        <div className="relative">
          <p
            onClick={toggleFilter}
            className=" text-white text-[1.1rem] border-white border-[1.5px] border-x-0 border-t-0 w-fit font-light h-fit cursor-pointer"
          >
            FILTER
          </p>
          {filterIsOpen && <Filter setFilterIsOpen={setFilterIsOpen} />}
        </div>
      </div>
      <div className="w-fit grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center mx-auto gap-[5rem] mt-[4rem] pb-[8rem]">
        {Array.from({ length: 9 }, (_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default PropertiesPage;

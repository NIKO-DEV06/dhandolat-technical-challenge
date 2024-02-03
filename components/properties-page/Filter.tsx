import { GoChevronDown } from "react-icons/go";

const Filter = ({
  setFilterIsOpen,
}: {
  setFilterIsOpen: (value: boolean) => void;
}) => {
  return (
    <div className="absolute w-[19rem] grid place-items-center translate-x-[-15rem] rounded-[18px] bg-[#969696]/40 backdrop-filter backdrop-blur-[8px] z-[30] pt-[2.5rem] pb-[4.5rem] top-[2.5rem]">
      <div className="flex flex-col gap-[0.5rem] w-[14rem]">
        <p className="text-[1.1rem] text-[#FFC107]">MIN INVESTMENT</p>
        <div className="bg-white flex items-center justify-between rounded-[10px] text-[#909090] px-[0.9rem]">
          <p className="font-light">Low to High</p>
          <GoChevronDown size={30} />
        </div>
      </div>
      <div className="flex flex-col gap-[0.5rem] mt-[1.5rem] w-[14rem]">
        <p className="text-[1.1rem] text-[#FFC107]">AREA</p>
        <div className="bg-white flex items-center justify-between rounded-[10px] text-[#909090] px-[0.9rem]">
          <p className="font-light">Low to High</p>
          <GoChevronDown size={30} />
        </div>
      </div>
      <div className="flex flex-col mt-[1.5rem] w-[14rem]">
        <p className="text-[1.1rem] text-[#FFC107]">LOCATION</p>
        <div className="flex justify-between">
          <div className="text-[#652CB2] font-medium bg-[#89E4D6] w-fit px-[0.8rem] py-[0.2rem] rounded-[10px]">
            Noida
          </div>
          <div className="text-[#909090] bg-white w-fit px-[0.8rem] py-[0.2rem] rounded-[10px]">
            Noida
          </div>
          <div className="text-[#909090] bg-white w-fit px-[0.8rem] py-[0.2rem] rounded-[10px]">
            Noida
          </div>
        </div>
      </div>
      <p
        onClick={() => {
          setFilterIsOpen(false);
        }}
        className=" text-[#89E4D6] border-[#89E4D6] border-[1.5px] border-x-0 border-t-0 w-fit text-[0.9rem] font-light h-fit cursor-pointer translate-x-[5.7rem] translate-y-[1.8rem]"
      >
        DONE
      </p>
    </div>
  );
};

export default Filter;

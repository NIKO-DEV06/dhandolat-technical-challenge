import { GoChevronDown } from "react-icons/go";
import whatsapp from "@/assets/whatsapp.svg";
import check from "@/assets/check.svg";
import Image from "next/image";

const Connect = () => {
  return (
    <section
      className="bg-cover bg-no-repeat overflow-clip text-white  pt-[7rem] lg:pt-[8rem] px-[2rem] md:px-[6rem] pb-[8rem]"
      style={{
        backgroundImage: 'url("/connect-bg.jpg")',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:justify-between 2xl:max-w-[1650px] 2xl:m-auto">
        <form className="lg:w-[35%]">
          <h3 className="font-light text-[#FFC107]">PLEASE FILL THIS FORM!!</h3>
          <input
            type="text"
            className="font-light w-full my-[2rem] rounded-[10px] py-[0.5rem] px-[1.2rem] shadow-custom"
            placeholder="Name"
          />
          <div className="flex gap-[1rem] mb-[2rem]">
            <input
              type="text"
              className="w-[4rem] rounded-[10px] py-[0.5rem] pl-[.8rem] font-light shadow-custom"
              placeholder="+91"
            />
            <input
              type="text"
              className="w-full rounded-[10px] py-[0.5rem] px-[1.2rem] font-light shadow-custom"
              placeholder="Contact Number"
            />
          </div>
          <div className="mb-[2rem] flex flex-col gap-[0.5rem] relative">
            <p className="font-light">Preferred time to contact?</p>
            <input
              type="text"
              className="w-full rounded-[10px] py-[0.5rem] px-[1.2rem] shadow-custom"
              placeholder="10:00 a.m.- 1:00 p.m."
            />
            <GoChevronDown
              size={30}
              className="absolute fill-[#909090] bottom-[0.2rem] right-[1.2rem]"
            />
          </div>
          <input
            type="text"
            className="w-full mb-[1.5rem] rounded-[10px] py-[0.5rem] px-[1.2rem] shadow-custom"
            placeholder="Any Comments?"
          />
          <p className="font-light mb-[1.5rem]">Looking for?</p>
          <div className="flex justify-between gap-[1rem]">
            <div className="text-[#652CB2] font-medium bg-[#89E4D6] w-fit px-[0.8rem] py-[0.5rem] rounded-[10px]">
              Investment
            </div>
            <div className="text-[#909090] bg-white w-fit px-[0.8rem] py-[0.5rem] rounded-[10px]">
              Investment
            </div>
            <div className="text-[#652CB2] font-medium bg-[#89E4D6] w-fit px-[0.8rem] py-[0.5rem] rounded-[10px]">
              Investment
            </div>
          </div>
          <div className="flex justify-end gap-[0.5rem] mt-[3rem] cursor-pointer">
            <Image src={check} width={30} height={30} alt="" />
            <p className="text-[#9DF8E8] border-[#9DF8E8] border-[1.5px] border-x-0 border-t-0 w-fit right-[3rem] bottom-[2.3rem] font-light h-fit text-[1.1rem]">
              SUBMIT
            </p>
          </div>
        </form>
        <div className="lg:mr-[9rem] flex flex-col items-center lg:items-start mt-[3.5rem] lg:mt-0">
          <h1 className="text-[#FFC107] text-[2.3rem] lg:text-[3rem] font-medium">
            ANY QUERY?
          </h1>
          <h1 className="font-light text-[2.3rem] lg:text-[3rem]">
            CONNECT WITH US
          </h1>
          <div className="flex flex-col gap-[0.5rem] items-center lg:items-start mt-[1.5rem] lg:mt-[2rem]">
            <p className="font-light">DIRECTLY CONTACT US ON</p>
            <div className="bg-[#969696]/25 shadow-custom backdrop-filter backdrop-blur-[100px] flex w-fit rounded-[23px] items-center text-[1.4rem] gap-[1rem] px-[1rem] py-[0.7rem]">
              <Image src={whatsapp} width={35} height={35} alt="" />
              <p className="text-[#89E4D6]">WHATSAPP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

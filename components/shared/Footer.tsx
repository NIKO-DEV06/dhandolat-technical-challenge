import Image from "next/image";
import mail from "@/assets/mail.svg";
import phone from "@/assets/phone.svg";
import whatsapp from "@/assets/whatsapp.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat overflow-clip text-white  pt-[7rem] lg:pt-[8rem] font-light"
      style={{
        backgroundImage: 'url("/footer-bg.jpg")',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-[3rem] lg:gap-0 px-[2rem] lg:px-[8rem] xl:px-[10rem]">
        <h1 className="text-[#FFC107] text-[2rem]">LOGO</h1>
        <div className="flex flex-col gap-[3rem]">
          <div className="flex gap-[1.5rem] items-center">
            <Image src={mail} width={35} height={35} alt="" />
            <p>MAIL ID</p>
          </div>
          <div className="flex gap-[1.5rem] items-center">
            <Image src={phone} width={35} height={35} alt="" />
            <p>CONTACT NO</p>
          </div>
        </div>
        <div className="flex flex-col gap-[3rem] items-center lg:items-start">
          <Link href={"/"}>HOME</Link>
          <Link href={""}>ABOUT US</Link>
          <Link href={"/properties"}>PROPERTIES</Link>
          <Link href={""}>CONTACT</Link>
        </div>
        <div className="flex flex-col gap-[0.5rem] items-center lg:items-start">
          <p>DIRECTLY CONTACT US ON</p>
          <div className="bg-[#969696]/25 shadow-custom backdrop-filter backdrop-blur-[100px] flex w-fit rounded-[23px] items-center text-[1.4rem] gap-[1rem] px-[1rem] py-[0.7rem]">
            <Image src={whatsapp} width={35} height={35} alt="" />
            <p className="text-[#89E4D6]">WHATSAPP</p>
          </div>
        </div>
      </div>
      <hr className="mt-[4rem] border-[0.5px] border-white/50" />
      <p className="text-center px-[2rem] py-[3rem] lg:py-[5rem]">
        &copy; 2024 ALL RIGHTS RESERVED | POWERED BY{" "}
        <span className="text-[#FFC107]">PROPERTY VISTA</span>{" "}
        <br className="hidden lg:block" />
        DISCLAIMER
      </p>
    </footer>
  );
};

export default Footer;

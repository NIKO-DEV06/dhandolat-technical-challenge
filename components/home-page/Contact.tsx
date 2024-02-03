const Contact = () => {
  return (
    <section
      className="bg-cover bg-no-repeat overflow-clip text-white px-[2rem] md:px-[6rem] py-[7rem] lg:py-[8rem] grid place-items-center"
      style={{
        backgroundImage: 'url("/contact-bg.jpg")',
      }}
    >
      <form className="bg-[#969696]/25 shadow-custom rounded-[29px] pt-[4rem] pb-[6rem] w-full md:w-[30rem] px-[1.5rem] md:px-[3rem] relative backdrop-filter backdrop-blur-[100px] text-black">
        <h1 className="text-center text-[2.2rem] font-light text-white">
          <span className="text-[#FFC107] font-medium">CONNECT</span> WITH US
        </h1>
        <p className="text-center text-[#FFC107] font-light text-[1.2rem]">
          PLEASE FILL THIS FORM!!
        </p>
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
        <input
          type="text"
          className="w-full rounded-[10px] font-light py-[0.5rem] px-[1.2rem] shadow-custom"
          placeholder="Any Comments?"
        />
        <p className="absolute cursor-pointer text-[#9DF8E8] border-[#9DF8E8] border-[1.5px] border-x-0 border-t-0 w-fit right-[3rem] bottom-[2.3rem] text-[0.9rem] font-light">
          SUBMIT
        </p>
      </form>
    </section>
  );
};

export default Contact;

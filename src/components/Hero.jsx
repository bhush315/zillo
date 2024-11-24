import hero from "../assets/hh.webp";

const Hero = () => {
  return (
    <section className="text-center text-xl sm:flex sm:flex-col sm:text-center sm:justify-center sm:items-center lg:flex-row lg:justify-around lg:items-center lg:text-left px-20 text-black lg:text-2xl">
      <div className="mt-4">
        <h1 className="font-bold">Get home recommendations</h1>
        <h1 className="text-base">
          Sign in for a more personalized experience.
        </h1>
        <button className="text-base mt-5 border-[1px] border-solid border-[#0040D6] rounded-xl px-5 py-[9px] cursor-pointer font-bold text-[#0040D6] hover:bg-[#E5E7E9]">
          Sign in
        </button>
      </div>
      <img src={hero} className="lg:mt-12" />
    </section>
  );
};

export default Hero;

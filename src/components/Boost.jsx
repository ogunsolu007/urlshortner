import React from "react";
import bgMobile from "../images/bg-boost-mobile.svg";
import bgDesktop from "../images/bg-boost-desktop.svg";

const Boost = () => {
  return (
    <>
      <section className="boost relative">
        <picture>
          <source media="(min-width:768px )" srcSet={bgDesktop} />
          <img src={bgMobile} alt="" />
        </picture>
        <div className=" boost-inner flex items-center justify-center flex-col">
          <h2 className=" text-center font-bold mb-5 text-3xl md:text-4xl text-white">Boost your links today</h2>
          <button className="btn-cta rounded-full">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Boost;

import Image from "next/image";
import React from "react";
import DotButton from "../ui/DotButton";

const HeroContainer = () => {
  return (
    <div className="w-full">
      <main className=" gradiant-bubble lg:grid lg:grid-cols-2 pb-20 lg:min-h-[80vh] relative top-0 left-0 overflow-hidden">
        <div className="pt-20 lg:pt-0 w-full flex h-full justify-center lg:justify-end items-center">
          <div className="preahvihear-regular w-fit ">
            <h2>Once a Developer Said</h2>
            <h1 className=" font-bold text-4xl lg:text-6xl py-4">
              Its easy to{" "}
              <span className="relative clip-excess-color-than-border learn-ring">
                learn
              </span>
              <br /> Programming
            </h1>
            <h4 className="html-text-gradient">
              When you think programming is writing HTML{" "}
            </h4>
            <div className="my-5 flex gap-3">
              <DotButton link="https://www.linkedin.com/in/bipinkhatri/" />
            </div>
          </div>
        </div>
        <div className=" pt-20 lg:pt-0 profile-picture relative w-full flex h-full justify-center items-center">
          <Image
            src="/profile.jpg"
            alt="thi is the"
            width={500}
            height={500}
            className="custom-irregular-border-radius w-80 z-10"
          />
        </div>
      </main>
    </div>
  );
};

export default HeroContainer;

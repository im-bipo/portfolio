import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="w-full bg-primary text-white">
        <main  className="wrapper gradiant-bubble grid lg:grid-cols-2 min-h-[100vh] relative top-0 left-0 ">
          <div className="w-full flex h-full justify-center lg:justify-end items-center">
            <div className="preahvihear-regular w-fit custom-cartoonish-font ">
            <h2>Once a Developer Said</h2>
            <h1 className=" font-bold text-6xl py-4">Its easy to <span className="relative learn-ring">learn</span><br/> Programming</h1>
            <h4 className="html-text-gradient">When you think programming is writing HTML </h4>
            </div>
          </div>
          <div className="w-full flex h-full justify-center items-center">
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
    </>
  );
};

export default page;

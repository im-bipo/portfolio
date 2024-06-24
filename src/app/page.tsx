
import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <>
      <div className="w-full bg-primary text-white">
        <main  className="wrapper gradiant-bubble lg:grid lg:grid-cols-2 pb-20 lg:min-h-[80vh] relative top-0 left-0 overflow-hidden">
          <div className="pt-20 lg:pt-0 w-full flex h-full justify-center lg:justify-end items-center">
            <div className="preahvihear-regular w-fit custom-cartoonish-font ">
            <h2>Once a Developer Said</h2>
            <h1 className=" font-bold text-4xl lg:text-6xl py-4">Its easy to <span className="relative learn-ring">learn</span><br/> Programming</h1>
            <h4 className="html-text-gradient">When you think programming is writing HTML </h4>
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eveniet eligendi deserunt porro saepe, nesciunt exercitationem ullam distinctio atque quia sint corporis quos beatae? Beatae, ab natus assumenda, quas harum consectetur distinctio, voluptates rem iste perferendis illo. Esse eaque quia, pariatur hic voluptas eveniet illo consectetur consequatur, ut quibusdam aperiam adipisci sed reprehenderit at doloremque magnam sint a aliquam minus, voluptates officiis. Enim earum, odio debitis dolores veritatis perspiciatis alias porro, recusandae facere rerum suscipit. Expedita atque rem et voluptate, adipisci, itaque nisi, doloribus impedit quos architecto asperiores exercitationem sint corrupti. Tempora dolores velit quod hic amet nemo optio illum voluptate in incidunt, delectus cumque earum nulla animi maxime consequuntur, enim assumenda provident. Quis laboriosam, enim expedita neque ea harum maxime est cupiditate quo at non cumque facere ipsam dolor sint, excepturi dicta eius nihil accusantium pariatur itaque. Repudiandae non minima provident odit mollitia. Natus illum, corporis libero facere quaerat, atque perspiciatis sint hic inventore doloremque quo modi aut! Sint, repellendus earum fugiat, delectus voluptates minima ducimus quibusdam, assumenda atque doloribus quo perspiciatis iure pariatur dolorem fuga asperiores tempora? Cum accusantium ut fugit praesentium odit, doloribus laudantium, itaque magnam nulla asperiores quia maiores, soluta consectetur nihil vel officia amet expedita. Voluptates a reprehenderit tempore exercitationem dolorum nihil modi eligendi. Corrupti, omnis et in rerum atque odio esse natus officiis fuga itaque fugiat quisquam aspernatur recusandae consectetur neque ipsum dolorum placeat explicabo maxime laborum? Deserunt blanditiis repudiandae illo in inventore ipsa quos quasi expedita recusandae porro, similique culpa accusantium laudantium error odit necessitatibus laboriosam consequuntur officia vitae quam. Quibusdam voluptatum eligendi totam ipsa natus repellendus quisquam nisi voluptatem eius veniam et similique saepe, corporis at sunt itaque architecto voluptate earum odit? Aspernatur aliquid culpa, qui quos quas veritatis voluptate ipsam. Consectetur excepturi itaque vero reiciendis officiis illo fugiat perferendis, quibusdam nisi.
    </>
  );
};

export default page;

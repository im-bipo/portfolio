import Link from "next/link";
import { Github, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const HeroContainer = () => {
  return (
    <div className="w-full py-10 container">
      <div className="">
        <Card className="bg-inherit/40 backdrop-blur-lg ">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">Bipin Khatri</h1>
                <p className="text-gray-400 mb-4">
                  Full stack Developer • UI/UX Designer • Freelancer
                </p>
              </div>
              <div className="flex p-0 mt-4 gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:contact@example.com">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://instagram.com">
                    <Instagram className="w-5 h-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-rows-[0] transition-[grid-template-rows] duration-1000 ease-in-out mt-4 element">
              <div className="">
                I&apos;m Bipin Khatri, a Full Stack Developer with a focus on
                React, Next.js, Prisma, Postgres, Tailwind, and Node.js. I enjoy
                turning creative ideas into functional products while ensuring a
                great user experience. I&apos;m passionate about both front-end
                and back-end development and always look for opportunities to
                learn and grow in the tech field.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroContainer;

{
  /* <main className=" lg:grid lg:grid-cols-2 pb-20 lg:min-h-[100vh] relative top-0 left-0 overflow-hidden">
<div className=" pt-20 lg:pt-0 w-full flex h-full justify-center lg:justify-end items-center border border-lime-300"> */
}
{
  /* <Card className="bg-black/50 border-white/10">
    <CardContent className="p-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2">Jakub Žitník</h1>
          <p className="text-gray-400 mb-4">
            📍 Ostrava, Czech Republic
          </p>
          <p className="text-xl max-w-2xl">
            I&apos;m 15 year old Full-Stack Web Developer. I have been
            programming for more than 5 years. I create professional
            websites.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:contact@example.com">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://instagram.com">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card> */
}
{
  /* </div>
<div className="pt-20 lg:pt-0 profile-picture relative w-full flex h-full justify-center items-center">
  <div className="m-5 lg:m-0 custom-irregular-border-radius w-[30rem] h-[15rem] z-10">
  </div>
</div>
</main> */
}

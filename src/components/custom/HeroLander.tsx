import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  LucideLinkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { BiLogoLinkedin } from "react-icons/bi";
const HeroContainer = () => {
  return (
    <div className="w-full py-8 md:p-8 container">
      <div className="intro-container">
        <Card className="border-0 sm:border bg-inherit/40 group backdrop-blur-lg shadow-none dark:bg-[#010409]/40 dark:border-0">
          <CardContent className="px-0 py-8 sm:p-8">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mt-2 sm:mb-2">
                  Bipin Khatri
                </h1>
                <p className="text-gray-700 dark:text-gray-400 mt-2 mb-4 text-[12px]">
                  Full stack Developer • App Developer
                </p>
              </div>
              <div className="flex p-0 gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="mailto:bipinkhatri.ram@gmail.com"
                    aria-label="Email of Bipin Khatri"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com/im-bipo"
                    aria-label="Github account of Bipin Khatri"
                    target="_blank"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://linkedin.com/in/bipinkhatri"
                    aria-label="LinkedIn account of Bipin Khatri"
                    target="_blank"
                  >
                    <BiLogoLinkedin />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid transition-[grid-template-rows] duration-1000 ease-in-out element">
              <div
              // className="auto-para"
              >
                <p className="text-sm text-justify">
                  I&apos;m Bipin Khatri, a Full Stack Developer with a focus on
                  React, Next.js, Prisma, Postgres, Tailwind, and Node.js. I
                  enjoy turning creative ideas into functional products while
                  ensuring a great user experience. I&apos;m passionate about
                  both front-end and back-end development and always look for
                  opportunities to learn and grow in the tech field.{" "}
                  {/* <span className="text-gray-700 dark:text-gray-200 hidden sm:inline group-hover:hidden dark:group-hover:hidden duration-150">
                    {" "}
                    Read more...
                  </span> */}
                </p>
                <p></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroContainer;

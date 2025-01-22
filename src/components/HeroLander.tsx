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
    <div className="w-full py-10 container">
      <div className="intro-container">
        <Card className="bg-inherit/40 backdrop-blur-lg ">
          <CardContent className="p-8">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mt-2 sm:mb-2">
                  Bipin Khatri
                </h1>
                <p className="text-gray-400 mb-4">
                  Full stack Developer • App Developer
                </p>
              </div>
              <div className="flex p-0 gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:bipinkhatri.ram@gmail.com">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/im-bipo" target="_blank">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://linkedin.com/in/bipinkhatri"
                    target="_blank"
                  >
                    <BiLogoLinkedin />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid transition-[grid-template-rows] duration-1000 ease-in-out element">
              <div className="auto-para">
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

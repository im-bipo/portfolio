/* eslint-disable @next/next/no-img-element */
import { GitBranchPlusIcon, Github } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Component() {
  return (
    <div className="relative bg-zinc-900 rounded-lg overflow-hidden group aspect-auto-16/9">
      <div className="overflow-hidden">
        <img
          src="/neocart.png"
          alt="Drone photography"
          className="w-full h-full min-h-[30rem] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* image overlay */}
        <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 group-hover:via-black/40 to-transparent transition-opacity duration-500" />

        {/* Content moved inside the image container */}
        <div className="absolute bottom-0 p-6 flex flex-col justify-end">
          {/* upper mustang */}
          <div className="relative group-hover:translate-y-0 translate-y-14 transform transition-transform duration-500">
            <h2 className="text-2xl font-bold text-white">Neo Cart</h2>
          </div>

          {/* lower mustang */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-gray-200 max-w-[40rem] line-clamp-2">
              Neocart is an AI Integrated online marketplace dedicated to
              selling authentic Nepali products, with a focus on supporting
              small-scale businesses. It showcases a wide variety of traditional
              handicrafts, clothing, and artisanal goods made by local artisans.
              The platform helps preserve Nepal&apos;s rich cultural heritage
              while promoting sustainable economic growth for small businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 my-4">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full">
              <span className="text-[22px] font-bold">N</span>
              <span className="text-sm text-white">Next.js</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full">
              <span className="text-[#3178C6] text-lg font-bold">R</span>
              <span className="text-sm text-white">React</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full">
              <span className="text-[#3178C6] text-lg font-bold">TS</span>
              <span className="text-sm text-white">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
      {/* button  */}
      <div className="absolute pb-10 pr-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit bottom-0 right-0">
        <Button className="right-0 relative inset-0">View Project</Button>
      </div>
      {/* button  */}
      <div className="absolute pt-5 pr-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-fit top-0 right-0">
        <Link href="https://github.com/sanchitpandeyyy/NeoCart" target="_blank">
          <Button className="right-0 relative inset-0 bg-black text-white hover:bg-gray-900 active:bg-gray-800 duration-150">
            <Github />
            Code
          </Button>
        </Link>
      </div>
    </div>
  );
}

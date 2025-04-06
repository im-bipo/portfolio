"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Technology, { tech } from "@/components/ui/technology";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

type TechnologyUsedProps = {
  technologies: (keyof typeof tech)[];
};

const TechnologyUsed = ({ technologies }: TechnologyUsedProps) => {
  return (
    <Carousel
      className="my-4 cursor-grab active:cursor-grabbing select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, white 5%, white 95%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, white 5%, white 95%, transparent 100%)",
      }}
      opts={{
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 0.5,
          playOnInit: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="">
        {technologies.map((tech, index) => (
          <CarouselItem key={index} className="basis-[unset]">
            <Technology variant={tech as keyof typeof TechnologyUsed} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TechnologyUsed;

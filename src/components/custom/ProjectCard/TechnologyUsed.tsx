"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Technology from "@/components/ui/technology";
import AutoScroll from "embla-carousel-auto-scroll";
import React from "react";

const TechnologyUsed = () => {
  return (
    <Carousel
      className="my-4"
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
        <CarouselItem className="basis-[unset]">
          <Technology variant="NextJs" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="GraphQL" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="ExpressJs" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="TailwindCss" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="TailwindCss" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="TailwindCss" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="TailwindCss" />
        </CarouselItem>
        <CarouselItem className="basis-[unset]">
          <Technology variant="TailwindCss" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default TechnologyUsed;

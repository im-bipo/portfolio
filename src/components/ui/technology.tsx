import React from "react";

const tech = {
  NextJs: {
    icon: "N",
    color: "#000000",
    title: "Next Js",
  },
  ReactJs: {
    icon: "R",
    color: "#3178C6",
    title: "React Js",
  },
  TypeScript: {
    icon: "TS",
    color: "#3178C6",
    title: "TypeScript",
  },
  TailwindCss: {
    icon: "TW",
    color: "#38B2AC",
    title: "Tailwind Css",
  },
  NodeJs: {
    icon: "N",
    color: "#68A063",
    title: "Node Js",
  },
  ExpressJs: {
    icon: "E",
    color: "#000000",
    title: "Express Js",
  },
  GraphQL: {
    icon: "GQL",
    color: "#E535AB",
    title: "GraphQL",
  },
};

type TechnologyProps = {
  variant: keyof typeof tech;
  className?: string;
};

const Technology = ({ variant, className }: TechnologyProps) => {
  return (
    <div
      className={
        `flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full ` +
        className
      }
    >
      <span className={`text-[22px] font-bold text-[${tech[variant].color}]`}>
        {tech[variant].icon}
      </span>
      <span className="text-sm text-white">{tech[variant].title}</span>
    </div>
  );
};

export default Technology;

"use client";
import React from "react";

type DotButtonTypes = {
  link?: string;
  text: string;
  dot?: boolean;
};

const DotButton: React.FC<DotButtonTypes> = ({ text, dot, link }) => {
  return (
    <a href={link}>
      <div className="rounded-full px-3 py-1 flex gap-2 items-center shadow-yellow-300 transition-all duration-150 shadow-sm cursor-pointer">
        {text}
        {dot && (
          <span className="bg-white rounded-full inline-block w-3 h-3 flicker"></span>
        )}
      </div>
    </a>
  );
};

export default DotButton;

"use client";
import React from "react";
import { Vortex } from "../ui/Vortex";
import MyWorksBtn from "./MyWorksBtn";

export function Hero() {
  return (
    <div className=" mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={300}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-rose-600 text-4xl md:text-6xl font-bold text-center drop-shadow">
          Ahmad Mahmoud
        </h2>
        <p className="text-rose-50 text-sm md:text-2xl max-w-xl mt-6 text-center">
          <span className="wave">👋🏻</span> Hello, I am a Web Developer and this
          is my personal Portfolio that shows my works and experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <MyWorksBtn />
          <button className="px-4 py-2  text-rose-100 ">Contact Me</button>
        </div>
      </Vortex>
    </div>
  );
}

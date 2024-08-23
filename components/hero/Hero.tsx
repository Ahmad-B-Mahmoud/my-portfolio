"use client";

import { Vortex } from "../ui/Vortex";
import Link from "next/link";
import { Button } from "../ui/button";
import { Contact } from "../contact/Contact";

export function Hero() {
  return (
    <div className=" mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        rangeY={800}
        particleCount={200}
        baseHue={300}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-primary text-4xl md:text-6xl font-bold text-center drop-shadow">
          Ahmad Mahmoud
        </h2>
        <p className="text-foreground text-sm md:text-2xl max-w-xl mt-6 text-center">
          <span className="wave">👋🏻</span> Hello, I am a Web Developer and this
          is my personal Portfolio that shows my works and experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button asChild>
            <Link href="/#my-works">
              <svg
                className="mr-2 h-4 w-4 text-primary-foreground"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              My Works
            </Link>
          </Button>
          <Contact />
        </div>
      </Vortex>
    </div>
  );
}

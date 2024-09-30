"use client";

import { Vortex } from "../ui/Vortex";
import { Link } from "@/lib/i18n";
import { Button } from "../ui/button";
import { Contact } from "../contact/Contact";
import { Loader2, BriefcaseBusiness, MessagesSquare } from "lucide-react";
import { useState } from "react";
import * as m from "@/paraglide/messages.js";

export function Hero() {
  // Variables:
  const [isLoading, setIsLoading] = useState(false);
  // Handlers:
  const handleLoading = () => {
    setIsLoading(true);
  };
  return (
    <div className=" mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        rangeY={800}
        particleCount={200}
        baseHue={300}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-primary text-4xl md:text-6xl font-black text-center drop-shadow">
          {m.my_Name()}
        </h2>
        <p className="text-foreground text-sm md:text-2xl max-w-xl mt-6 text-center">
          <span className="wave">👋🏻</span> {m.hero_description()}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button asChild onClick={handleLoading} disabled={isLoading}>
            <Link href="/my-works">
              {isLoading ? (
                <Loader2 className="me-2 h-4 w-4 animate-spin" />
              ) : (
                <BriefcaseBusiness className="me-2 h-4 w-4 text-primary-foreground" />
              )}{" "}
              {m.my_works_btn()}
            </Link>
          </Button>
          <Contact>
            <Button variant="secondary">
              <MessagesSquare className="w-4 h-4 me-2 text-secondary-foreground" />{" "}
              {m.contact_me_btn()}
            </Button>
          </Contact>
        </div>
      </Vortex>
    </div>
  );
}

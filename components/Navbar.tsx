"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  House,
  BriefcaseBusiness,
  MessagesSquare,
  Github,
  Languages,
} from "lucide-react";
import * as m from "@/paraglide/messages.js";

export function Navbar() {
  const links = [
    {
      title: m.home_btn(),
      icon: <House className="h-full w-full  text-rose-500" />,
      href: "/",
    },

    {
      title: m.my_works_btn(),
      icon: <BriefcaseBusiness className="h-full w-full  text-rose-500  " />,
      href: "/my-works",
    },
    {
      title: m.contact_me_btn(),
      icon: <MessagesSquare className="h-full w-full  text-rose-500  " />,
      href: "#",
    },
    {
      title: "Github",
      icon: <Github className="h-full w-full  text-rose-500  " />,
      href: "https://github.com/Ahmad-B-Mahmoud",
    },
    {
      title: m.language(),
      icon: <Languages className="h-full w-full  text-rose-500  " />,
      href: "/",
    },
  ];
  return (
    <div className="fixed bottom-2 left-0 right-0 flex items-center justify-center h-[7rem] w-full z-40">
      <FloatingDock items={links} />
    </div>
  );
}

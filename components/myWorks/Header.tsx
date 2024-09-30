"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import * as m from "@/paraglide/messages.js";

function Header() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-rose-50 to-rose-300 py-2 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {m.my_works_btn()}
      </motion.h1>
    </LampContainer>
  );
}

export default Header;

"use client";
import { DirectionProvider as Provider } from "@radix-ui/react-direction";
import { languageTag } from "@/paraglide/runtime";

const DirectionProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <Provider dir={languageTag() === "ar" ? "rtl" : "ltr"}>{children}</Provider>
  );
};

export default DirectionProvider;

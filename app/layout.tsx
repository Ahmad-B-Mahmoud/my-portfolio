import { LanguageProvider } from "@inlang/paraglide-next";
import { languageTag, type AvailableLanguageTag } from "@/paraglide/runtime.js";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { poppins, noto_kufi_arabic } from "./fonts";
import DirectionProvider from "@/components/DirectionProvider";

export const metadata: Metadata = {
  title: "Ahmad Mahmoud",
  description: "My Personal Web Developer's Portfolio.",
};

// This is type-safe & forces you to keep it up-to-date
const direction: Record<AvailableLanguageTag, "rtl" | "ltr"> = {
  en: "ltr",
  ar: "rtl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html
        lang={languageTag()}
        dir={direction[languageTag()]}
        suppressHydrationWarning={true}
      >
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            languageTag() === "ar"
              ? noto_kufi_arabic.className
              : poppins.className
          )}
          suppressHydrationWarning={true}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <DirectionProvider>
              {children}
              <Navbar />
              <Toaster />
            </DirectionProvider>
          </ThemeProvider>
        </body>
      </html>
    </LanguageProvider>
  );
}

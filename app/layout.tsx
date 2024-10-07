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
          <link rel="manifest" href="/manifest.json" />
          <meta name="application-name" content="Ahmad Mahmoud" />
          <meta name="theme-color" content="#881337" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/16x16.png"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/ios/180.png" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ahmad Mahmoud" />
          <meta
            property="og:description"
            content="Ahmad Mahmoud's Personal Web Developer Portfolio."
          />
          <meta property="og:site_name" content="Ahmad Mahmoud" />
          <meta property="og:url" content="https://ahmadmahmoud.vercel.app/" />
          <meta
            property="og:image"
            content="https://ahmadmahmoud.vercel.app/icons/ios/180.png"
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

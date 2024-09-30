import { Heart, Facebook, Github, Twitter } from "lucide-react";
import Discord from "../icons/Discord";
const Footer = () => {
  return (
    <footer className="bg-card z-50">
      <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <div className="sm:flex sm:justify-between sm:items-center">
          <span className="text-sm text-accent-foreground sm:text-center">
            Developed with{" "}
            <Heart className="w-4 h-4 inline-block text-primary" /> By Ahmad
            Mahmoud.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-primary hover:text-rose-800">
              <Facebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-rose-500 hover:text-rose-800 ms-5">
              <Discord className="w-4 h-4" />
              <span className="sr-only">Discord server</span>
            </a>
            <a href="#" className="text-rose-500 hover:text-rose-800 ms-5">
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-rose-500 hover:text-rose-800 ms-5">
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

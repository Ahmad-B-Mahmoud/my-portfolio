import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import MyWorks from "@/components/myWorks/MyWorks";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <MyWorks />
      <Footer />
    </main>
  );
}

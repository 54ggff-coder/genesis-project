import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export const metadata: Metadata = {
  title: "Project Genesis — Home",
  description: "Discover your hidden potential with Project Genesis.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}

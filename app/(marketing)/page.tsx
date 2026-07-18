import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";

export const metadata: Metadata = {
  title: "Project Genesis — Discover Your Hidden Potential",
  description:
    "Discover your hidden skills, personality, future career paths and a personalized growth plan.",
};

export default function MarketingHomePage() {
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

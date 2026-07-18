import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PremiumBanner from "@/components/PremiumBanner";
import AdBanner from "@/components/AdBanner";
import { useAuthContext } from "@/context/AuthContext";
import { useI18n } from "@/lib/i18n";

const SAMPLE_STRENGTHS = [
  { label: "Analytical Thinking", score: 88, icon: "🧠" },
  { label: "Creative Problem Solving", score: 75, icon: "💡" },
  { label: "Communication", score: 70, icon: "🗣️" },
];

const SAMPLE_CAREERS = [
  { title: "Software Engineer", match: 92, desc: "Design and build technical systems." },
  { title: "Product Manager", match: 85, desc: "Lead teams and shape product strategy." },
  { title: "Data Analyst", match: 79, desc: "Translate data into business insights." },
];

export default function Report() {
  const { user } = useAuthContext();
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main className="container-page py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-foreground">{t("report_title")}</h1>
          <p className="text-muted-foreground mt-1">Based on your latest assessment</p>
        </div>

        {/* Strengths */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-4">{t("report_strengths")}</h2>
          <div className="grid sm:grid-cols-3 gap-4">

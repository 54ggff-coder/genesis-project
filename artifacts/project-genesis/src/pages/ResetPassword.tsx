import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResetPassword() {
  return (
    <>
      <Navbar />
      <main className="container-page py-20 max-w-md text-center">
        <div className="text-5xl mb-4">🔐</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Reset Your Password</h1>
        <p className="text-muted-foreground mb-8">
          To reset your password, please contact our support team with your username and we'll help you regain access.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
          Contact Support
        </Link>
      </main>
      <Footer />
    </>
  );
}

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ForgotPassword() {
  return (
    <>
      <Navbar />
      <main className="container-page py-20 max-w-md text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Password Reset</h1>
        <p className="text-muted-foreground mb-8">
          Since accounts use a username and password (no email), please contact support if you've lost access to your account.
        </p>
        <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity me-3">
          Contact Support
        </Link>
        <Link href="/login" className="inline-block px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-colors">
          Back to Login
        </Link>
      </main>
      <Footer />
    </>
  );
}

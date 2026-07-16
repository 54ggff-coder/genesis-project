"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await signIn(
      email,
      password
    );

    setLoading(false);

    if (error) {

      alert(error.message);

      return;

    }

    router.push("/dashboard");
  }

  return (

    <div className="max-w-md mx-auto mt-20">

      <h1 className="text-3xl font-bold mb-6">

        Login

      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >

        <input
          className="w-full border rounded-xl p-3"
          placeholder="Email"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full border rounded-xl p-3"
          placeholder="Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-black text-white rounded-xl w-full p-3"
        >
          {loading ? "Loading..." : "Login"}
        </button>

      </form>

    </div>

  );
}
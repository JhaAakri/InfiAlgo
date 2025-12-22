"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Signin = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] pt-32">
      <div className="mx-auto max-w-[480px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/5 border border-white/10 px-8 py-10 backdrop-blur"
        >
          <h2 className="mb-10 text-center text-3xl font-semibold text-white">
            Login to Your Account
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
              });

              if (!res?.error) {
                router.push("/"); // ✅ HOME
              } else {
                alert("Invalid email or password");
              }
            }}
          >
            <div className="mb-8 flex flex-col gap-6">
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }
                className="bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/50 focus:border-cyan-400 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }
                className="bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-white/50 focus:border-cyan-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-500 py-3 font-medium text-black hover:bg-cyan-400 transition"
            >
              Log in
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-white/70">
            Don’t have an account?{" "}
            <Link href="/auth/signup" className="text-cyan-400">
              Sign Up
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Signin;

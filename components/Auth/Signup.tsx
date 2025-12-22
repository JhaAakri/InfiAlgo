"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <>
      {/* ===== SIGN UP START ===== */}
      <section className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] pt-32 pb-20 overflow-hidden">

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[620px] px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
              px-8 py-10
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
            "
          >
            {/* Heading */}
            <h2 className="mb-10 text-center text-3xl font-semibold text-white">
              Create Your Account
            </h2>

            {/* Google Signup */}
            <button
              aria-label="signup with google"
              className="
                mb-8 flex w-full items-center justify-center gap-3
                rounded-full
                border border-white/15
                bg-white/5
                px-6 py-3
                text-sm text-white/90
                transition-all duration-300
                hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300
              "
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M19.6 10.23c0-.68-.06-1.35-.17-2H10v3.78h5.43c-.23 1.25-.94 2.31-2.01 3.02v2.5h3.24c1.9-1.75 2.94-4.32 2.94-7.3Z"
                  fill="#4285F4"
                />
                <path
                  d="M10 20c2.7 0 4.97-.9 6.63-2.47l-3.24-2.5c-.9.6-2.06.96-3.39.96-2.6 0-4.8-1.76-5.58-4.13H1.08v2.6C2.74 17.97 6.1 20 10 20Z"
                  fill="#34A853"
                />
                <path
                  d="M4.42 11.86a5.99 5.99 0 0 1 0-3.72V5.54H1.08a10 10 0 0 0 0 8.92l3.34-2.6Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10 3.97c1.47 0 2.78.5 3.81 1.48l2.85-2.85C14.97.91 12.7 0 10 0 6.1 0 2.74 2.03 1.08 5.54l3.34 2.6C5.2 5.73 7.4 3.97 10 3.97Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-full bg-white/10"></span>
              <p className="text-sm text-white/60">or register with email</p>
              <span className="h-px w-full bg-white/10"></span>
            </div>

            {/* Form */}
            <form>
              <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  className="
                    bg-transparent
                    border-b border-white/20
                    pb-3 text-white
                    placeholder:text-white/50
                    focus:border-cyan-400
                    focus:outline-none
                  "
                />

                <input
                  type="text"
                  placeholder="Last name"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  className="
                    bg-transparent
                    border-b border-white/20
                    pb-3 text-white
                    placeholder:text-white/50
                    focus:border-cyan-400
                    focus:outline-none
                  "
                />
              </div>

              <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={data.email}
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                  className="
                    bg-transparent
                    border-b border-white/20
                    pb-3 text-white
                    placeholder:text-white/50
                    focus:border-cyan-400
                    focus:outline-none
                  "
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="
                    bg-transparent
                    border-b border-white/20
                    pb-3 text-white
                    placeholder:text-white/50
                    focus:border-cyan-400
                    focus:outline-none
                  "
                />
              </div>

              {/* Checkbox */}
              <div className="mb-10 flex items-center gap-2 text-sm text-white/70">
                <input type="checkbox" className="accent-cyan-400" />
                Keep me signed in
              </div>

              {/* Submit */}
              <button
                aria-label="create account"
                className="
                  w-full rounded-full
                  bg-cyan-500
                  py-3 font-medium text-black
                  transition-all duration-300
                  hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30
                "
              >
                Create Account
              </button>

              {/* Footer */}
              <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/70">
                Already have an account?{" "}
                <Link
                  href="/auth/signin"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      {/* ===== SIGN UP END ===== */}
    </>
  );
};

export default Signup;

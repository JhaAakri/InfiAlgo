"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Copy, CreditCard, Landmark } from "lucide-react";

export default function PaymentPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#020b2a] to-[#020617] pt-32 pb-40 overflow-hidden">

      {/* ===== Multi-layer Ambient Glow ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1300px] px-4 sm:px-6">

        {/* ================= PAGE HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[760px] mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
              Secure Payments
            </span>
          </div>

          <h1 className="text-[38px] sm:text-[46px] font-semibold text-white leading-tight mb-5">
            Payment Options Built for
            <br />
            <span className="text-cyan-400">Serious Investors</span>
          </h1>

          <p className="text-white/70 text-[16px] leading-[28px]">
            Choose a payment method that aligns with your investment strategy.
            Every option below is verified, secure, and optimized for
            international transactions.
          </p>
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ================= PRIMARY: CRYPTO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              lg:col-span-2
              rounded-[28px]
              bg-white/10
              backdrop-blur-xl
              border border-white/15
              p-10
              shadow-[0_30px_80px_rgba(0,0,0,0.4)]
            "
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/markets/Binance-logo.png"
                  alt="Binance"
                  width={120}
                  height={32}
                />
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/15 text-cyan-300">
                  Recommended
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* QR */}
              <div className="flex justify-center">
                <div className="relative p-4 rounded-2xl bg-white">
                  <Image
                    src="/images/markets/qrcode.jpg"
                    alt="Crypto QR"
                    width={220}
                    height={220}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3">
                  USDT (TRC20) Wallet Address
                </h3>

                <div className="flex items-center gap-3 bg-black/40 border border-white/15 rounded-xl px-4 py-3 mb-4">
                  <span className="text-sm text-white/80 truncate">
                    TAcTJiMvv2eS1R4FgEngrA861xoa5r335a
                  </span>
                  <button className="ml-auto p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition">
                    <Copy className="w-4 h-4 text-cyan-300" />
                  </button>
                </div>

                <p className="text-white/60 text-sm leading-[22px]">
                  Send only USDT on the TRC20 network. Funds sent via incorrect
                  networks cannot be recovered.
                </p>
              </div>
            </div>
              {/* Stripe */}
            <div className="mt-8">
                 <div className="relative w-[220px] h-[220px] mx-auto mb-4 p-3">
                <Image
                src="/images/markets/stripe.png" 

                  alt="Binance QR"
                  fill
                  className="object-contain"
                />
              </div>
             
              <p className="text-sm text-gray-600">
                Pay instantly using card through our Stripe gateway
              </p>
            </div>
          </motion.div>

          {/* ================= SECONDARY METHODS ================= */}
          <div className="flex flex-col gap-8">

            {/* ================= BANK TRANSFER ================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                bg-white/10
                backdrop-blur-xl
                border border-white/15
                p-7
              "
            >
              <div className="flex items-center gap-3 mb-5">
                <Landmark className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-medium text-lg">
                  Bank Transfer
                </h4>
              </div>

              <div className="space-y-3 text-sm text-white/75">
                <div className="flex justify-between gap-4">
                  <span className="text-white/50">Account Name</span>
                  <span className="text-right">
                    Infiwealth Technologies Limited
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/50">Bank</span>
                  <span>DBS Bank (Hong Kong)</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/50">Location</span>
                  <span>Hong Kong SAR</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/50">A/C Number</span>
                  <span className="font-mono tracking-wide">
                    7950140073
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/50">Bank Code</span>
                  <span>016</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/50">Branch Code</span>
                  <span>478</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-white/50">SWIFT</span>
                  <span className="font-mono tracking-wide">
                    DHBKHKHH
                  </span>
                </div>
              </div>

              <p className="mt-5 text-xs text-white/50 leading-[20px]">
                Please ensure all details are entered correctly when making an
                international transfer. Processing time depends on your bank.
              </p>
            </motion.div>

            {/* ================= STRIPE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-cyan-400" />
                <h4 className="text-white font-medium text-lg">
                  Card Payment
                </h4>
              </div>

              <p className="text-sm text-white/70 mb-5">
                Pay instantly using international debit or credit cards through
                our secure Stripe payment gateway.
              </p>

              <button className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition">
                Pay with Card
              </button>
            </motion.div>

          </div>
        </div>

        {/* ================= FOOTER NOTE ================= */}
        <p className="mt-28 max-w-[1000px] mx-auto text-center text-white/55 text-sm leading-[24px]">
          InfiAlgo empowers investors with access to global markets including
          Forex, Comex, Crypto, and US equities. All payments are handled under
          strict security and compliance protocols.
        </p>

      </div>
    </section>
  );
}

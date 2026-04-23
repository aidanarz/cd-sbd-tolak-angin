"use client"
import { motion } from "framer-motion"
import { ShoppingBag, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section id="beli" className="relative py-32 px-6 bg-[#1a4733] overflow-hidden">
      {/* Radial yellow glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-[120px]" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Jangan Biarkan{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5C518 0%, #e8a500 50%, #FFD700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Masuk Angin
            </span>{" "}
            <span className="block text-white/80 font-light italic text-4xl md:text-5xl mt-2">
              Menghambat Aktivitas Anda
            </span>
          </h2>

          <p className="text-white/60 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
            Satu sachet <span className="brand-name">TOLAK ANGIN</span> cukup untuk mengembalikan kenyamanan Anda. Tersedia di apotek dan minimarket
            terdekat, atau pesan langsung secara online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-sm shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:from-yellow-300 hover:to-amber-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag className="w-4 h-4" />
              Beli di Tokopedia
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-white/80 font-medium text-sm hover:border-yellow-400/40 hover:text-yellow-100 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cari Apotek Terdekat
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

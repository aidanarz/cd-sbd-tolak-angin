"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

// ⚠️ TEMPLATE — Replace with real testimonials before publishing
const testimonials = [
  {
    name: "Siti",
    location: "Jakarta, DKI Jakarta",
    role: "Ibu Rumah Tangga",
    text: "TOLAK ANGIN selalu jadi andalan saya ketika masuk angin. Rasanya langsung lebih nyaman setelah minum satu sachet.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Budi",
    location: "Bandung, Jawa Barat",
    role: "Mahasiswa",
    text: "Saya selalu bawa TOLAK ANGIN ke mana-mana. Praktis dan manjur untuk mengatasi perut kembung saat perjalanan jauh.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  },
  {
    name: "Rina",
    location: "Surabaya, Jawa Timur",
    role: "Karyawan",
    text: "Produk herbal favorit keluarga saya. Anak-anak dan suami juga sudah percaya TOLAK ANGIN sebagai pertolongan pertama masuk angin.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
  },
]

const trustStats = [
  { value: "70+ Tahun", label: "Dipercaya Indonesia" },
  { value: "Bahan herbal alami", label: "Buah Adas, Centella, Cengkeh, dll" },
  { value: "BPOM", label: "Terdaftar & Tersertifikasi" },
]

export default function SocialProofSection() {
  return (
    <section id="testimoni" className="relative py-32 px-6 bg-[#123a2a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Trust bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {trustStats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #F5C518 0%, #e8a500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-light tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        <p className="text-white/20 text-xs text-center -mt-20 mb-20"></p>

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Mereka yang{" "}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(135deg, #F5C518 0%, #e8a500 50%, #FFD700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Percaya
            </span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-yellow-400/20 hover:bg-white/[0.04] transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-yellow-400/0 to-transparent group-hover:via-yellow-400/30 transition-all duration-500" />

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-yellow-400/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed font-light mb-6 italic">{t.text}</p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-yellow-400/20 grayscale opacity-60"
                />
                <div>
                  <div className="text-white/80 text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

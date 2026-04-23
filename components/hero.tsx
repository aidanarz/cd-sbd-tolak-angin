"use client"
import { useRef } from "react"
import Image from "next/image"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0d2418] relative overflow-hidden">
      {/* SVG Filters */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.05  0 1 0 0 0.04  0 0 1 0 0  0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#F5C518" />
            <stop offset="70%" stopColor="#e8a500" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Mesh Gradient Background — Tolak Angin yellow palette */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#0d2418", "#1d4b36", "#2a6648", "#1a4733", "#F5C518"]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-55"
        colors={["#113325", "#1d5a3f", "#F5C518", "#e8a500"]}
        speed={0.2}
      />

      {/* Navbar is rendered outside, this section starts from top */}

      {/* Main Hero Content */}
      <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
        <div className="text-left">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #F5C518 40%, #e8a500 70%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
            >
              Orang pintar minum 
            </motion.span>
            <span className="block whitespace-nowrap text-5xl md:text-6xl lg:text-7xl">
              <span className="brand-name" style={{ color: "#ffffff" }}>TOLAK ANGIN</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg font-light text-white/70 mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="brand-name" style={{ color: "#ffffff" }}>TOLAK ANGIN</span> adalah herbal terstandar untuk masuk angin yang diformulasikan sejak tahun 1930. Bahan bahan nya antara lain seperti jahe, daun mint, adas, kayu ules, dan madu. Telah melalui uji pra klinik dan subkronik, dan disimpulkan bahwa <span className="brand-name" style={{ color: "#ffffff" }}>TOLAK ANGIN</span> dapat memelihara daya tahan tubuh dan aman dikonsumsi jangka panjang
          </motion.p>

          <motion.div
            className="flex items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#features"
              className="px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-yellow-400/50 hover:text-yellow-100 cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Khasiat dan Manfaat
            </motion.a>
            <motion.a
              href="#beli"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold text-sm transition-all duration-300 hover:from-yellow-300 hover:to-amber-400 cursor-pointer shadow-lg hover:shadow-yellow-500/30 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Beli Sekarang
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* Product Image */}
      <motion.div
        className="absolute right-4 md:right-10 lg:right-16 top-[10%] md:top-[12%] lg:top-[0%] z-20 pointer-events-none"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.7 },
          x: { duration: 0.8, delay: 0.7 },
          y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
      >
        <div className="relative w-[190px] h-[320px] md:w-[285px] md:h-[460px] lg:w-[360px] lg:h-[600px]">
          <div className="absolute -inset-6 rounded-full bg-yellow-400/20 blur-3xl" />
          <Image
            src="/produk-tolak-angin.png"
            alt="Produk Tolak Angin"
            fill
            priority
            className="object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
          />
        </div>
      </motion.div>

      {/* Pulsing Border Decoration */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#F5C518", "#e8a500", "#ffffff", "#FFD700", "#b8860b", "#fffacd", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spots={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408}
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          />
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle-ta" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-yellow-300/80 font-medium">
              <textPath href="#circle-ta" startOffset="0%">
                TOLAK ANGIN • Herbal Asli • Sido Muncul • Sejak 1951 •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}

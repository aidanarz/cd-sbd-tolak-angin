"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5">
      <motion.div
        className="flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative w-8 h-8 overflow-hidden rounded-full ring-1 ring-yellow-300/50">
          <Image
            src="/icon-sido-mortar.png"
            alt="Logo Sido Muncul"
            fill
            priority
            className="object-cover"
          />
        </div>
        <span className="brand-name text-sm tracking-widest">TOLAK ANGIN</span>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-2">
        {["Manfaat", "Testimoni", "Beli"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white/80 hover:text-yellow-200 text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-2.5 py-2 rounded-full bg-yellow-400 text-black font-normal text-xs transition-all duration-300 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-[4.75rem] z-0">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <button className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold text-xs transition-all duration-300 hover:bg-yellow-300 cursor-pointer h-8 flex items-center z-10">
          Beli Sekarang
        </button>
      </div>
    </header>
  )
}

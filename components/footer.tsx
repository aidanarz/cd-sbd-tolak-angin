"use client"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-[#113325] border-t border-white/10 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="relative w-7 h-7 overflow-hidden rounded-full ring-1 ring-yellow-300/50">
            <Image src="/icon-sido-mortar.png" alt="Logo Sido Muncul" fill className="object-cover" />
          </div>
          <span className="brand-name text-sm tracking-widest">TOLAK ANGIN</span>
        </div>
        <p className="text-white/20 text-xs text-center">
          © {new Date().getFullYear()} PT Industri Jamu dan Farmasi Sido Muncul Tbk. Hak cipta dilindungi.
        </p>
        <p className="text-white/20 text-xs">
          Produk telah terdaftar di BPOM RI
        </p>
      </div>
    </footer>
  )
}

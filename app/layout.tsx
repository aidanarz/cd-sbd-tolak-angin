import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TOLAK ANGIN — Herbal Terpercaya Indonesia",
  description:
    "Atasi masuk angin, mual, dan kembung dengan formulasi herbal alami TOLAK ANGIN dari Sido Muncul. Dipercaya jutaan keluarga Indonesia sejak 1951.",
  icons: {
    icon: "/icon-sido-mortar.png",
    shortcut: "/icon-sido-mortar.png",
    apple: "/icon-sido-mortar.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant" })
const lato = Lato({ subsets: ["latin"], weight: ["300", "400"], variable: "--font-lato" })

export const metadata: Metadata = {
  title: "Mateo y Bernardita - Wedding Invitation",
  description: "Join us in celebrating our special day",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lato.variable} font-sans`}>{children}</body>
    </html>
  )
}


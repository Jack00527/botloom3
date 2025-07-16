import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"

// Using Outfit font which is more modern and professional
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Botloom – The Future, Tailored",
  description:
    "Custom AI Solutions for Every Problem. We build advanced, tailored AI that works exactly the way your business needs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}

import type { Metadata } from "next"
import { Outfit, Fredoka } from "next/font/google"
import "./globals.css"
import { YarnCursor } from "@/components/ui/YarnCursor"

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
})

const fredoka = Fredoka({
	subsets: ["latin"],
	variable: "--font-fredoka",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Mahara | Plushie Crochet Store",
	description: "Handcrafted with love and joy.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${outfit.variable} ${fredoka.variable} antialiased`}>
				<YarnCursor />
				{children}
			</body>
		</html>
	)
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
	{ href: "/", label: "Home" },
	{ href: "/products", label: "Shop" },
	{ href: "/about", label: "Our Story" },
]

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b-2 border-dashed border-charcoal/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-3 group"
					>
						<span className="font-display text-2xl font-bold tracking-tight text-primary group-hover:scale-105 transition-transform">
							Mahara
						</span>
						<div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
							<Image
								src="/logo.jpg"
								alt="Mahara Logo"
								fill
								className="object-cover scale-110"
							/>
						</div>
					</Link>

					{/* Desktop Links */}
					<div className="hidden md:flex gap-8 items-center">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-charcoal hover:text-primary font-medium transition-colors"
							>
								{link.label}
							</Link>
						))}
						<button className="relative p-2 hover:bg-sand/30 rounded-full transition-colors group">
							<ShoppingBag className="w-6 h-6 text-charcoal group-hover:text-primary transition-colors" />
							<span className="absolute top-0 right-0 w-4 h-4 bg-accent text-[10px] font-bold text-charcoal flex items-center justify-center rounded-full">
								0
							</span>
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 text-charcoal hover:bg-sand/30 rounded-full transition-colors"
					>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-cream border-t border-charcoal/10 overflow-hidden"
					>
						<div className="px-4 py-4 space-y-4 flex flex-col items-center">
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="text-lg font-medium text-charcoal hover:text-primary transition-colors"
								>
									{link.label}
								</Link>
							))}
							<div className="pt-4 border-t border-charcoal/10 w-full flex justify-center">
								<button className="flex items-center gap-2 text-charcoal hover:text-primary font-medium">
									<ShoppingBag className="w-5 h-5" />
									Cart (0)
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

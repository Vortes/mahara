"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Product } from "@/lib/data"
import { Button } from "./Button"
import { ShoppingBag, Heart } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
	product: Product
}

export function ProductCard({ product }: ProductCardProps) {
	// "Petting" interaction state
	const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>(
		[]
	)

	const handlePet = (e: React.MouseEvent) => {
		// Prevent navigation when clicking to pet (if clicking the image wrapper)
		e.preventDefault()
		e.stopPropagation()

		// Add a new heart
		const newHeart = {
			id: Date.now(),
			x: e.clientX,
			y: e.clientY,
		}
		setHearts((prev) => [...prev, newHeart])

		// Cleanup heart after animation
		setTimeout(() => {
			setHearts((prev) => prev.filter((h) => h.id !== newHeart.id))
		}, 1000)
	}

	return (
		<>
			<motion.div
				whileHover={{ y: -8 }}
				className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-charcoal/5 relative flex flex-col h-full"
			>
				<div
					className="block relative aspect-square bg-sage-light/30 overflow-hidden cursor-grab active:cursor-grabbing flex-shrink-0"
					onClick={handlePet}
				>
					<motion.div
						whileTap={{ scale: 0.95, rotate: -2 }}
						className="relative w-full h-full"
					>
						<Image
							src={product.image}
							alt={product.name}
							fill
							className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
						/>
					</motion.div>

					{/* Heart Overlay for "Petting" */}
					<AnimatePresence>
						{hearts.map((heart) => (
							<motion.div
								key={heart.id}
								initial={{ opacity: 1, scale: 0.5, y: 0 }}
								animate={{ opacity: 0, scale: 1.5, y: -100 }}
								exit={{ opacity: 0 }}
								style={{
									position: "fixed",
									left: heart.x,
									top: heart.y,
									pointerEvents: "none",
									zIndex: 100,
								}}
								className="text-blush drop-shadow-md"
							>
								<Heart className="w-8 h-8 fill-current" />
							</motion.div>
						))}
					</AnimatePresence>

					<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
				</div>

				<div className="p-6 flex flex-col flex-grow">
					<div className="flex justify-between items-start mb-2">
						<div>
							<p className="text-xs font-bold text-terracotta tracking-wider uppercase mb-1">
								{product.category}
							</p>
							<Link href={`/products/${product.id}`}>
								<h3 className="font-display text-xl font-bold text-charcoal hover:text-primary transition-colors">
									{product.name}
								</h3>
							</Link>
						</div>
						<span className="font-display text-lg font-bold text-primary">
							${product.price.toFixed(2)}
						</span>
					</div>

					<p className="text-charcoal/70 text-sm line-clamp-2 mb-4 leading-relaxed flex-grow">
						{product.description}
					</p>

					<div className="mt-auto">
						<Link
							href={`/products/${product.id}`}
							className="w-full block"
						>
							<Button
								className="w-full gap-2 group-hover:bg-primary group-hover:text-white"
								variant="secondary"
							>
								View Details
							</Button>
						</Link>
					</div>
				</div>
			</motion.div>
		</>
	)
}

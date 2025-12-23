"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProductCard } from "@/components/ui/ProductCard"
import { products } from "@/lib/data"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["All", "Animals", "Plants"]

export default function ProductsPage() {
	const [activeCategory, setActiveCategory] = useState("All")

	const filteredProducts =
		activeCategory === "All"
			? products
			: products.filter((p) => p.category === activeCategory)

	return (
		<div className="min-h-screen bg-cream flex flex-col font-sans">
			<Navbar />

			<main className="flex-grow pt-32 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h1 className="font-display text-5xl font-bold text-charcoal mb-6">
							Our Collection
						</h1>
						<p className="text-charcoal/60 max-w-2xl mx-auto mb-10">
							Browse our family of handcrafted plushies. Each one is unique and
							waiting for a hug.
						</p>

						<div className="inline-flex gap-2 p-1 bg-white rounded-full shadow-sm border border-charcoal/5">
							{categories.map((cat) => (
								<button
									key={cat}
									onClick={() => setActiveCategory(cat)}
									className={cn(
										"px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm",
										activeCategory === cat
											? "bg-terracotta text-white shadow-md"
											: "text-charcoal/60 hover:text-charcoal hover:bg-black/5"
									)}
								>
									{cat}
								</button>
							))}
						</div>
					</div>

					<motion.div
						layout
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
					>
						{filteredProducts.map((product) => (
							<motion.div
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								key={product.id}
							>
								<ProductCard product={product} />
							</motion.div>
						))}
					</motion.div>

					{filteredProducts.length === 0 && (
						<div className="text-center py-20">
							<p className="text-charcoal/40 text-lg">
								No plushies found in this category :(
							</p>
						</div>
					)}
				</div>
			</main>

			<Footer />
		</div>
	)
}

"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProductCard } from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/Button"
import { products } from "@/lib/data"
import {
	ArrowRight,
	Sparkles,
	Heart,
	Scissors,
	Smile,
	HandHeart,
} from "lucide-react"

export default function Home() {
	const featuredProducts = products.slice(0, 4)

	return (
		<div className="min-h-screen bg-cream flex flex-col font-sans">
			<Navbar />

			<main className="flex-grow pt-20">
				{/* Hero Section */}
				<section className="relative overflow-hidden py-24 sm:py-32">
					<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
						<div className="absolute top-20 left-10 w-64 h-64 bg-sage-light rounded-full blur-3xl" />
						<div className="absolute bottom-20 right-10 w-96 h-96 bg-sand rounded-full blur-3xl opacity-60" />
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-40 mx-auto" />
					</div>

					<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						<div className="max-w-4xl mx-auto text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-sage text-sage-600 text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
									<Sparkles className="w-4 h-4 text-primary" />
									Handcrafted with love
								</span>
								<h1 className="font-display text-5xl sm:text-7xl font-bold text-charcoal mb-8 leading-[1.1]">
									Cuddly Friends using <br />
									<span className="text-primary italic relative">
										Softest Yarn
										<svg
											className="absolute -bottom-2 left-0 w-full h-3 text-sage/30"
											viewBox="0 0 100 10"
											preserveAspectRatio="none"
										>
											<path
												d="M0 5 Q 50 10 100 5"
												stroke="currentColor"
												strokeWidth="6"
												fill="none"
											/>
										</svg>
									</span>
								</h1>
								<p className="text-lg sm:text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
									Welcome to Mahara, where every stitch is a story and every
									plushie needs a home. Find your perfect companion today.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Link href="/products">
										<Button
											size="lg"
											className="w-full sm:w-auto shadow-terracotta/20 shadow-lg"
										>
											Shop Collection
										</Button>
									</Link>
									<Link href="/about">
										<Button
											variant="outline"
											size="lg"
											className="w-full sm:w-auto bg-white/50 border-charcoal/10 hover:bg-white"
										>
											Our Story &rarr;
										</Button>
									</Link>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Featured Section */}
				<section className="py-24 bg-gradient-to-b from-white/80 via-white/40 to-transparent rounded-[3rem] mx-4 sm:mx-8 my-2">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
							<div>
								<h2 className="font-display text-4xl font-bold text-charcoal mb-4">
									New Arrivals
								</h2>
								<p className="text-charcoal/60 max-w-md">
									Fresh off the hook! Meet our newest buttery-soft friends
									looking for their forever homes.
								</p>
							</div>
							<Link href="/products">
								<Button
									variant="ghost"
									className="gap-2 group"
								>
									View All{" "}
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</Button>
							</Link>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
							{featuredProducts.map((product, index) => (
								<motion.div
									key={product.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.5 }}
									viewport={{ once: true }}
									className="h-full"
								>
									<ProductCard product={product} />
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Value Propositions Section */}
				<section className="py-24 bg-cream">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							{/* Prop 1: Solo Owned */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1, duration: 0.5 }}
								viewport={{ once: true }}
								className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
							>
								<div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mb-6 text-sage-600">
									<Heart className="w-8 h-8 fill-current" />
								</div>
								<h3 className="font-display text-2xl font-bold text-charcoal mb-4">
									Solo Owned & Loved
								</h3>
								<p className="text-charcoal/70 leading-relaxed">
									Mahara is a one-woman show. Every message, package, and
									plushie comes directly from me to you, filled with personal
									care.
								</p>
							</motion.div>

							{/* Prop 2: Handmade Quality */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.5 }}
								viewport={{ once: true }}
								className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
							>
								<div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mb-6 text-terracotta">
									<Scissors className="w-8 h-8" />
								</div>
								<h3 className="font-display text-2xl font-bold text-charcoal mb-4">
									100% Handmade
								</h3>
								<p className="text-charcoal/70 leading-relaxed">
									No factories here. Each stitch is looped by hand, ensuring
									that every plushie is unique and crafted to last a lifetime.
								</p>
							</motion.div>

							{/* Prop 3: Poseable */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.5 }}
								viewport={{ once: true }}
								className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
							>
								<div className="w-16 h-16 bg-blush rounded-full flex items-center justify-center mb-6 text-terracotta">
									<Smile className="w-8 h-8" />
								</div>
								<h3 className="font-display text-2xl font-bold text-charcoal mb-4">
									Fully Poseable
								</h3>
								<p className="text-charcoal/70 leading-relaxed">
									Unlike standard plushies, Mahara friends are designed to be
									posed! They can sit, wave, and express themselves just like
									you.
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Meet the Maker Section */}
				<section className="py-24 overflow-hidden">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="bg-sage/10 rounded-[3rem] p-8 sm:p-16 flex flex-col md:flex-row items-center gap-12 sm:gap-16">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="relative w-64 h-64 sm:w-80 sm:h-80 flex-shrink-0"
							>
								<div className="absolute inset-0 bg-sage rounded-full opacity-20 blur-2xl scale-110" />
								<div className="relative w-full h-full bg-white rounded-full border-8 border-white shadow-xl overflow-hidden">
									{/* Placeholder for Dr. Bushra Omar's image */}
									<div className="w-full h-full bg-sand flex items-center justify-center text-charcoal/20">
										<span className="font-display text-sm">
											Dr. Bushra Omar
										</span>
									</div>
								</div>
								<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta rounded-full flex items-center justify-center text-white font-display font-bold shadow-lg rotate-12">
									Hi!
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="flex-1 text-center md:text-left"
							>
								<span className="text-terracotta font-bold tracking-wider uppercase text-sm mb-2 block">
									Meet the Maker
								</span>
								<h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-6">
									Dr. Bushra Omar
								</h2>
								<div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
									<p>Hello! I'm Bushra.</p>
									<p>
										Mahara started as a way to bring a little more physical
										warmth into a digital world. I combine my attention to
										detail with my love for whimsical design to create plushies
										that aren't just toys, but companions.
									</p>
									<p>Thank you for supporting my small, handmade dream!</p>
								</div>
								<div className="mt-8 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row gap-8 justify-center md:justify-start">
									<div className="flex flex-col">
										<span className="font-display font-bold text-2xl text-charcoal">
											3+ Years
										</span>
										<span className="text-sm text-charcoal/60">Crocheting</span>
									</div>
									<div className="flex flex-col">
										<span className="font-display font-bold text-2xl text-charcoal">
											500+
										</span>
										<span className="text-sm text-charcoal/60">
											Plushies Made
										</span>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Newsletter / CTA Section */}
				<section className="py-24">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="bg-sage rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden">
							<div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
							<div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

							<div className="relative z-10 max-w-2xl mx-auto">
								<h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-6">
									Join the Mahara Family
								</h2>
								<p className="text-charcoal/80 text-lg mb-10">
									Get 10% off your first order and be the first to know about
									new drops and special events.
								</p>
								<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
									<input
										type="email"
										placeholder="your@email.com"
										className="flex-1 bg-white/90 border-0 rounded-2xl px-6 py-4 text-charcoal shadow-sm outline-none focus:ring-2 focus:ring-terracotta placeholder:text-charcoal/40"
									/>
									<Button className="bg-charcoal text-white hover:bg-charcoal/90 border-charcoal/50">
										Subscribe
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}

"use client"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-cream flex flex-col font-sans">
			<Navbar />

			<main className="flex-grow pt-32 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Hero */}
					<div className="max-w-4xl mx-auto text-center mb-20">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="font-display text-5xl sm:text-6xl font-bold text-charcoal mb-8"
						>
							We Stitch Love into Every Loop.
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							className="text-xl text-charcoal/70 leading-relaxed"
						>
							Mahara started with a single crochet hook and a dream to bring
							more softness into the world.
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative aspect-square rounded-[3rem] overflow-hidden bg-sage-light/50 shadow-xl"
						>
							<Image
								src="/images/workshop.png"
								alt="Mahara Workshop"
								fill
								className="object-cover"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="font-display text-3xl font-bold text-charcoal mb-6">
								Our Story
							</h2>
							<p className="text-charcoal/70 mb-6 leading-relaxed">
								It all began in a small sunlit room filled with colorful yarn
								balls. What started as a hobby quickly turned into a passion for
								creating characters that have personalities of their own.
							</p>
							<p className="text-charcoal/70 leading-relaxed">
								"Mahara" means skill or talent, but for us, it means the magic
								of turning a simple string into a lifelong friend. Each plushie
								is designed, stitched, and stuffed by hand, ensuring that no two
								are exactly alike.
							</p>
						</motion.div>
					</div>

					<div className="bg-white rounded-[3rem] p-12 sm:p-20 shadow-sm text-center">
						<h2 className="font-display text-3xl font-bold text-charcoal mb-12">
							Our Values
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="p-6">
								<div className="w-16 h-16 bg-blush/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
									🧶
								</div>
								<h3 className="font-display text-xl font-bold text-charcoal mb-4">
									Quality Materials
								</h3>
								<p className="text-charcoal/60">
									We use only the softest, baby-safe yarns and hypoallergenic
									stuffing.
								</p>
							</div>

							<div className="p-6">
								<div className="w-16 h-16 bg-sage/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
									💖
								</div>
								<h3 className="font-display text-xl font-bold text-charcoal mb-4">
									Made with Love
								</h3>
								<p className="text-charcoal/60">
									Every stitch is intentional. We pour our hearts into every
									creation.
								</p>
							</div>

							<div className="p-6">
								<div className="w-16 h-16 bg-sand/50 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
									🌱
								</div>
								<h3 className="font-display text-xl font-bold text-charcoal mb-4">
									Sustainability
								</h3>
								<p className="text-charcoal/60">
									We aim to minimize waste and use eco-friendly packaging.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}

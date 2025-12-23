import Link from "next/link"
import { Heart, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
	return (
		<footer className="bg-charcoal text-white pt-16 pb-8 rounded-t-[3rem] mt-auto">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
					{/* Brand */}
					<div className="col-span-1 md:col-span-1">
						<Link
							href="/"
							className="font-display text-3xl font-bold text-cream mb-4 block"
						>
							Mahara
						</Link>
						<p className="text-white/70 leading-relaxed mb-6">
							Bringing warmth and joy to your home, one stitch at a time.
							Handcrafted plushies made with love.
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Links */}
					<div>
						<h4 className="font-display text-lg font-bold mb-6 text-sand">
							Shop
						</h4>
						<ul className="space-y-3">
							<li>
								<Link
									href="/products"
									className="text-white/70 hover:text-white transition-colors"
								>
									All Plushies
								</Link>
							</li>
							<li>
								<Link
									href="/products?cat=animals"
									className="text-white/70 hover:text-white transition-colors"
								>
									Animals
								</Link>
							</li>
							<li>
								<Link
									href="/products?cat=plants"
									className="text-white/70 hover:text-white transition-colors"
								>
									Plants
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-white/70 hover:text-white transition-colors"
								>
									New Arrivals
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-display text-lg font-bold mb-6 text-sand">
							Company
						</h4>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about"
									className="text-white/70 hover:text-white transition-colors"
								>
									Our Story
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-white/70 hover:text-white transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-white/70 hover:text-white transition-colors"
								>
									Shipping & Returns
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-white/70 hover:text-white transition-colors"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div>
						<h4 className="font-display text-lg font-bold mb-6 text-sand">
							Stay in the Loop
						</h4>
						<p className="text-white/70 mb-4">
							Subscribe for updates and exclusive offers.
						</p>
						<form className="flex gap-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="bg-white/10 border-none rounded-xl px-4 py-2 w-full text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary outline-none"
							/>
							<button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-xl font-bold transition-colors">
								Go
							</button>
						</form>
					</div>
				</div>

				<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
					<p>
						&copy; {new Date().getFullYear()} Mahara Store. All rights reserved.
					</p>
					<div className="flex items-center gap-1">
						<span>Made with</span>
						<Heart className="w-4 h-4 text-blush fill-blush" />
						<span>by Mahara Team</span>
					</div>
				</div>
			</div>
		</footer>
	)
}

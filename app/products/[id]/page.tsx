import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { products } from "@/lib/data"
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
	params: Promise<{ id: string }>
}

export default async function ProductDetailPage({ params }: PageProps) {
	const { id } = await params
	const product = products.find((p) => p.id === id)

	if (!product) {
		notFound()
	}

	return (
		<div className="min-h-screen bg-cream flex flex-col font-sans">
			<Navbar />

			<main className="flex-grow pt-32 pb-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<Link
						href="/products"
						className="inline-flex items-center gap-2 text-charcoal/60 hover:text-charcoal mb-8 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" /> Back to Shop
					</Link>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
						{/* Image Gallery */}
						<div className="space-y-4">
							<div className="relative aspect-square rounded-[3rem] overflow-hidden bg-sage-light/30 border border-charcoal/5">
								<Image
									src={product.image}
									alt={product.name}
									fill
									priority
									className="object-cover"
								/>
								<button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-blush">
									<Heart className="w-6 h-6 fill-current" />
								</button>
							</div>
							<div className="grid grid-cols-3 gap-4">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-charcoal/5 cursor-pointer hover:border-terracotta transition-colors"
									>
										{/* Placeholder for extra images */}
										<div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
											Img {i}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Content */}
						<div>
							<div className="mb-2">
								<span className="text-terracotta font-bold tracking-wider uppercase text-sm">
									{product.category}
								</span>
							</div>
							<h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mb-4">
								{product.name}
							</h1>
							<p className="font-display text-3xl font-bold text-primary mb-8">
								${product.price.toFixed(2)}
							</p>

							<div className="prose prose-lg text-charcoal/70 mb-10">
								<p>{product.description}</p>
								<p>
									Each {product.name} is handmade with hypoallergenic cotton
									yarn and stuffed with recycled polyfill. Safe for all ages and
									machine washable (gentle cycle).
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 mb-12 border-b border-charcoal/10 pb-12">
								<Button
									size="lg"
									className="flex-1 gap-2 shadow-terracotta/20 shadow-lg"
								>
									<ShoppingBag className="w-5 h-5" />
									Add to Cart
								</Button>
								<Button
									size="lg"
									variant="secondary"
									className="gap-2"
								>
									Buy Now
								</Button>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage-600 shrink-0">
										<Truck className="w-5 h-5" />
									</div>
									<div>
										<h4 className="font-bold text-charcoal">Free Shipping</h4>
										<p className="text-sm text-charcoal/60">
											On orders over $50
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-full bg-sand/50 flex items-center justify-center text-terracotta shrink-0">
										<ShieldCheck className="w-5 h-5" />
									</div>
									<div>
										<h4 className="font-bold text-charcoal">Lifetime Hugs</h4>
										<p className="text-sm text-charcoal/60">
											Guaranteed durability
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}

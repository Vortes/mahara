"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

interface ButtonProps extends HTMLMotionProps<"button"> {
	variant?: "primary" | "secondary" | "outline" | "ghost"
	size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant = "primary", size = "md", children, ...props },
		ref
	) => {
		const variants = {
			primary:
				"bg-primary text-white hover:bg-primary/90 shadow-md border-b-4 border-primary/50 active:border-b-0 active:translate-y-1",
			secondary:
				"bg-secondary text-charcoal hover:bg-secondary/90 shadow-md border-b-4 border-secondary/50 active:border-b-0 active:translate-y-1",
			outline:
				"border-2 border-charcoal text-charcoal hover:bg-charcoal/5 active:translate-y-0.5",
			ghost: "text-charcoal hover:bg-charcoal/5",
		}

		const sizes = {
			sm: "px-4 py-1.5 text-sm",
			md: "px-6 py-2.5 text-base",
			lg: "px-8 py-3.5 text-lg",
		}

		return (
			<motion.button
				ref={ref}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className={cn(
					"inline-flex items-center justify-center rounded-3xl font-display font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
					variants[variant],
					sizes[size],
					className
				)}
				{...props}
			>
				{/* Stitch Effect Overlay */}
				<motion.div
					className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
					initial={{ opacity: 0 }}
					whileHover={{ opacity: 1 }}
				>
					<svg
						className="w-full h-full absolute inset-0 text-white/50"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<motion.rect
							x="2"
							y="2"
							width="96"
							height="96"
							rx="42" // Approximate for rounded-3xl relative to viewbox, or just use CSS border-style dashed
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeDasharray="4 4"
							animate={{ strokeDashoffset: [0, -8] }}
							transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</motion.div>
				<motion.span className="relative z-10 flex items-center gap-2">
					{children}
				</motion.span>
			</motion.button>
		)
	}
)
Button.displayName = "Button"

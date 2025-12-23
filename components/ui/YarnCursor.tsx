"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function YarnCursor() {
	const [isVisible, setIsVisible] = useState(false)
	const [isHovering, setIsHovering] = useState(false)

	// Direct motion values for instant movement
	const cursorX = useMotionValue(-100)
	const cursorY = useMotionValue(-100)

	useEffect(() => {
		const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
		if (!isTouch) {
			setIsVisible(true)
			// Add global style to hide cursor everywhere, including on interactive elements
			const style = document.createElement("style")
			style.innerHTML = `
				*, *::before, *::after {
					cursor: none !important;
				}
			`
			style.id = "hide-cursor-style"
			document.head.appendChild(style)
		}

		const moveCursor = (e: MouseEvent) => {
			cursorX.set(e.clientX)
			cursorY.set(e.clientY)

			// improved hover detection
			const target = e.target as HTMLElement
			const isInteractive =
				target.tagName === "BUTTON" ||
				target.tagName === "A" ||
				target.closest("button") !== null ||
				target.closest("a") !== null ||
				window.getComputedStyle(target).cursor === "pointer"

			setIsHovering(!!isInteractive)
		}

		window.addEventListener("mousemove", moveCursor)

		return () => {
			window.removeEventListener("mousemove", moveCursor)
			// Restore default cursor
			const style = document.getElementById("hide-cursor-style")
			if (style) style.remove()
		}
	}, [cursorX, cursorY])

	if (!isVisible) return null

	return (
		<motion.div
			className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
			style={{
				left: 0,
				top: 0,
			}}
		>
			<motion.div
				className="absolute"
				style={{
					translateX: cursorX,
					translateY: cursorY,
					left: -16, // Center the 32px icon
					top: -16,
				}}
				animate={{
					scale: isHovering ? 1.5 : 1,
				}}
				transition={{ type: "spring", stiffness: 300, damping: 20 }}
			>
				{/* Cute Bear/Plushie Icon SVG */}
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* Ears */}
					<circle
						cx="10"
						cy="12"
						r="4"
						fill="#E07A5F"
					/>
					<circle
						cx="22"
						cy="12"
						r="4"
						fill="#E07A5F"
					/>

					{/* Face */}
					<circle
						cx="16"
						cy="18"
						r="10"
						fill="#E07A5F"
					/>

					{/* Eyes */}
					{isHovering ? (
						// Happy Eyes (inverted arcs)
						<>
							<path
								d="M12 17 C 12 16, 16 16, 16 17"
								stroke="#2D2A26"
								strokeWidth="1.5"
								strokeLinecap="round"
								fill="none"
								transform="translate(-2, 0)"
							/>
							<path
								d="M16 17 C 16 16, 20 16, 20 17"
								stroke="#2D2A26"
								strokeWidth="1.5"
								strokeLinecap="round"
								fill="none"
								transform="translate(2, 0)"
							/>
						</>
					) : (
						// Normal Eyes
						<>
							<circle
								cx="14"
								cy="17"
								r="1"
								fill="#2D2A26"
							/>
							<circle
								cx="18"
								cy="17"
								r="1"
								fill="#2D2A26"
							/>
						</>
					)}

					{/* Blush */}
					<circle
						cx="12"
						cy="20"
						r="1.5"
						fill="#FFD6D6"
						opacity="0.6"
					/>
					<circle
						cx="20"
						cy="20"
						r="1.5"
						fill="#FFD6D6"
						opacity="0.6"
					/>

					{/* Snout/Mouth */}
					<ellipse
						cx="16"
						cy="20"
						rx="3"
						ry="2"
						fill="#FFE4E1"
					/>
					<path
						d={
							isHovering ? "M15 20 Q 16 21 17 20" : "M15 20.5 Q 16 20.5 17 20.5"
						}
						stroke="#2D2A26"
						strokeWidth="1"
						strokeLinecap="round"
					/>
					<circle
						cx="16"
						cy="19.5"
						r="1"
						fill="#2D2A26"
					/>
				</svg>
			</motion.div>
		</motion.div>
	)
}

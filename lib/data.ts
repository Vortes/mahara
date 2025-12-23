export interface Product {
	id: string
	name: string
	price: number
	description: string
	image: string
	category: string
}

export const products: Product[] = [
	{
		id: "1",
		name: "Buttercup Bunny",
		price: 35.0,
		description:
			"A soft, buttery yellow bunny with floppy ears and a sweet smile. Perfect for snuggles.",
		image: "/images/bunny.png",
		category: "Animals",
	},
	{
		id: "2",
		name: "Berry Bear",
		price: 32.0,
		description:
			"This berry-colored bear is ready for a picnic! Hand-stitched with love.",
		image: "/images/bear.png",
		category: "Animals",
	},
	{
		id: "3",
		name: "Sprout the Frog",
		price: 28.0,
		description:
			"A friendly green frog who loves hopping around in the garden. He brings good luck!",
		image: "/images/frog.png",
		category: "Animals",
	},
	{
		id: "4",
		name: "Luna Kitty",
		price: 38.0,
		description:
			"A mysterious but cuddly charcoal cat with bright eyes. She loves moonlit naps.",
		image: "/images/cat.png",
		category: "Animals",
	},
	{
		id: "5",
		name: "Sunny Sunflower",
		price: 25.0,
		description:
			"A bright and cheerful sunflower plushie to brighten up any room.",
		image: "/images/sunflower.png",
		category: "Plants",
	},
	{
		id: "6",
		name: "Misty Mushroom",
		price: 22.0,
		description:
			"A cute little mushroom with a red cap and white spots. Straight from the fairy forest.",
		image: "/images/mushroom.png",
		category: "Plants",
	},
]

export type ProductType = {
	image: string
	title: string
	price: string
	color: string
}

export const products: Array<ProductType> = [
	{
		image: "/images/product/1.png",
		title: "Уличное растение",
		price: "999",
		color: "#EAF2E5"
	},
	{
		image: "/images/product/2.png",
		title: "Монстера",
		price: "1999",
		color: "#F0EBE6"
	},
	{
		image: "/images/product/3.png",
		title: "Фикус",
		price: "1499",
		color: "#E2ECE4"
	},
	{
		image: "/images/product/4.png",
		title: "Хавортия",
		price: "599",
		color: "#E7EEED"
	}
]

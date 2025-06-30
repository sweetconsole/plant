import ImageOne from '../../assets/images/product/1.png'
import ImageTwo from '../../assets/images/product/2.png'
import ImageThree from '../../assets/images/product/3.png'
import ImageFour from '../../assets/images/product/4.png'
import type { ProductType } from "./products.type.ts";

export const products: Array<ProductType> = [
	{
		image: ImageOne,
		title: "Outdoor Plant",
		price: "34",
		color: "#EAF2E5"
	},
	{
		image: ImageTwo,
		title: "Monstera Plant",
		price: "47",
		color: "#F0EBE6"
	},
	{
		image: ImageThree,
		title: "Pottel Plant",
		price: "51",
		color: "#E2ECE4"
	},
	{
		image: ImageFour,
		title: "Indoor Plant",
		price: "28",
		color: "#E7EEED"
	},
]
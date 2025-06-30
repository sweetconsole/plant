import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import type { NetworkType, ChapterType } from "./footer.type.ts";


export const networks: Array<NetworkType> = [
	{
		image: Facebook,
		name: "Facebook",
		link: "http://facebook.com/"
	},
	{
		image: Instagram,
		name: "Instagram",
		link: "http://instagram.com/"
	},
	{
		image: Twitter,
		name: "Twitter",
		link: "https://x.com/"
	},
]

export const chapters: Array<ChapterType> = [
	{
		title: "Navigation",
		links: ["Home", "About", "Help & Support", "Product"]
	},
	{
		title: "About Us",
		links: ["Contact", "Address", "Blog", "About Us"]
	},
	{
		title: "Help",
		links: ["Customers Services", "FAQs", "We Are Hiring", "Returns"]
	},
]
export type NetworkType = {
	image: string
	link: string
	name: string
}

export type ChapterType = {
	title: string
	links: Array<string>
}

export const networks: Array<NetworkType> = [
	{
		image: "/images/facebook.png",
		name: "Facebook",
		link: "https://facebook.com/"
	},
	{
		image: "/images/instagram.png",
		name: "Instagram",
		link: "https://instagram.com/"
	},
	{
		image: "/images/twitter.png",
		name: "Twitter",
		link: "https://x.com/"
	}
]

export const chapters: Array<ChapterType> = [
	{
		title: "Навигация",
		links: ["Главная", "О Нас", "Помощь и поддержка", "Растения"]
	},
	{
		title: "О Нас",
		links: ["Контакты", "Адреса", "Блог", "О Нас"]
	},
	{
		title: "Помощь",
		links: [
			"Обслуживание клиентов",
			"Вопросы и ответы",
			"Мы в поиске сотрудников",
			"Возврат"
		]
	}
]

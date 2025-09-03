# Plant

Верстка лендинга по продаже комнатных растений на <strong>React</strong> c использованием языка программирования <strong>TypeScript</strong> и препроцессора <strong>SASS</strong>.

## Технологии

<div id="steck">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="30" height="30" alt="Vite" />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="30" height="30" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="30" height="30" alt="Type Script"/>
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="30" height="30" alt="SASS"/>
</div>


## Превью главной страницы

<img src="./public/screenshot.png" alt="error" >

## Архитектура

```
├── dist - директория билда проекта
├── public - директория для иконок и превью изображений
│ 
├── src - рабочая директория
│   ├── assets
│   │	├── fonts - директория шрифтов
│   │	├── images - директория изображений
│   │	└── styles - директория глобальный стилей
│   │       ├── reset.scss - файл сброса стилей браузеров
│   │       └── variables.scss - файлы переменных
│   │
│   ├── components
│   │	├── ••• - компоненты
│   │	├── ui - ui компоненты
│   │   │   └── index.ts - файл сокращения импортов
│   │   │
│   │   └── index.ts - файл сокращения импортов
│   │
│   ├── App.scss - стили главного компонента
│   ├── App.tsx - главный компонент
│   ├── main.tsx - исполняемый файл
│   └── vite-env.d.ts - файл определения типов переменных окружения 
│
├── .gitignore
├── eslint.config.js - конфигурация eslint
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts - конфигурация пакетного менеджера Vite
```

## Запуск проекта

Для запуска проекта необходимо выполнить следующие действия:

1. Склонировать проект на ваш компьютер с [Github](https://github.com/sweetconsole/plant) с помощью команды:
```
git clone https://github.com/sweetconsole/plant.git
```
2. Установить зависимости:
```
npm install
```
3. Запустить проект:
```
npm start
```

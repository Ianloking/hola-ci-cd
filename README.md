
Aplicación de ejemplo para demostrar la integración y entrega continua (CI/CD) usando GitHub Actions. Esta aplicación fue desarrollada en Node.js con Express y contiene pruebas unitarias básicas utilizando Jest. Además, incluye una opción para empaquetar la aplicación en una imagen Docker.

## Tecnologías utilizadas
- Node.js (v18)
- Express.js
- Jest (para pruebas unitarias)
- GitHub Actions (para CI/CD)
- Docker (para empaquetado de la app)

## Estructura del proyecto

hola-ci-cd/ 
├── index.js 
├── sum.js 
├── sum.test.js 
├── Dockerfile 
├── package.json 
├── .github/ 
│ 
└── workflows/ 
│ 
└── ci.yml 
└── README.md-

## Instalamos dependencias 
npm install

## Ejecuta preubas
npm test

## Ejecuta la aplicacion
node index.js

## CI/CD con GitHub Actions
Cada vez que se hace push o pull request a la rama master, se ejecuta automáticamente el flujo de trabajo definido en .github/workflows/ci.yml, el cual:
Instala dependencias.
Ejecuta pruebas.
Construye la imagen Docker.

## Docker (opcional)
Para crear la imagen Docker localmente:
docker build -t hola-ci-cd .
docker run -p 3000:3000 hola-ci-cd

## Autor 
Ian Jesús Gutiérrez Díaz
Estudiante de Ingeniería en Sistemas Computacionales
ITSX – 2025

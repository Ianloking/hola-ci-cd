FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia todo el contenido del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 3000 para acceder a la app
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
CMD ["node", "index.js"]

# ============================
# 🏗️ Etapa base
# ============================
FROM node:20-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo los archivos de dependencias primero
COPY package*.json ./

# Instalar dependencias (usa --only=production para entornos reales)
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY . .

# Exponer el puerto del backend (debe coincidir con el que uses en tu app)
EXPOSE 3001

# Establecer una variable de entorno (opcional, buena práctica)
ENV NODE_ENV=production

# Comando por defecto para ejecutar el servidor
CMD ["node", "server.js"]


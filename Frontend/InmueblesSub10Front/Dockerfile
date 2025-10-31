# Etapa de construcción
FROM node:22-alpine AS build

# Crear el directorio de trabajo
WORKDIR /app

# Copiar e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Compilar la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Eliminar contenido por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos compilados del frontend al contenedor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto real de Nginx (80)
EXPOSE 80

# Ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]


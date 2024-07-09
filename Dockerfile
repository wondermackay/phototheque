# Étape 1 : Construction de l'application
FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

# Étape 2 : Création de l'image finale légère
FROM node:16-alpine

WORKDIR /app

# Installer le client MongoDB
RUN apk add --no-cache mongodb-tools

COPY --from=build /app /app

EXPOSE 3000

CMD ["npm", "start"]

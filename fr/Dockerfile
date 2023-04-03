FROM node:18-alpine AS build

RUN mkdir /app 
RUN mkdir /app/data
WORKDIR /app

COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf build
COPY . .
RUN npm install -g npm@9.6.3
RUN npm install
RUN npm run build

FROM node:18-alpine AS run

WORKDIR /app
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build
RUN npm install --production

EXPOSE 8080
ENTRYPOINT [ "npm", "run", "start" ]
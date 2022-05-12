FROM node:alpine as dependencies
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .


FROM node:alpine as builder
WORKDIR /app
ENV NODE_ENV production
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:alpine as runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm","run","start"]
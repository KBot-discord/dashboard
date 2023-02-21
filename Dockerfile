## Builder ##
FROM node:18-alpine as builder

WORKDIR /temp

RUN apk add -q --update

COPY . .

RUN yarn install --immutable && \
    yarn build

## App ##
FROM node:18-alpine as app

WORKDIR /app

ENV NODE_ENV production

RUN apk add -q --update

COPY --from=builder --chown=sveltekit:nodejs /temp/build ./build
COPY --from=builder /temp/node_modules ./node_modules
COPY --from=builder /temp/package.json ./package.json

CMD ["node", "./build/index.js"]

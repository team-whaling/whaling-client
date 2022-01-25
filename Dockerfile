FROM node:alpine as builder

WORKDIR '/usr/src/app'

COPY package.json ./
COPY package-lock.json ./

RUN yarn

# 로컬에 node_module 있으면 지워줄 것
COPY ./ ./

RUN yarn build

# run stage
FROM nginx
EXPOSE 80
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

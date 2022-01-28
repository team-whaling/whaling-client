FROM node:alpine as builder

WORKDIR '/app'
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# 필수 패키지 파일을 이미지 내부로 복사하고, npm 명령어로 설치합니다
RUN npm config set unsafe-perm true
COPY ./package*.json ./
RUN mkdir -p /app/node_modules
RUN chown node:node /app/node_modules

RUN npm install --force
COPY ./ ./
RUN chmod -R 777 /app
USER node
#RUN yarn build
#COPY --from=builder /app/build ./
#CMD ["yarn", "start"]

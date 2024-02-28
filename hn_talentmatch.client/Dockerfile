FROM node:alpine

WORKDIR /app

COPY ./hn_talentmatch.client /app

RUN npm update
RUN npm ci

EXPOSE 5173

CMD ["npm", "run", "dev"]
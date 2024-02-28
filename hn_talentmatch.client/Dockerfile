FROM node:alpine
ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app

COPY ./hn_talentmatch.client /app

RUN npm update
RUN npm ci

EXPOSE 5173

CMD ["npm", "run", "dev"]
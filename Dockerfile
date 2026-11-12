if [ -n "$CR_PAT" ]; then
  echo "CR_PAT da duoc nap"
else
  echo "CR_PAT chua co"
fiFROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src ./src

ENV PORT=3000

EXPOSE 3000

USER node

CMD ["node", "src/server.js"]

FROM fusuf/whatsasena:latest

RUN git clone https://github.com/AI-VIKI/WhatsAsena-public /root/WhatsAsena-public
WORKDIR /root/WhatsAsena-public/
ENV TZ=Europe/Istanbul
RUN apk add --update nodejs npm
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies
RUN npm install deepai
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]

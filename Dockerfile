FROM node:14 
# install NestJS
RUN npm install -g @nestjs/cli

# share directory
ENV ROOT="/api"
# add path env
ENV PATH $PATH:/usr/local/bin
# set home directory
RUN mkdir ${ROOT}
WORKDIR ${ROOT}

COPY . .

RUN yarn

RUN apt-get update && apt-get upgrade -y
# install lib (opt : vim)
RUN apt-get install -y build-essential libpq-dev postgresql-client vim

CMD [ "yarn", "start"]

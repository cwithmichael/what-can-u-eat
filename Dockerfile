# syntax = docker/dockerfile:1.2
FROM timbru31/java-node AS build

ENV PORT=3000

WORKDIR /usr/app
COPY . /usr/app
RUN apt-get update

RUN apt-get install -y rlwrap
RUN curl -L -O https://github.com/clojure/brew-install/releases/latest/download/posix-install.sh
RUN chmod +x ./posix-install.sh
RUN ./posix-install.sh
RUN npm install
RUN clj -Sforce -T:build all

FROM timbru31/java-node

COPY --from=build /usr/app/target/what-can-u-eat-standalone.jar /what-can-u-eat/what-can-u-eat-standalone.jar

EXPOSE 80

ENTRYPOINT exec java $JAVA_OPTS -jar /what-can-u-eat/what-can-u-eat-standalone.jar

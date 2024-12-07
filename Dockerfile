# syntax = docker/dockerfile:1.2
FROM timbru31/java-node AS build

WORKDIR /
COPY . /
RUN apt-get update

RUN apt-get install -y rlwrap
RUN curl -L -O https://github.com/clojure/brew-install/releases/latest/download/posix-install.sh
RUN chmod +x ./posix-install.sh
RUN ./posix-install.sh
RUN clj -Sforce -T:build all

FROM timbru31/java-node

COPY --from=build /target/what-can-u-eat-standalone.jar /what-can-u-eat/what-can-u-eat-standalone.jar

EXPOSE $PORT

ENTRYPOINT exec java $JAVA_OPTS -jar /what-can-u-eat/what-can-u-eat-standalone.jar

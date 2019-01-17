# Docker image on which pre-compiled binaries for non-alpine linux are built. 
# An older Docker image is used intentionally, because the resulting binaries
# are dynamically linked to certain C++ libraries, like libstdc++. Using an
# older docker image allows for some backwards compatibility.
FROM node:10-jessie

RUN apt-get update
RUN apt-get install -y curl build-essential

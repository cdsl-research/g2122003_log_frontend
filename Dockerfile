ARG APP_HOME=/home/node/app

# build stage
FROM node:latest as build
WORKDIR ${APP_HOME}
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL

COPY . ${APP_HOME}
RUN yarn install
RUN yarn build
RUN npx react-inject-env set

# deploy stage
FROM nginx:alpine
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL
COPY --from=build ${APP_HOME}/build /var/www
COPY ./nginx /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
# Specify a base image
FROM node:14-alpine

WORKDIR /app

# Install some depenendencies
COPY package.json package-lock.json ./
RUN yarn install
COPY ./ ./

# Uses port which is used by the actual application
EXPOSE 3000

# Default command
CMD ["yarn", "start"]
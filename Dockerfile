FROM iteamdev/node-webpack
WORKDIR /app
COPY app/index.html dist/index.html
CMD ["node node_modules/.bin/webpack"]

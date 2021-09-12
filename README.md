# Calculator


Pre-requisites:

node.js v14 or better

## To start it


cd back-end

create config file .env with the following content

HOST=<host or IP to bind server to>, e.g. localhost

PORT=<port for server to listen>, e.g. 5000

npm install

npm run build

npm start



cd front-end

npm install

create config file .env with the following content

REACT_APP_API_URL=<url to back-end API service>, e.g. http://localhost:5000/api, should match host/port specified in back-end config

npm run build

npm start
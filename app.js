require('dotenv').config(); //usar las variables de entornos
const Server = require('./server/server')


const server = new Server();


server.listen();

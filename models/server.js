const express = require("express");
const cors = require("cors")
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios';
    //Middlewares
    this.middlewares();
    //Rutas de la aplicacion
    this.routes();

  }

  middlewares(){
    //cors 
    this.app.use(cors())
    // Lectura y parseo del body
    this.app.use(express.json())
    //public directory
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/usuarios'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;

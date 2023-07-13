const { response } = require("express");

const usuariosGet = (req = request, res = response) => {
const {q, nombre, apikey} = req.query;

  res.json({
    msg: "get Api - controlador",
    q,
    nombre,
    apikey
  });
};

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({

    msg: "Post Api - controlador",
    nombre,
    edad
  });
};
const usuariosPut = (req, res) => {

const {id} = req.params;

  res.json({
    msg: "Put Api - controlador",
    id
  });
};
const usuariosPatch = (req, res) => {
  res.status(201).json({
    ok: true,
    msg: "Patch Api - controlador",
  });
};
const usuariosDelete = (req, res) => {
  res.json({
    ok: true,
    msg: "Delete Api - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};

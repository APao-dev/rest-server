const { response, request } = require('express');
const Usuario = require('../models/usuario')


const usuariosGet = (req = request, res = response)  => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = async (req, res = response)  => {

    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'Post API - post',
        usuario
    })
}

const usuariosPut = (req, res = response)  => {

    const { id } = req.params;

    res.json({
        msg: 'Put API - put',
        id
    })
}

const usuariosPatch = (req, res = response)  => {

    res.json({
        msg: 'Patch API - patch'
    })
}

const usuariosDelete = (req, res = response)  => {

    res.json({
        msg: 'Delete API - delete'
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
    
}
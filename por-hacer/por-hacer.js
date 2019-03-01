const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    let file = 'db/data.json';
    fs.writeFile(file, data, (err) => {
        if (err) throw new Error('Error al guardar al archivo');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion, completado) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado,
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let listadoLength = listadoPorHacer.length
    listadoPorHacer = listadoPorHacer.filter(item => item.descripcion !== descripcion);
    guardarDB();
    return listadoPorHacer.length === listadoLength ? false : true
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
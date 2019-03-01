const actualizarOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Marca como completado o pendiente la tarea'
    },
    completado: {
        alias: 'c',
        deafult: true
    }
}
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const crearOption = {
    descripcion
}

const borrarOption = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', crearOption)
    .command('actualizar', 'Actualizar el estado de una tarea por hacer', actualizarOptions)
    .command('borrar', 'Borra una tarea por hacer', borrarOption)
    .help()
    .argv;

module.exports = {
    argv
}
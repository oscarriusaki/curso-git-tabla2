const { crearArchivo } = require('./helpers/multiplicar');
const fs = require('fs');
const argv = require('./config/yargs');
const colors = require('colors')

console.clear();
console.log(argv.b);
console.log('base: yargs', argv.base);


/* let base = 9; */

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
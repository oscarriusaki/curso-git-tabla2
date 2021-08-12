const fs = require("fs");
const colors = require("colors")

const crearArchivo = async(base = 5, listar = true, hasta = 10) => {

    try {

        let salida = '';
        let salida2 = '';
        for (let i = 0; i <= hasta; i++) {
            salida2 += `${base} ${'X'.green} ${i} ${'='.green}  ${base * i}\n`;
            salida += `${base} X ${i} = ${base*i}\n`
        }
        if (listar) {
            console.log('=================='.green);
            console.log('   Tabla del :'.green, base);
            console.log('=================='.green);
            console.log(salida2);
        }

        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
        console.log(`tabla-${base}.txt creado`);
        return (`tabla-${base}.txt creado`)

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}
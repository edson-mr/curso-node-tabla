const fs = require("fs");
const colors= require("colors");
const multiplicar = (numero, listar,hasta) => {

    return new Promise((resolve, reject) => {

        let cadena = "";
        let consola="";


        for (let i = 1; i <= hasta; i++) {
            cadena += `${numero} x ${i} = ${numero * i}\n`;
            consola += `${numero} ${"x".green} ${i} ${"=".green} ${numero * i}\n`;
        }

        if (listar) {
            console.log("====================".green);
            console.log(`${"tabla del producto:".green} ${colors.blue(numero)}`);
            console.log("====================".green);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/archivo_${numero}.txt`, cadena);

        resolve(`archivo_${numero}.txt creado`.rainbow);
    });

}

module.exports = {
    multiplicar
}

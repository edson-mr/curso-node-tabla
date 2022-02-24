
const {multiplicar} = require("./helpers/multiplicar.js");
const argv = require("./config/yargs.js");

console.clear();

console.log(argv);


multiplicar(argv.b, argv.l, argv.h)
    .then(console.log)
    .catch(console.log);





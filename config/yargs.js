const argv= require("yargs")
                .option("b",{
                    alias:"base",
                    type:"number",
                    demandOption:true,
                    describe:"numero a multiplicar"
                })
                .option("l",{
                    alias:"listar",
                    demandOption:false,
                    type:"boolean",
                    default:false,
                    describe:"mostrar la tabla de multiplicar"
                })
                .option("h",{
                    alias:"hasta",
                    type:"number",
                    demandOption:true,
                    describe:"multiplicar hasta cierto limite",
                    default:5
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw "la base tiene que ser un numero";
                    }
                    return true;
                } )
                .argv;

module.exports= argv;
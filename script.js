let saldoC = 500000;
const pinCorrecto = "1234";
const pinInvalido = "9999";
let programaAct = true;

function menuP (){
console.log ("\n ===== CAJERO AUTOMATICO =====");
console.log ("1. consignar dinero");
console.log ("2. retirar Dinero");
console.log ("3. consultar saldo");
console.log ("4. PIN ")
console.log ("5. salir")
}

function consignarDi (){
    const montoCon = parseFloat(prompt ("cuanto dinero desea consignar? "));

    if(montoCon > 0){
        saldoC = saldoC + montoCon;
        console.log(" consignacion correcta ");
        console.log("consignacion: "+montoCon);
    }
    else {
        console.log("monto invalido");
    }
}

function retirarDi() {
    const montoReti = parseFloat(prompt("cuanto dinero vas a retirar?: "));
    
    if (montoReti <=0){
        console.log ("monto no valido")
    }
    else if (montoReti > saldoC){
        console.log("retiro exitoso!!");
        console.log("monto retirado: " + montoReti)
        console.log("nuevo saldo" + saldoC)
    }
}

function consultarSal(){
    console.log("su saldo es: "+saldoC);
}
function validarSe() {
    const pinIngre = prompt("ingrese el pin: ")

    if(pinIngre === pinValido){
        console.log ("acceso de seguridad aprobado ");
    }
    else if (pinIngre === pinbloq){
        console.log("pin bloqueado. contactate con la entidad encargada ");
    }
    else {
        console.log("pin incorrecto");
    }
}

function salirPro() {
    console.log("GRACIAS POR USAR EL CAJERO AUTOMATICO")
    programaAct=false;
}

function ejecutarCaje(){
    console.log("iniciar cajero automatico, espere un momento ");
    console.log("tu saldo actual es de: "+saldoC)

    while (programaAct){
        menuP();
        const opcionSele = prompt("\n 1. consignar dinero\n 2. retirar Dinero\n 3. consultar saldo\n 4. PIN\n 5. salir");

        if(opcionSele === "1"){
            consignarDi();
            }
            else if(opcionSele === "2"){
                retirarDi();
            }
            else if (opcionSele === "3"){
                consultarSal();
            }
            else if (opcionSele === "4"){
                validarSe();
            }
            else if (opcionSele === "5"){
                salirPro();
            }
            else{
                console.log("opcion no valida. seleccion del 1 al 5. ")
            }
    }
       
}

ejecutarCaje();
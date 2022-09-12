//Array Pasajero
class pasajeros {
    constructor (id,nombre,edad,precio) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.precio = 6000;
    }
}

//Funcion ingresar cantidad de pasajeros
function numeroPasajeros () {
    let nPasajeros = Number(prompt("Ingrese la cantidad de boletos que desea comprar: "));
    return(nPasajeros);
}

//Funcion Ingreso de pasajeros
function ingresoPasajeros (nPasajeros) {
    for (let i=0; i != nPasajeros; i++) {
        let nombreApellido = prompt(`Por favor ingrese el nombre y apellido del pasajero ${i+1}: `);
        let edadPasajero = Number(prompt(`Por favor ingrese la edad del pasajero ${i+1}: `));
        id = i;
        pasajero.push(new pasajeros(id,nombreApellido, edadPasajero,));

    }
}

//Funcion retornar Total

function salidaDatos (total) {
    let texto = "";
    console.log(pasajero[0].edad);
    for (let i = 0; i != pasajero.length; i++) {
        console.log("paso");
        texto = texto +  `Nombre y Apellido: ${pasajero[i].nombre}` + "\n";        
    }
    return(`Los datos de su compra son:\n` + texto + `El total de los boletos es de $${total}`);
}


const pasajero = [];
nPasajeros = numeroPasajeros();
ingresoPasajeros(nPasajeros);
const total = pasajero.reduce((acumulador, calculoPrecio) => acumulador + calculoPrecio.precio,0);
alert(salidaDatos(total));






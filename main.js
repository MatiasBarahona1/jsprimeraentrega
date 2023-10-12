
//for (let i = 1; i <= 20; i ++) {
 //let ingresarNombre = prompt ("ingresar nombre") ;
// alert (" Turno N° "+i+" nombre: "+ingresarNombre) ;}


let userGuardado = "matias";
let passGuardado = "matias123";

const login = () => {
    let acceder = false
    for(let i = 3;i > 0 ; i--){
        let username = prompt("Ingrese el nombre de quien esta reservando la cancha");
        let password = prompt("Ingresa tu contraseña");

        if(username == userGuardado && password == passGuardado){
            alert(`Bienvenido ${userGuardado}`)
            acceder = true
            break
        }else{
            alert(`Usuario y/o constraseña. Tienes ${i} intentos`);
        }
    }
    return acceder;
}
login("Error! Intentelo nuevamente dentro de 15 minutos");

let ingreseElDia = prompt ("Ingrese el dia que quiera reservar la cancha: LUNES, MARTES,MIERCOLES,JUEVES,VIERNES}")
 if (ingreseElDia == lunes )
 if (ingreseElDia == martes )
 if (ingreseElDia == miercoles )
 if (ingreseElDia == jueves )
 if (ingreseElDia == viernes )

let ingreseElHorario = prompt ("Ingrese el horarios deseado")
let lunes
let martes
let miercoles
let jueves 
let viernes
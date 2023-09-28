
//for (let i = 1; i <= 20; i ++) {
//    let ingresarNombre = prompt ("ingresar nombre") ;
  //  alert (" Turno N° "+i+" nombre: "+ingresarNombre) ;
// }

let userGuardado = "matias";
let passGuardado = "matias123";

const login = () => {
    let acceder = false
    for(let i = 3;i > 0 ; i--){
        let username = prompt("Ingresa tu nombre de usuario");
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

login("Error! Intentelo nuevamente dentro de 30 minutos");

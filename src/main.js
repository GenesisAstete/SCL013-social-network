// importamos funciones 
import {myFunction} from "./lib/index.js";
import {login} from "./lib/view/templateLogin.js";
import {home} from "./lib/view/templateHome.js";
import {cerrarSesion} from "./lib/viewController.js";
import {iniciarSesion} from "./lib/viewController.js";


myFunction();

//funcion que verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('usar ok')
        home();
        cerrarSesion()
    } else {
        console.log('no existes')
        login();
        iniciarSesion()
    }
});
 

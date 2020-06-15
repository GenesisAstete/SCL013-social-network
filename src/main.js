<<<<<<< HEAD
// importamos funciones
import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { home } from './lib/view/templateHome.js';
import { cerrarSesion, iniciarSesion } from './lib/viewController.js';

myFunction();

// funcion que verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    home();
    cerrarSesion();
    console.log(user);
  } else {
    console.log('no existes');
    login();
    iniciarSesion();
  }

});
=======
// importamos funciones 
import {myFunction} from "./lib/index.js";
import {login} from "./lib/view/templateLogin.js";
import {home} from "./lib/view/templateHome.js";
import {cerrarSesion} from "./lib/viewController.js";
import {iniciarSesion} from "./lib/viewController.js";


myFunction();

//funcion que verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var textoVerificado="";
    if (user) {
        home();
        cerrarSesion()
        console.log(user)
    } else {
        console.log('no existes')
        login();
        iniciarSesion()
    }
});
 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6a3befa... agregar editar y guardar datos usuarios
=======


>>>>>>> c2463f9... funcion editar
=======
>>>>>>> 55a6d03... css responsive template de inicio

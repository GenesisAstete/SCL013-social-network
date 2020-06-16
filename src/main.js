// importamos funciones
import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { home } from './lib/view/templateHome.js';
import { cerrarSesion, iniciarSesion } from './lib/viewController.js';

myFunction();

// funcion que verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
<<<<<<< HEAD
  if (user) {
    home();
    cerrarSesion();
    console.log(user);
  } else {
    console.log('no existes');
    login();
    iniciarSesion();
  }
=======
>>>>>>> 3e53c09... Union CSS Inicio y boton borrar
    if (user) {
        home();
        cerrarSesion()
        console.log(user)
    } else {
        console.log('no existes')
        login();
        iniciarSesion();
    }
});
<<<<<<< HEAD
=======
 


>>>>>>> 433206d... registro guardando usuario

// importamos funciones
import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { home } from './lib/view/templateHome.js';
import { cerrarSesion, iniciarSesion} from './lib/viewController.js';

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

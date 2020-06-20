// importamos funciones
import { cerrarSesion } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { home } from './lib/view/templateHome.js';
import { iniciarSesion } from './lib/viewController.js';


// verifica si hay un usuario registrado
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    home();
    cerrarSesion();
  } else {
    login();
    iniciarSesion();
  }
});

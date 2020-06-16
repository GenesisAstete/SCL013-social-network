<<<<<<< HEAD
import { restablecerContrasena } from '../viewController.js';

export const Rpassword = () => {
  window.location.hash = '/recuperar';

  document.getElementById('root').innerHTML = /*html*/`
=======
import {restablecerContrasena} from "../viewController.js";
export const Rpassword = () => {
    window.location.hash = '/recuperar';

    document.getElementById('root').innerHTML = /*html*/`
>>>>>>> 6a3befa... agregar editar y guardar datos usuarios
    
    <div class="contenedorRecuperar contGeneralFormularios">
    <p class="title2 title">Recuperar Contraseña</p>
    <img class="logo2" src="./image/logo.jpg">
    <img class="usuario2" src="image/usercian 1.png">
    <div class="contenedorIngreso" >
      <input class="inputIngreso input2" id="emailRecuperar" placeholder="Correo electronico" type="email">
      <button  class="inputIngreso input2"id="enviarR">Enviar</button>
    </div>
  </div>
<<<<<<< HEAD
    `;
  const enviarR = document.getElementById('enviarR');
  enviarR.addEventListener('click', () => {
    restablecerContrasena();
  });
};
=======
    `
  const enviarR = document.getElementById('enviarR');
  enviarR.addEventListener("click", () => {
    restablecerContrasena(); 
  })

}
>>>>>>> 6a3befa... agregar editar y guardar datos usuarios

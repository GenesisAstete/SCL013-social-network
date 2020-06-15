<<<<<<< HEAD
<<<<<<< HEAD
import { registrar } from "../viewController.js";
=======
import {registrar} from "../viewController.js" ;
>>>>>>> 6a3befa... agregar editar y guardar datos usuarios
=======
import {registrar} from "../viewController.js" ;
>>>>>>> 55a6d03... css responsive template de inicio

export const registro = () => {
  window.location.hash = '/registro';

<<<<<<< HEAD
  document.getElementById('root').innerHTML = /*html*/ `
=======
 document.getElementById('root').innerHTML = /*html*/ `
<<<<<<< HEAD
>>>>>>> 6a3befa... agregar editar y guardar datos usuarios
=======
>>>>>>> 55a6d03... css responsive template de inicio

  <div class="contenedorRegistro contGeneralFormularios" >
    <img class="logo2" id="btnlogo"src="./image/logo.jpg">
    <p class="title2 title">registrar</p>
    <img class="usuario2" src="image/usercian 1.png">
    <div class="contenedorIngreso" >
      <input class="inputIngreso input2" id="emailRegistro" placeholder="Correo electronico" type="email">
      <input class="inputIngreso input2" id="passRegistro" placeholder="Contraseña" type="password">
      <input class="inputIngreso input2" id="usuarioRegistro" placeholder="Nombre de usuario" type="text">
      <button class="inputIngreso input2" id="registrarse"> Registrarse</button>
    </div>
  </div>
<<<<<<< HEAD
    `;

  const botonRegistro = document.getElementById('registrarse');
  botonRegistro.addEventListener('click', () => {
    registrar();
  });
};
=======
    `

  const botonRegistro = document.getElementById('registrarse');
  botonRegistro.addEventListener("click", () => {
    registrar(); 
  })

}

>>>>>>> 6a3befa... agregar editar y guardar datos usuarios

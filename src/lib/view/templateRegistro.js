import { registrar } from "../viewController.js";

export const registro = () => {
  window.location.hash = '/registro';

  document.getElementById('root').innerHTML = /*html*/ `

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
    `;

  const botonRegistro = document.getElementById('registrarse');
  botonRegistro.addEventListener('click', () => {
    registrar();
  });
};

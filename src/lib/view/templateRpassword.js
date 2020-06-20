import { restablecerContrasena } from '../viewController.js';

export const Rpassword = () => {
  window.location.hash = '/recuperar';

  document.getElementById('root').innerHTML = `

    <div class="contenedorRecuperar contGeneralFormularios">
    <p class="title2 title">Recuperar Contraseña</p>
    <img class="logo2" src="./image/logo.jpg">
    <img class="usuario2" src="image/usercian 1.png">
    <div class="contenedorIngreso" >
      <input class="inputIngreso input2" id="emailRecuperar" placeholder="Correo electronico" type="email">
      <button  class="inputIngreso input2"id="enviarR">Enviar</button>
    </div>
  </div>
    `;
  const enviarR = document.getElementById('enviarR');
  enviarR.addEventListener('click', () => {
    restablecerContrasena();
  });
};

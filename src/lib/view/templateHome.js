import { guardar, mostrarPublicacionHome, dataGmail } from '../viewController.js';


export const home = () => {
  window.location.hash = '/home';

  const user = dataGmail();
  document.getElementById('root').innerHTML = /* html */ `
  <header>
  <img id="logoMenu" src="./image/logo.jpg">
  <div id="contenedorBotonesMenu">
      <div class="colorUno">Ruta</div> 
      <div class="colorDos">Hospedaje</div>
      <div class="colorUno">Comida</div>
      <div class="colorDos">Clima</div>
      <div class="colorUno">Transporte</div>
      <div class="colorDos">Tour</div>
  </div>
  </header>
  <div id="contenedorEscribir">
      <input id="inputHome" type="text" placeholder="¿Cual es tu pica'?">
      <input type="file"> 
      <select id="opcionPublicar">
<<<<<<< HEAD

      <option>Ruta </option>
      <option> Hospedaje</option>
      <option>Comida </option>
      <option>Clima </option>
      <option>Transporte </option>
      <option> Tour</option>

      </select>
         <button id="btnPublicar"> Publicar</button>

=======
        <option>Ruta </option>
        <option> Hospedaje</option>
        <option>Comida </option>
        <option>Clima </option>
        <option>Transporte </option>
        <option> Tour</option>
       </select>

  <button id="btnPublicar"> Publicar</button>
  <button id="btnEditar"> Editar</button>
>>>>>>> 6384584... mostrar foto y nombre user google
   </div>

  <div id="contenedorMayor">

  </div>
  <div class="contenedorSalida"> 
    <a id="btnHome" href='#/home'></a>
    <img src="${user.photoURL}" id="btnMuroPersonal" href="#/muroPersonal">
    <a  id="btnCerrar"></a>
  </div>`;

  const botonPublicar = document.getElementById('btnPublicar');
  botonPublicar.addEventListener('click', () => {
    guardar();
  });
  mostrarPublicacionHome();
};

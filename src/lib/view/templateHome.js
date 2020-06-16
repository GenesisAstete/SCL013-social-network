<<<<<<< HEAD
<<<<<<< HEAD
import { guardar, mostrarPublicacionHome } from '../viewController.js';

export const home = () => {
  window.location.hash = '/home';
  const user = firebase.auth().currentUser;
  document.getElementById('root').innerHTML = /* html */ `
=======
<<<<<<< HEAD
import {
  guardar
} from "../viewController.js";
import {
  editar
} from "../viewController.js";
import {
  mostrarPublicacionHome
} from "../viewController.js";

export const home = () => {

  window.location.hash = '/home';
  //leer documentos

  document.getElementById('root').innerHTML =
    /*html*/
    `
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

      <option>Ruta </option>
      <option> Hospedaje</option>
      <option>Comida </option>
      <option>Clima </option>
      <option>Transporte </option>
      <option> Tour</option>

       </select>

 
  <button id="btnPublicar"> Publicar</button>
  <button id="btnEditar"> Editar</button>
   </div>

<div id="contenedorMayor">

</div>
<div class="contenedorSalida"> 
  <a id="btnHome" href='#/home'></a>
  <a id="btnMuroPersonal" href="#/muroPersonal"></a>
  <a  id="btnCerrar"></a>
</div>
  `

  const botonPublicar = document.getElementById('btnPublicar');
  botonPublicar.addEventListener("click", () => {
    guardar();
  });
  mostrarPublicacionHome()

=======
import {guardar} from "../viewController.js";

import {mostrarPublicacionHome} from "../viewController.js";

export const home = () => {

    window.location.hash = '/home';
    //leer documentos

    document.getElementById('root').innerHTML =
        /*html*/ `
>>>>>>> d4ba488... css template login, registro y recuperacion
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
      <input class="fotoPost" type="file"> 
      <select id="opcionPublicar">

<<<<<<< HEAD

=======
>>>>>>> d4ba488... css template login, registro y recuperacion
      <option>Ruta </option>
      <option> Hospedaje</option>
      <option>Comida </option>
      <option>Clima </option>
      <option>Transporte </option>
      <option> Tour</option>

<<<<<<< HEAD
      </select>
         <button id="btnPublicar"> Publicar</button>

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
=======
       </select>

 
  <button id="btnPublicar"> Publicar</button>
   </div>

<div id="contenedorMayor">

</div>
<div class="contenedorSalida"> 
  <a id="btnHome" href='#/home'></a>
  <a id="btnMuroPersonal" href="#/muroPersonal"></a>
  <a  id="btnCerrar"></a>
</div>
=======
import {guardar} from "../viewController.js";

import {mostrarPublicacionHome} from "../viewController.js";

export const home = () => {

    window.location.hash = '/home';
    //leer documentos

    document.getElementById('root').innerHTML =
        /*html*/ `
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
      <input class="fotoPost" type="file"> 
      <select id="opcionPublicar">

      <option>Ruta </option>
      <option> Hospedaje</option>
      <option>Comida </option>
      <option>Clima </option>
      <option>Transporte </option>
      <option> Tour</option>

       </select>

 
  <button id="btnPublicar"> Publicar</button>
   </div>

<div id="contenedorMayor">

</div>
<div class="contenedorSalida"> 
  <a id="btnHome" href='#/home'></a>
  <a id="btnMuroPersonal" href="#/muroPersonal"></a>
  <a  id="btnCerrar"></a>
</div>
>>>>>>> 7fd278c... css template login, registro y recuperacion
  `

    const botonPublicar = document.getElementById('btnPublicar');
    botonPublicar.addEventListener("click", () => {
        guardar();
    });
<<<<<<< HEAD
<<<<<<< HEAD
mostrarPublicacionHome()          
=======
mostrarPublicacionHome()
>>>>>>> 7fd278c... css template login, registro y recuperacion
=======
mostrarPublicacionHome()          
>>>>>>> 433206d... registro guardando usuario

>>>>>>> 7fd278c... css template login, registro y recuperacion
}
>>>>>>> d4ba488... css template login, registro y recuperacion

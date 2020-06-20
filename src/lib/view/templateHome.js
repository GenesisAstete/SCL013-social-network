import { guardar, mostrarPublicacionHome } from '../viewController.js';
import { uploadImagePost } from '../storage.js';

export const home = () => {
  window.location.hash = '/home';

  document.getElementById('root').innerHTML = `
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
      <img id="fotoPublicacion">
      <input type="file" id="inputImg">
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
  `;
  const botonPublicar = document.getElementById('btnPublicar');
  botonPublicar.addEventListener('click', () => {
    const info = document.getElementById('inputImg').files;
    if (info.lenght > 0) {
      const urlImg = uploadImagePost(info[0], 'imgPublicacion');
      urlImg.then((url) => {
        guardar(url);
      });
    } else {
      guardar(null);
    }
  });
  mostrarPublicacionHome();


  const evento = document.querySelector('#inputImg');
  evento.addEventListener('change', () => {
    const contenedorImagen = document.getElementById('fotoPublicacion');
    const inputImg = document.getElementById('inputImg');

    const reader = new FileReader();
    reader.onload = (e) => {
      contenedorImagen.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(inputImg.files[0]);
  });
};

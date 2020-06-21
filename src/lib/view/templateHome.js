import { guardar, mostrarPublicacionHome } from '../viewController.js';
import { uploadImagePost } from '../storage.js';
import { mostrarFiltros } from './filtros/mostrarFiltros.js';

export const home = () => {
  window.location.hash = '/home';

  document.getElementById('root').innerHTML = `
  <header>
  
  <img id="logoMenu" src="./image/logo.jpg">
  <div id="contenedorBotonesMenu">
    <div class="colorUno" id="ruta">Ruta</div> 
    <div class="colorDos" id="hospedaje">Hospedaje</div>
    <div class="colorUno" id="comida">Comida</div>
    <div class="colorDos" id="clima">Clima</div>
    <div class="colorUno" id="transporte">Transporte</div>
    <div class="colorDos" id="tour">Tour</div>
  </div>

  </header>
  <div id="contenedorEscribir">
      <input id="inputHome" type="text" placeholder="¿Cual es tu pica'?">
      <img id="fotoPublicacion">
      <input type="file" id="inputImg">
      <form id="formSelect">
        <select id="opcionPublicar" required>
          <option value="" disabled selected>Categoría</option>
          <option value="Ruta">Ruta</option>
          <option value="Hospedaje"> Hospedaje</option>
          <option value="Comida">Comida</option>
          <option value="Clima">Clima</option>
          <option value="Transporte">Transporte </option>
          <option>Tour</option>
        </select>
      </form>
      <span id="seleciona"></span>
         <button id="btnPublicar" style="display: block" > Publicar</button>
         <button id="botonGuardarEdicion"  style="display: none" >Guardar edicion </button>
   </div>

<div id="contenedorMayor">

</div>
<div class="contenedorSalida"> 
  <a id="btnHome" href='#/home'></a>
  <a id="btnMuroPersonal" href="#/muroPersonal"></a>
  <a  id="btnCerrar"></a>
</div>
  `;
  /*  const validarCampos = () => {
 if (document.formSelect.opcionPublicar.value === 0 || document.formSelect.opcionPublicar.value === '') {
      alert('Selecciona Una opción');
      document.formSelect.opcionPublicar.focus();
    }
  };  */

  const alternLogoMenu = document.querySelector('#logoMenu');
  alternLogoMenu.addEventListener('click', () => {
    window.location.reload();
  });

  /* const botonPublicar = document.getElementById('btnPublicar');
  botonPublicar.addEventListener('click', () => {
    guardar();
  });
  mostrarPublicacionHome() */

  const botonRuta = document.getElementById('ruta');
  botonRuta.addEventListener('click', () => {
    mostrarFiltros('Ruta');
  });

  const botonHospedaje = document.getElementById('hospedaje');
  botonHospedaje.addEventListener('click', () => {
    mostrarFiltros('Hospedaje');
  });

  const botonComida = document.getElementById('comida');
  botonComida.addEventListener('click', () => {
    mostrarFiltros('Comida');
  });

  const botonClima = document.getElementById('clima');
  botonClima.addEventListener('click', () => {
    mostrarFiltros('Clima');
  });

  const botonTransporte = document.getElementById('transporte');
  botonTransporte.addEventListener('click', () => {
    mostrarFiltros('Transporte');
  });

  const botonTour = document.getElementById('tour');
  botonTour.addEventListener('click', () => {
    mostrarFiltros('Tour');
  });

  const botonPublicar = document.getElementById('btnPublicar');
  botonPublicar.addEventListener('click', () => {
    const info = document.getElementById('inputImg').files;
    if (info.length > 0) {
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

import {loginEmail} from "../viewController.js" ;
import {registro} from "./templateRegistro.js";
import {Rpassword} from "./templateRpassword.js";


export const login = () => {
window.location.hash = '/login';
document.getElementById('root').innerHTML =  /*html*/ `
  
<div id="contenedorGeneral">
    <div class="carrusel">
      <div id="imagenUno" class="imagenSlider">
          <p class="title">¿te gusta viajar por Chile? </p>
      </div>
    </div>

    <div class="carrusel">
      <div id="imagenDos" class="imagenSlider"> 
          <p class="title">publica tus           mejores picadas</p>
      </div>
    </div>

    <div class="carrusel">
      <div id="imagenTres" class="imagenSlider">
        <p class="title">Conoce a otros viajeros </p>
      </div>
    </div>

    <div class="carrusel">
      <div id="imagenCuatro" class="imagenSlider">
          <p class="title">recorrer Chile ya no es una excusa</p>
      </div>
    </div> 
  </div>


    <!--Formulario de logeo-->
  <div class="contGeneralFormularios" > 
    <img class="logo" id="btnlogo"src="./image/logo.jpg">
    <img id="usuario" src="image/usercian 1.png">
      <div class="contenedorIngreso">
        <input class="inputIngreso" id="emailIngreso" placeholder="Correo electronico" type="email">
        <input class="inputIngreso" id="passIngreso" placeholder="Contraseña" type="password">
        <button class="inputIngreso" id="iniciarSesion">Iniciar sesion</button>
        <p id="textoOlvido">¿Olvidó su Contraseña? </p>
        <button id="btngoogle">Iniciar Sesión con Google</button> 
        <p id="pTres">¿Aún no eres parte?</p>
        <button id="botonRegistrate"> Registrate</button>
      </div>
  </div>
  </div>

    `;

 const botonIngreso = document.getElementById('iniciarSesion');
 botonIngreso.addEventListener("click", () => {
   loginEmail(); 
 }) 

 const botonRegistrate = document.getElementById('botonRegistrate');
 botonRegistrate.addEventListener("click", () => {
   registro();  
 }) 


 const passOlvido = document.getElementById('textoOlvido');
 passOlvido.addEventListener("click", () => {
  Rpassword(); 
 }) 
  var slideIndex = 0;


const showSlides = ()=> {
    let i;
    let slides = document.getElementsByClassName("carrusel");
    let dots = document.getElementsByClassName(".dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000);
}  


  showSlides();

}



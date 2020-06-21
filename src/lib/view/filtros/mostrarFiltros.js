export const mostrarFiltros = (filtro) => {
  const db = firebase.firestore();


  db.collection('publicaciones').where('tipo', '==', filtro).onSnapshot((querySnapshot) => {
    const idPublicacion = document.getElementById('contenedorMayor');
    idPublicacion.innerHTML = '';

    querySnapshot.forEach((doc) => {
      idPublicacion.innerHTML += ` 
        <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
          <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
            <div id="contenedorIdentidad"> 
            <img id="fotoParticipante" src="${doc.data().fotoperfil}"/>
            <p id="nombreUser"> ${doc.data().nombre}</p>
          </div>
          <div id="imagenPublicacion"> </div>
          <div id="contenedorPubli"> 
            <p id="textoPublicacion"> ${doc.data().post}</p>
          </div> 
          <p id="tipoPublicacion"> ${doc.data().tipo}</p>
          <div id="interacciones">
              <a id="btnCompartir"></a>
              <a id="btnRecomiendo"></a>
          </div>
        </div>
            `;
    });
  });
};

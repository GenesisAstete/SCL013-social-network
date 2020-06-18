/*aqui iran las funciones de firebase*/

export const registrar = () => {
  console.log('diste clic en registrar')
  const email = document.querySelector('#emailRegistro').value;
  const pass = document.querySelector('#passRegistro').value;
  const usuario = document.querySelector('#usuarioRegistro').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (data) {
    console.log("ingreso a registrar")
    enviarCorreo()
    guardarUsuario()
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      alert('La contraseña es muy débil.');
    } else {
      alert(errorMessage);
    }
  });
}

export const enviarCorreo = () => {
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    alert('¡Verificación de correo enviada!');
  });
}


export const loginEmail = () => {
  const emailI = document.querySelector('#emailIngreso').value;
  const passI = document.querySelector('#passIngreso').value;
  firebase.auth().signInWithEmailAndPassword(emailI, passI)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  console.log(emailI)
  console.log(passI)
}

export const cerrarSesion = () => {
  const btnCerrar = document.querySelector('#btnCerrar')
  btnCerrar.addEventListener('click', () => {
    firebase.auth().signOut()
  })
}

export const iniciarSesion = () => {
  const btngoogle = document.querySelector('#btngoogle')
  btngoogle.addEventListener('click', async () => {

    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithPopup(provider)
    } catch (error) {
      console.log(error)
    }
  })
}


export const restablecerContrasena = () => {
  var emailRecuperar = document.getElementById('emailRecuperar').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(emailRecuperar).then(function () {
    // Password Reset Email Sent!
    alert('Correo electrónico de restablecimiento de contraseña enviado.');
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
}

//leer data
var db = firebase.firestore();
//guardar Usuario
/*guardar usuarios nuevos en la base de datos*/
export const guardarUsuario = () => {
  console.log("ingreso a guardar usuario")
  const nombre = document.getElementById('usuarioRegistro').value;
  const correo = document.getElementById('emailRegistro').value;
  const password = document.getElementById('passRegistro').value;
  db.collection('usuarios').add({

    nombre: nombre,
    correo: correo,
    password: password
  }).then(function (docRef) {
    console.log("usuario registrado: ", docRef);
    console.log(nombre, correo, password)
  }).catch(function (error) {
    console.error("Errod al agregar user: ", error);
  })
}




export const guardar = () => {

  const post = document.getElementById("inputHome").value;
  const tipo = document.getElementById("opcionPublicar").value;
  db.collection("pruebaGenesis").add({

      post: post,
      foto: "",
      tipo: tipo

    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById("opcionPublicar").value = '';
      document.getElementById("opcionPublicar").value = '';
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  mostrarPublicacionHome();
}




//imprimir publicacion
export const mostrarPublicacionHome = () => {
  db.collection("pruebaGenesis").onSnapshot((querySnapshot) => {

    //tabla.innerHTML = "";
    const idPublicacion = document.getElementById("contenedorMayor")
    idPublicacion.innerHTML = "";

    querySnapshot.forEach((doc) => {

      idPublicacion.innerHTML += /*html*/ ` 
      <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
    <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
      <div id="contenedorIdentidad"> 
        <img id="fotoParticipante" scr="./image/Ellipse.png"/>
        <p id="nombreUser"></p>
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
        <div class="contenedorBtnEdicion"> 
         <button class="btnEliminar">Eliminar  </button> 
         <button class="btnEditar">Editar  </button>
        </div>
      
      </div>
      </div>
`
      //borrar publicaciones
      let botonEliminar = document.querySelectorAll(".btnEliminar")
      botonEliminar.forEach(btn => {
        console.log("ingresoooooooooo eliminar")
        btn.addEventListener("click", (e) => {
          const eliminarConfirmado = () => {
            let idPublicacion = e.target.parentElement.parentElement.getAttribute("data-publicacion");
            eliminar(idPublicacion);
            console.log("borraaaaarrrrrrrrrr")
          }
          let texto;
          if (confirm("¿segura de eliminar?")) {
            texto = "eliminar!";
            eliminarConfirmado();
          } else {
            texto = "cancelar";
            console.log("cancelar")
          }


        });
      })
      //editar publicacion
      let botonEditar = document.querySelectorAll(".btnEditar")
      botonEditar.forEach(btn => {

        console.log("ingreso al query de EDITAR")
        btn.addEventListener("click", (event) => {

          let idPublicacion = event.target.parentElement.parentElement.parentElement.getAttribute("data-publicacionEditar");



          console.log(idPublicacion);
          editar(idPublicacion);

        })
      })
    })
  });
};

const eliminar = (id) => {
  console.log("ingresooo a eliminar ")
  db.collection("pruebaGenesis").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");

  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}

//editar publicacion
export const editar = (id) => {

  console.log("ingreso a la funcion editarrrr")
  //editado con lore
  db.collection("pruebaGenesis").doc(id).get().then(doc => {

    console.log(doc.data().post);
    document.getElementById("inputReescribir").value = doc.data().post;
    document.getElementById("opcionPublicar").value = doc.data().tipo;
  })

  //const botonEditar = document.getElementById("btnEditar");

  //se trae el ID de contenedor de botones 
  //para crear el boton publicar edicion

  const contenedorPublicarEdicion = document.getElementsByClassName("contenedorBtnEdicion")
  contenedorPublicarEdicion.innerHTML = "";
  const botonPublicar = document.createElement("button");
  botonPublicar.setAttribute("class", "botonPublicarEdicion")
  botonPublicar.innerHTML = "Publicar Edicion"

  contenedorPublicarEdicion.appendChild = (botonPublicar);


  //cambiamos de <P> a <Input>
  const parrafoPublicacion = document.getElementById("contenedorPubli");
  parrafoPublicacion.innerHTML = "";
  const inputReescribir = document.createElement("input");
  inputReescribir.setAttribute("id", "inputReescribir");
  inputReescribir.innerHTML = "";
  parrafoPublicacion.appendChild(inputReescribir);


  botonPublicar.onclick = function () {
    const editando = db.collection("pruebaGenesis").doc(id);
    const post = document.getElementById("inputReescribir").value
    const tipo = document.getElementById("opcionPublicar").value

    return editando.update({
        post: post,
        tipo: tipo

      })
      .then(function () {
        console.log("Document successfully updated!");
        //  botonEditar.innerHTML = "Publicacion Editada";
        const post = document.getElementById("inputReescribir").value = "";
        const tipo = document.getElementById("opcionPublicar").value = "";


      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
}
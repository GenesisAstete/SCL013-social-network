/* aqui iran las funciones de firebase*/

export const registrar = () => {
  console.log('diste clic en registrar')
  const email = document.querySelector('#emailRegistro').value;
  const pass = document.querySelector('#passRegistro').value;
  const usuario = document.querySelector('#usuarioRegistro').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (data) {
    console.log("ingreso a registrar")
    guardarUsuario()
    enviarCorreo()
    
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

/*editar perfil*/
/* export const editPerfil=(username, onSuccess, onError)=>{
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName : username;
  })
  .then((result) =>{
    onSuccess(result)
  }).catch((error) =>{
    onError(error);
  });
} */

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
      await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      console.log('user ', user);
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

//data user google




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
  const user = firebase.auth().currentUser;
  db.collection('publicaciones').add({

    uid: user.uid,
    nombre: user.displayName,
    fotoperfil: user.photoURL,
    post: post,
    foto: '',
    tipo: tipo,
    likes: [],
    /*time: time,*/
    photo: '',

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


const eliminar = (id) => {
  console.log("ingresooo a eliminar ")
  db.collection("publicaciones").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");

  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}



// imprimir publicacion
export const mostrarPublicacionHome = () => {
  db.collection('publicaciones').onSnapshot((querySnapshot) => {
    // tabla.innerHTML = "";
    const idPublicacion = document.getElementById('contenedorMayor');
    idPublicacion.innerHTML = '';
    //const user = firebase.auth().currentUser;
    querySnapshot.forEach((doc) => {
 /* db.collection('usuarios').get().then((userdoc) => { 
    console.log(userdoc.exists);
    console.log(doc.data().uid); */
    idPublicacion.innerHTML += ` 
      <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
    <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
      <div id="contenedorIdentidad"> 
        <img id="fotoParticipante" src='${doc.data().fotoperfil}'/>
        <p id="nombreUser">${doc.data().nombre}</p>
      </div>
      <div id="imagenPublicacion"></div>
      
      <div id="contenedorPubli"> 
      <p id="textoPublicacion"> ${doc.data().post}</p>
      </div> 
        <p id="tipoPublicacion"> ${doc.data().tipo}</p>
        <div id="interacciones">
          <a id="btnCompartir"></a>
          <a id="btnRecomiendo"></a>
        </div>
        <div id="contenedorBtnEdicion"> 
         <button class="btnEliminar">Eliminar  </button> 
        <button class="btnEditar">Editar  </button>
         </div>
      
      </div>
      </div>
`;
      //borrar publicaciones
      let botonEliminar = document.querySelectorAll(".btnEliminar")
      botonEliminar.forEach(btn => {
        console.log("ingresoooooooooo eliminar")
        btn.addEventListener("click", (e) => {
          let idPublicacion = e.target.parentElement.parentElement.getAttribute("data-publicacion");
          eliminar(idPublicacion);
          console.log("borraaaaarrrrrrrrrr")
        });
      })
    })
    
      //editar publicacion
      let botonEditar = document.querySelectorAll(".btnEditar")
      botonEditar.forEach(btn => {

        console.log("ingreso al query de EDITAR")
        btn.addEventListener("click", (event) => {

          let idPublicacion = event.target.parentElement.parentElement.parentElement.getAttribute("data-publicacionEditar");
          console.log(idPublicacion);
          editar(idPublicacion);

        });
       }); 
   /*  }); */
  });
};
//editar publicacion
export const editar = (id) => {
  console.log("ingreso a la funcion editarrrr")
  //editado con lore
  db.collection("publicacion").doc(id).get().then((doc) => {
    document.getElementById("inputReescribir").value = doc.data().post;
    document.getElementById("opcionPublicar").value = doc.data().tipo;
  });

 
}

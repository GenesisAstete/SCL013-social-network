<<<<<<< HEAD
<<<<<<< HEAD
/*aqui iran las funciones de firebase*/

export const registrar = () => {
  console.log('diste clic en registrar')
  const email = document.querySelector('#emailRegistro').value;
  const pass = document.querySelector('#passRegistro').value;
  const usuario = document.querySelector('#usuarioRegistro').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then(function (data) {
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
<<<<<<< HEAD
<<<<<<< HEAD
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
  const date = new Date();
  const user = firebase.auth().currentUser;
  db.collection("publicaciones").add({
      uid: user.uid,
      nombre: user.displayName,
      fotoperfil: user.photoURL,
      post: post,
      foto: '',
      tipo: tipo,
      likes: [],
      photo: '',
      date,

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
  db.collection("publicaciones").orderBy('date', 'desc').onSnapshot((querySnapshot) => {

    //tabla.innerHTML = "";
    const idPublicacion = document.getElementById("contenedorMayor")
    idPublicacion.innerHTML = "";
=======
};
=======
}
>>>>>>> a73173d... funcion editar

//leer data
var db = firebase.firestore();

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
<<<<<<< HEAD
  db.collection('pruebaGenesis').onSnapshot((querySnapshot) => {
    const idPublicacion = document.getElementById('contenedorMayor');
    idPublicacion.innerHTML = '';
>>>>>>> 27ee085... mostrar foto y nombre user google
=======
  db.collection("pruebaGenesis").onSnapshot((querySnapshot) => {

    //tabla.innerHTML = "";
    const idPublicacion = document.getElementById("contenedorMayor")
    idPublicacion.innerHTML = "";
>>>>>>> a73173d... funcion editar

    querySnapshot.forEach((doc) => {

      idPublicacion.innerHTML += /*html*/ ` 
      <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
    <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
      <div id="contenedorIdentidad"> 
<<<<<<< HEAD
<<<<<<< HEAD
        <img id="fotoParticipante" src="${doc.data().fotoperfil}"/>
        <p id="nombreUser"> ${doc.data().nombre}</p>
=======
        <img id="fotoParticipante" src="${user.photoURL}">
        <p id="nombreUser">${user.displayName}</p>
>>>>>>> 27ee085... mostrar foto y nombre user google
=======
        <img id="fotoParticipante" scr="./image/Ellipse.png"/>
        <p id="nombreUser"></p>
>>>>>>> a73173d... funcion editar
      </div>
      <div id="imagenPublicacion"> </div>
        <p id="textoPublicacion"> ${doc.data().post}</p>
        <button class="btnEliminar">Eliminar  </button> 
        <button class="btnEditar">Editar  </button> 
        <p id="tipoPublicacion"> ${doc.data().tipo}</p>
        <div id="interacciones">
          <a id="btnCompartir"></a>
          <a id="btnRecomiendo"></a>
        </div>
<<<<<<< HEAD
        <div id="contenedorBtnEdicion" data-publicacionContenedor='${doc.id}'> 
         <button class="btnEliminar">Eliminar  </button> 
         <button class="btnEditar">Editar  </button>
         <button id="botonGuardarEdicion">Guardar edicion</button>
        </div>
      
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      </div>
>>>>>>> a73173d... funcion editar
      </div>
`
      //borrar publicaciones
      let botonEliminar = document.querySelectorAll(".btnEliminar")
      botonEliminar.forEach(btn => {
        console.log("ingresoooooooooo eliminar")
        btn.addEventListener("click", (e) => {
<<<<<<< HEAD
<<<<<<< HEAD

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
      const botonEditar = document.querySelectorAll(".btnEditar")
=======
          let idPublicacion = e.target.parentElement.parentElement.getAttribute("data-publicacion");
=======
=======
>>>>>>> 3a06464... eslint
      </div>`;

      // borrar publicaciones
      let botonEliminar = document.querySelectorAll('.btnEliminar');
      botonEliminar.forEach((btn) => {
        console.log('ingresoooooooooo eliminar');
        btn.addEventListener('click', (e) => {
          let idPublicacion = e.target.parentElement.getAttribute('data-publicacion');
=======
          let idPublicacion = e.target.parentElement.getAttribute("data-publicacion");
>>>>>>> a73173d... funcion editar
          eliminar(idPublicacion);
          console.log("borraaaaarrrrrrrrrr")
        });
<<<<<<< HEAD
      });
      // editar publicacion
      let botonEditar = document.querySelectorAll('.btnEditar');
>>>>>>> 27ee085... mostrar foto y nombre user google
=======
      })
      //editar publicacion
      let botonEditar = document.querySelectorAll(".btnEditar")
>>>>>>> a73173d... funcion editar
      botonEditar.forEach(btn => {

        console.log("ingreso al query de EDITAR")
        btn.addEventListener("click", (e) => {
          let idPublicacion = e.target.parentElement.parentElement.getAttribute("data-publicacion");

          //crea el boton Gurdar Edicion

          //  const contenedorPublicarEdicion = document.getElementById("contenedorBtnEdicion")
          //contenedorPublicarEdicion.forEach(btn => {
          //btn.innerHTML += `<button id="botonGuardarEdicion">Guardar edicion</button>`;
          //})
          //   contenedorPublicarEdicion.innerHTML = "";

          //  const click = document.getElementById("botonGuardarEdicion");


          //cambiamos de <P> a <Input>
          const parrafoPublicacion = document.getElementById("contenedorPubli");
          parrafoPublicacion.innerHTML = "";
          parrafoPublicacion.innerHTML = `<input class="inputReescribir">`;

<<<<<<< HEAD
<<<<<<< HEAD
=======
          let idPublicacion = event.target.parentElement.parentElement.parentElement.getAttribute("data-publicacionEditar");
<<<<<<< HEAD
=======
        console.log('ingreso al query de EDITAR');
        btn.addEventListener('click', (event) => {
          let idPublicacion = event.target.parentElement.parentElement.getAttribute("data-publicacionEditar");
>>>>>>> 6384584... mostrar foto y nombre user google
>>>>>>> 27ee085... mostrar foto y nombre user google
=======
>>>>>>> 3a06464... eslint
=======
          let idPublicacion = event.target.parentElement.parentElement.getAttribute("data-publicacionEditar");
>>>>>>> a73173d... funcion editar
          console.log(idPublicacion);

          editar(idPublicacion);

<<<<<<< HEAD
<<<<<<< HEAD
        })

      })

=======
export const guardar = () => {
  const post = document.getElementById('inputHome').value;
  const tipo = document.getElementById('opcionPublicar').value;
  db.collection('pruebaGenesis').add({

    post: 'post',
    foto: '',
    tipo: 'tipo',

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('opcionPublicar').value = '';
      document.getElementById('opcionPublicar').value = '';
>>>>>>> 27ee085... mostrar foto y nombre user google
=======
        })
      })
>>>>>>> a73173d... funcion editar
    })
  });
};

<<<<<<< HEAD
<<<<<<< HEAD
const eliminar = (id) => {
  console.log("ingresooo a eliminar ")
  db.collection("publicaciones").doc(id).delete().then(function () {
    console.log("Document successfully deleted!");
=======
>>>>>>> 27ee085... mostrar foto y nombre user google

=======
>>>>>>> a73173d... funcion editar
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
<<<<<<< HEAD
<<<<<<< HEAD
  console.log("ingreso a la funcion editarrrr")
  //editado con lore
  db.collection("publicaciones").doc(id).get().then(doc => {

    console.log(doc.data().post);
    document.querySelector('.inputReescribir').value = doc.data().post;
=======
  console.log('"ingreso a la funcion editarrrr');
  // editado con lore
  db.collection('pruebaGenesis').doc(id).get().then(doc => {
    console.log(doc.data().post);
    document.getElementById("inputReescribir").value = doc.data().post;
>>>>>>> 27ee085... mostrar foto y nombre user google
    document.getElementById("opcionPublicar").value = doc.data().tipo;
  })

  //const botonEditar = document.getElementById("btnEditar");

  //se trae el ID de contenedor de botones 
  //para crear el boton publicar edicion


<<<<<<< HEAD
  const botonPublicar = document.querySelector('#botonGuardarEdicion');

  botonPublicar.addEventListener("click", () => {
    const editando = db.collection("publicaciones").doc(id);
    const post = document.querySelector('.inputReescribir').value;
    const tipo = document.getElementById("opcionPublicar").value;
=======
  //cambiamos de <P> a <Input>
  const parrafoPublicacion = document.getElementById("contenedorPubli");
  parrafoPublicacion.innerHTML = "";
  const inputReescribir = document.createElement("input");
  inputReescribir.setAttribute("id", "inputReescribir");
  inputReescribir.innerHTML = "";
  parrafoPublicacion.appendChild(inputReescribir);


  botonPublicar.onclick = function () {
=======
  console.log("ingreso a la funcion editarrrr")
  //editado con lore
  db.collection("pruebaGenesis").doc(id).get().then(doc => {

    console.log(doc.data().post);
    document.getElementById("inputHome").value = doc.data().post;
    document.getElementById("opcionPublicar").value = doc.data().tipo;
  })
  const botonEditar = document.getElementById("btnEditar");
  botonEditar.onclick = function () {
>>>>>>> a73173d... funcion editar
    const editando = db.collection("pruebaGenesis").doc(id);
    const post = document.getElementById("inputHome").value
    const tipo = document.getElementById("opcionPublicar").value
>>>>>>> f1f4e3e... aplica eslint

    return editando.update({
        post: post,
        tipo: tipo

      })
      .then(function () {
        console.log("Document successfully updated!");
<<<<<<< HEAD

=======
        botonEditar.innerHTML = "Publicacion Editada";
        const post = document.getElementById("inputHome").value = "";
        const tipo = document.getElementById("opcionPublicar").value = "";
>>>>>>> a73173d... funcion editar
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  })

}
=======
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d9b47e6... css template login, registro y recuperacion
=======
=======
=======
>>>>>>> 505ca5c... registro guardando usuario
/*aqui iran las funciones de firebase*/
=======
/* aqui iran las funciones de firebase*/
>>>>>>> 1619362... unir post y uid

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

<<<<<<< HEAD
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> c2463f9... funcion editar
>>>>>>> 0277fdd... funcion editar
=======
>>>>>>> 7c3e97a... css responsive template de inicio
=======
  };
};
>>>>>>> 27ee085... mostrar foto y nombre user google
=======
  }
}
>>>>>>> a73173d... funcion editar
=======
>>>>>>> 505ca5c... registro guardando usuario
=======
}
>>>>>>> 20219ef... boton edicion funcionando solo con una publicacion
=======
 
}
>>>>>>> 1619362... unir post y uid

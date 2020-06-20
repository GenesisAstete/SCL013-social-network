import { enviarCorreo, db, eliminar } from './index.js';

// guardar usuarios nuevos en la base de datos
export const guardarUsuario = () => {
  const nombre = document.getElementById('usuarioRegistro').value;
  const correo = document.getElementById('emailRegistro').value;
  const password = document.getElementById('passRegistro').value;
  db.collection('usuarios').add({
    nombre: nombre,
    correo: correo,
    password: password,
  }).then((docRef) => {
    console.log('usuario registrado: ', docRef);
  }).catch((error) => {
    console.error('Errod al agregar user: ', error);
  });
};


// registrar usuarios por correo electronico
export const registrar = () => {
  const email = document.querySelector('#emailRegistro').value;
  const pass = document.querySelector('#passRegistro').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).then((data) => {
    enviarCorreo();
    guardarUsuario();
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode === 'auth/weak-password') {
      alert('La contraseña es muy débil.');
    } else {
      alert(errorMessage);
    }
  });
};

export const loginEmail = () => {
  const emailI = document.querySelector('#emailIngreso').value;
  const passI = document.querySelector('#passIngreso').value;
  firebase.auth().signInWithEmailAndPassword(emailI, passI)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const iniciarSesion = () => {
  const btngoogle = document.querySelector('#btngoogle');
  btngoogle.addEventListener('click', async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  });
};

export const restablecerContrasena = () => {
  const emailRecuperar = document.getElementById('emailRecuperar').value;
  // [START sendpasswordemail]
  firebase.auth().sendPasswordResetEmail(emailRecuperar).then(() => {
    // Password Reset Email Sent!
    alert('Correo electrónico de restablecimiento de contraseña enviado.');
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode === 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode === 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
};

export const guardar = () => {
  const post = document.getElementById('inputHome').value;
  const tipo = document.getElementById('opcionPublicar').value;
  const date = new Date();
  const user = firebase.auth().currentUser;
  db.collection('publicaciones').add({
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
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('opcionPublicar').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// editar publicacion
export const editar = (id) => {
  // editado con lore
  db.collection('publicaciones').doc(id).get().then((doc) => {
    document.querySelector('.inputReescribir').value = doc.data().post;
    document.getElementById('opcionPublicar').value = doc.data().tipo;
  });

  const botonPublicar = document.querySelector('#botonGuardarEdicion');
  botonPublicar.addEventListener('click', () => {
    const editando = db.collection('publicaciones').doc(id);
    const post = document.querySelector('.inputReescribir').value;
    const tipo = document.getElementById('opcionPublicar').value;

    return editando.update({
      post: post,
      tipo: tipo,
    })
      .then(() => {
        console.log('Document successfully updated!');
      }).catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  });
};

// imprimir publicacion
export const mostrarPublicacionHome = () => {
  db.collection('publicaciones').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
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
        <div id="contenedorBtnEdicion" data-publicacionContenedor='${doc.id}'> 
         <button class="btnEliminar">Eliminar  </button> 
         <button class="btnEditar">Editar  </button>
         <button id="botonGuardarEdicion">Guardar edicion</button>
        </div>
      </div>`;

      // borrar publicaciones
      const botonEliminar = document.querySelectorAll('.btnEliminar');
      botonEliminar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const eliminarConfirmado = () => {
            const idPublicacion = e.target.parentElement.parentElement.getAttribute('data-publicacion');
            eliminar(idPublicacion);
          };
          let texto;
          if (confirm('¿segura de eliminar?')) {
            texto = 'eliminar!';
            eliminarConfirmado();
          } else {
            texto = 'cancelar';
          }
        });
      });

      // editar publicacion
      const botonEditar = document.querySelectorAll('.btnEditar');
      botonEditar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const idPublicacion = e.target.parentElement.parentElement.getAttribute('data-publicacion');

          // cambiamos de <P> a <Input>
          const parrafoPublicacion = document.getElementById('contenedorPubli');
          parrafoPublicacion.innerHTML = '';
          parrafoPublicacion.innerHTML = `<input class='inputReescribir'>`;
          editar(idPublicacion);
        });
      });
    });
  });
};

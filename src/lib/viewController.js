import { enviarCorreo, db, eliminar } from './index.js';

// guardar usuarios nuevos en la base de datos
export const guardarUsuario = () => {
  const nombre = document.getElementById('usuarioRegistro').value;
  const correo = document.getElementById('emailRegistro').value;
  const password = document.getElementById('passRegistro').value;
  db.collection('usuarios').add({
    displayName: nombre,
    useremail: correo,
    password,
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
      if (errorCode) {
        console.log('errorCode');
      } if (errorMessage) {
        console.log('errorMessage');
      }
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

export const guardar = (url) => {
  const post = document.getElementById('inputHome').value;
  const tipo = document.getElementById('opcionPublicar').value;
  const date = new Date();
  const user = firebase.auth().currentUser;
  db.collection('publicaciones').add({
    uid: user.uid,
    nombre: user.displayName,
    fotoperfil: user.photoURL,
    post,
    foto: url,
    tipo,
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
    document.querySelector('#inputHome').value = doc.data().post;
    document.getElementById('opcionPublicar').value = doc.data().tipo;
  });

  const botonPublicar = document.querySelector('#botonGuardarEdicion');
  botonPublicar.addEventListener('click', () => {
    const editando = db.collection('publicaciones').doc(id);
    const post = document.querySelector('#inputHome').value;
    const tipo = document.getElementById('opcionPublicar').value;

    return editando.update({
      post,
      tipo,
    })
      .then(() => {
        document.getElementById('botonGuardarEdicion').style.display = 'none';
        document.getElementById('btnPublicar').style.display = 'block';
        document.getElementById('btnEditarId').style.display = 'block';
        document.getElementById('btnEliminarId').style.display = 'block';
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
      if (doc.data().foto) {
        idPublicacion.innerHTML += ` 
      <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
        <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
        <div id="contenedorIdentidad"> 
          <img id="fotoParticipante" src="${doc.data().fotoperfil}"/>
          <p id="nombreUser">${doc.data().nombre}</p>
        </div>
        <img id="imagenPublicacion" src='${doc.data().foto}'>
        <p id="textoPublicacion"> ${doc.data().post}</p>
        <p id="tipoPublicacion"> ${doc.data().tipo}</p>
        <div id="interacciones">
          <a id="btnCompartir"></a>
          <div class="like ${(doc.data().likes) ? 'heart' : 'heart-2'}"></div>
          <p class="counter-text">${doc.data().likes.length}</p>
          <p class="counter-text">likes</p>
        </div>
        <div id="contenedorBtnEdicion" data-publicacionContenedor='${doc.id}'> 
        <button class="btnEliminar"  id="btnEliminarId"></button> 
        <button class="btnEditar"  id="btnEditarId" ></button>
      
        </div>
      </div>`;
      } else {
        idPublicacion.innerHTML += ` 
        <div id="contenedorPublicacionEditar "data-publicacionEditar='${doc.id}'> 
          <div id="contenedorPublicacion "data-publicacion="${doc.id}" > 
          <div id="contenedorIdentidad"> 
            <img id="fotoParticipante" src="${doc.data().fotoperfil}"/>
            <p id="nombreUser">${doc.data().nombre}</p>
          </div>
          <p id="textoPublicacion"> ${doc.data().post}</p>
          <p id="tipoPublicacion"> ${doc.data().tipo}</p>
          <div id="interacciones">
            <a id="btnCompartir"></a>
            <div class="like ${(doc.data().likes) ? 'heart' : 'heart2'}"></div>
            <p class="counter-text">${doc.data().likes.length}</p>
            <p class="counter-text">likes</p>
          </div>
          <div id="contenedorBtnEdicion" data-publicacionContenedor='${doc.id}'> 
          <button class="btnEliminar"  id="btnEliminarId"></button> 
          <button class="btnEditar"  id="btnEditarId" ></button>
        
          </div>
        </div>`;
      }

      const likes = idPublicacion.querySelector('.like');
      likes.addEventListener('click', () => {
        const usuario = firebase.auth().currentUser;
        const userId = usuario.uid;
        firebase.firestore().collection('publicaciones').doc(`${doc.id}`).get()
          .then(() => {
            const docLikes = doc.data().likes;
            const includesUser = docLikes.includes(userId);
            if (includesUser === true) {
              firebase.firestore().collection('publicaciones').doc(`${doc.id}`).update({
                likes: firebase.firestore.FieldValue.arrayRemove(userId),
              });
              console.log("LIKE SACADO", includesUser);
              console.log(docLikes);
            } else if (includesUser === false) {
              firebase.firestore().collection('publicaciones').doc(`${doc.id}`).update({
                likes: firebase.firestore.FieldValue.arrayUnion(userId),
              });
              console.log("LIKE AGREGADO", userId);
              console.log(docLikes);
            }
          });
      });

      // boton borrar publicaciones
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
    });

    // editar publicacion
    const botonEditar = document.querySelectorAll('#btnEditarId');
    botonEditar.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        window.scrollTo(0, 0);
        let idPublicacion = e.target.parentElement.parentElement.getAttribute('data-publicacion');
        document.getElementById('botonGuardarEdicion').style.display = 'block';
        document.getElementById('btnPublicar').style.display = 'none';
        document.getElementById('btnEditarId').style.display = 'none';
        document.getElementById('btnEliminarId').style.display = 'none';
        editar(idPublicacion);
      });
    });
  });
};

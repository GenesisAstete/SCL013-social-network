// aqui exportaras las funciones que necesites

export const db = firebase.firestore();

export const storage = firebase.storage();

export const enviarCorreo = () => {
  firebase.auth().currentUser.sendEmailVerification().then(() => {
    alert('¡Verificación de correo enviada!');
  });
};

// Usuario loggeado
export const user = () => firebase.auth().currentUser;

// actualizar perfil de usuarios registrados por correo electronico
/* export const updateUserProfile = (nombre, fotoperfil, onSuccess, onError) => {
  const actualUser = firebase.auth().currentUser;
  actualUser.updateProfile({
    displayName: nombre,
    photoURL: fotoperfil,
  }).then((result) => {
    onSuccess(result);
  }).catch((error) => {
    onError(error);
  });
}; */

export const cerrarSesion = () => {
  const btnCerrar = document.querySelector('#btnCerrar');
  btnCerrar.addEventListener('click', () => {
    firebase.auth().signOut();
  });
};

export const eliminar = (id) => {
  db.collection('publicaciones').doc(id).delete().then(() => {
    console.log('Document successfully deleted!');
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

// firebase y archivos
const storage = firebase.storage();

export const uploadImagePost = (file, uid) => {
  const refStorage = storage.ref(`ColeccionImg/${uid}/${file.name}`);
  return refStorage.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};

export const uploadPhotoProfile = (file, uid) => {
  const refStoragePhoto = storage.ref(`imagePhotoProfile/${uid}/${file.name}`);
  return refStoragePhoto.put(file).then(snapshot => snapshot.ref.getDownloadURL());
};


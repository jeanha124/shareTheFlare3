export const getUserPhotos = (state, userID) => {
  let userPhotos = [];
  for (let id in state.entities.photos) {
    if (state.entities.photos[id].user_id === userID) {
      userPhotos.push(state.entities.photos[id]);
    }
  }
  return userPhotos;
};

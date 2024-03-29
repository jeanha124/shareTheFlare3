export const fetchAllPhotos = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/photos'
  });
};

export const fetchPhoto = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (formData) => {
  return $.ajax ({
    method: 'POST',
    url: `api/photos`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updatePhoto = (photo) => {
  return $.ajax ({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: { photo }
  });
};

export const deletePhoto = (photoId) => {
  return $.ajax ({
    method: 'DELETE',
    url: `api/photos/${photoId}`,
  });
};


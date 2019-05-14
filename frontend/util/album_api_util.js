export const fetchAlbums = id => {
  return $.ajax({
    method: 'GET',
    url: `api/albums`,
    data: {
      owner_id: id
    }
  });
};

export const fetchAlbum = id => {
  return $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  });
};

export const createAlbum = formData => {
  return $.ajax({
    method: 'POST',
    url: `api/albums`,
    data: formData,
    processData: false,
    contentType: false
  });
};

export const updateAlbum = (album, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/albums/${id}`,
    data: album,
    processData: false,
    contentType: false,
  });
};

export const deleteAlbum = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/albums/${id}`
  });
};


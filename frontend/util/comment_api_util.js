export const fetchComments = id => {
  return $.ajax({
    method: 'GET',
    url: `api/comments`,
  });
};

export const createComment = (comment, photoID) => {
  return $.ajax({
    method:'POST',
    url: `api/photos/${photoID}/comments`,
    data: comment,
    processData: false,
    contentType: false,
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
  });
};
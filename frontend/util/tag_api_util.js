export const fetchTags = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/tags`,
  });
};

export const createTag = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/tags/${id}`
  });
};

export const deleteTag = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/tag_photos/${id}`
  });
};
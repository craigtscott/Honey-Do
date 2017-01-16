export const fetchAllLists = () => {
  return $.ajax({
    type: 'GET',
    url: 'api/lists'
  });
};

export const fetchList = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/lists/${id}`
  });
};

export const createList = (list) => {
  return $.ajax({
    type: 'POST',
    url: 'api/lists',
    data: { list }
  });
};

export const updateList = (list) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/lists/${list.id}`,
    data: { list }
  });
};

export const deleteList = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/lists/${id}`
  });
};

window.deleteList = deleteList;
window.updateList = updateList;
window.createList= createList;
window.fetchList = fetchList;
window.fetchAllLists = fetchAllLists;

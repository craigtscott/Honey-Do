export const fetchAllTasks = (id) => {
  return $.ajax({
    type: 'GET',
    url: 'api/tasks',
    data: {list_id: id}
  });
};

export const fetchTask = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/tasks/${id}`
  });
};

export const createTask = (task) => {
  return $.ajax({
    type: 'POST',
    url: 'api/tasks',
    data: { task }
  });
};

export const updateTask = (task) => {
  return $.ajax({
    type: 'PATCH',
    url: `api/tasks/${task.id}`,
    data: { task }
  });
};


export const deleteTask = (id) => {
  return $.ajax({
    type: 'DELETE',
    url: `api/tasks/${id}`
  });
};

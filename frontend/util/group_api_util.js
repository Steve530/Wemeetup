export const fetchGroups = () => {
  return $.ajax ({
    method: 'get',
    url: "/api/groups"
  })
};

export const fetchGroup = (id) => {
  return $.ajax({
    method: 'get',
    url: `/api/groups/${id}`
  })
};

export const createGroup = (group) => {
  // debugger
  return $.ajax({
    method: 'post',
    url: `/api/groups`,
    data: {group}
  })
};

export const updateGroup = (group) => {
  debugger
  return $.ajax({
    method: "patch",
    url: `api/groups/${group.get('group[id]')}/edit`,
    data: {group},
    contentType: false,
    processData: false
  })
};

export const deleteGroup = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/groups/${id}`
  })
};
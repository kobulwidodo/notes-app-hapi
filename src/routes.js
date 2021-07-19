const {
  addNoteHandle, getNotesHandle, getNotesByIdHandle, editNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandle,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNotesHandle,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandle,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
];

module.exports = routes;

const { addNoteHandle, getNotesHandle, getNotesByIdHandle } = require('./handler');

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
];

module.exports = routes;

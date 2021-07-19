const { addNoteHandle, getNotesHandle } = require('./handler');

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
];

module.exports = routes;

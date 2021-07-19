const { addNoteHandle } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandle,
  },
];

module.exports = routes;

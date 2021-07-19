const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandle = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString;
  const updatedAt = createdAt;
  const dataNote = {
    id, title, tags, body, createdAt, updatedAt,
  };

  notes.push(dataNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Berhasil menambah note baru!',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal menambah notes baru!',
  });
  response.code(500);
  return response;
};

const getNotesHandle = () => ({
  status: 'success',
  data: {
    notes,
  },
});

const getNotesByIdHandle = (request, h) => {
  const { id } = request.params;

  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = { addNoteHandle, getNotesHandle, getNotesByIdHandle };

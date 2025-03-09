import { base_url, request } from './request';

const postNote = async ({ title, content }) => {
   return request(`${base_url}/notes`, 'POST', {
      title,
      content,
   });
};

const getNotes = () => request(`${base_url}/notes`, 'GET');

const getNotesFavorite = () => request(`${base_url}/notes/favorite`, 'GET');

const patchNote = (id, body) => {
   return request(`${base_url}/notes/${id}`, 'PATCH', {
      ...body,
   });
};

const deleteNote = (id) => request(`${base_url}/notes/${id}`, 'DELETE');

export { deleteNote, getNotes, getNotesFavorite, patchNote, postNote };

import { base_url, request } from './request';

const postRegister = ({ username, email, password }) => {
   return request(`${base_url}/auth/register`, 'POST', {
      username,
      email,
      password,
   });
};

const postLogin = ({ username, password }) => {
   return request(`${base_url}/auth/login`, 'POST', {
      username,
      password,
   });
};

const postLogout = () => {
   return request(`${base_url}/auth/logout`, 'POST');
};

const getAuthenticatedUser = () => {
   return request(`${base_url}/auth/user`, 'GET');
};

const deleteAuthenticatedUser = () => {
   return request(`${base_url}/auth/user`, 'DELETE');
};

export {
   deleteAuthenticatedUser,
   getAuthenticatedUser,
   postLogin,
   postLogout,
   postRegister,
};

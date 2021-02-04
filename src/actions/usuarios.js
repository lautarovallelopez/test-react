export const FETCH_USUARIOS_REQUESTED = 'FETCH_USUARIOS_REQUESTED';
export const fetchUsuariosRequested = () => ({type : FETCH_USUARIOS_REQUESTED});

export const FETCH_USUARIOS_SUCCEEDED = 'FETCH_USUARIOS_SUCCEEDED';
export const fetchUsuariosSucceeded = response => ({type : FETCH_USUARIOS_SUCCEEDED, response});
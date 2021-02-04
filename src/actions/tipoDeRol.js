export const FETCH_TIPO_DE_ROL_REQUESTED = 'FETCH_TIPO_DE_ROL_REQUESTED';
export const fetchTipoDeRolRequested = () => ({type : FETCH_TIPO_DE_ROL_REQUESTED});

export const FETCH_TIPO_DE_ROL_SUCCEEDED = 'FETCH_TIPO_DE_ROL_SUCCEEDED';
export const fetchTipoDeRolSucceeded = response => ({type : FETCH_TIPO_DE_ROL_SUCCEEDED, response});
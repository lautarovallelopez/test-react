export const FETCH_ESTRUCTURA_OPERATIVO_REQUESTED = 'FETCH_ESTRUCTURA_OPERATIVO_REQUESTED';
export const fetchEstructuraOperativoRequested = id_operativo => ({type:FETCH_ESTRUCTURA_OPERATIVO_REQUESTED, id_operativo});

export const FETCH_ESTRUCTURA_OPERATIVO_SUCCEEDED = 'FETCH_ESTRUCTURA_OPERATIVO_SUCCEEDED';
export const fetchEstructuraOperativoSucceeded = response => ({type:FETCH_ESTRUCTURA_OPERATIVO_SUCCEEDED, response});

export const UPDATE_CAMPO = 'UPDATE_CAMPO';
export const updateCampo = updates => ({type:UPDATE_CAMPO, updates});

export const SUBMIT_CAMPO_REQUESTED = 'SUBMIT_CAMPO_REQUESTED';
export const submitCampoRequested = () => ({type:SUBMIT_CAMPO_REQUESTED});

export const SUBMIT_CAMPO_SUCCEEDED = 'SUBMIT_CAMPO_SUCCEEDED';
export const submitCampoSucceeded = response => ({type:SUBMIT_CAMPO_SUCCEEDED, response});

export const FETCH_ONE_CAMPO_REQUESTED = 'FETCH_ONE_CAMPO_REQUESTED';
export const fetchOneCampoRequested = id_estructura => ({type:FETCH_ONE_CAMPO_REQUESTED, id_estructura});

export const FETCH_ONE_CAMPO_SUCCEEDED = 'FETCH_ONE_CAMPO_SUCCEEDED';
export const fetchOneCampoSucceeded = response => ({type:FETCH_ONE_CAMPO_SUCCEEDED, response});
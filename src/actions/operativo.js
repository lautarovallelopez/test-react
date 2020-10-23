export const FETCH_OPERATIVOS_REQUESTED = 'FETCH_OPERATIVOS_REQUESTED';
export const fetchOperativosRequested = () => ({type: FETCH_OPERATIVOS_REQUESTED});

export const FETCH_OPERATIVOS_SUCCEEDED = 'FETCH_OPERATIVOS_SUCCEEDED';
export const fetchOperativosSucceeded = result => ({type: FETCH_OPERATIVOS_SUCCEEDED, result});

export const UPDATE_OPERATIVO = 'UPDATE_OPERATIVO';
export const updateOperativo = change => ({type:UPDATE_OPERATIVO, change});
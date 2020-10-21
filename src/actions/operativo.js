export const FETCH_OPERATIVOS_REQUESTED = 'FETCH_OPERATIVOS_REQUESTED';
export const FETCH_OPERATIVOS_SUCCEEDED = 'FETCH_OPERATIVOS_SUCCEEDED';

export const fetchOperativosRequested = () => ({type: FETCH_OPERATIVOS_REQUESTED});
export const fetchOperativosSucceeded = operativos => ({type: FETCH_OPERATIVOS_SUCCEEDED, operativos});

export const FETCH_OPERATIVOS_REQUESTED = 'FETCH_OPERATIVOS_REQUESTED';
export const fetchOperativosRequested = () => ({type: FETCH_OPERATIVOS_REQUESTED});

export const FETCH_OPERATIVOS_SUCCEEDED = 'FETCH_OPERATIVOS_SUCCEEDED';
export const fetchOperativosSucceeded = result => ({type: FETCH_OPERATIVOS_SUCCEEDED, result});

export const UPDATE_OPERATIVO = 'UPDATE_OPERATIVO';
export const updateOperativo = change => ({type:UPDATE_OPERATIVO, change});

export const SUBMIT_OPERATIVO_REQUESTED = 'SUBMIT_OPERATIVO_REQUESTED';
export const submitOperativoRequested = ()=>({type: SUBMIT_OPERATIVO_REQUESTED})

export const SUBMIT_OPERATIVO_SUCCEEDED = 'SUBMIT_OPERATIVO_SUCCEEDED';
export const submitOperativoSucceeded = response => ({type: SUBMIT_OPERATIVO_SUCCEEDED, response});

export const FETCH_ONE_OPERATIVO_REQUESTED = 'FETCH_ONE_OPERATIVO_REQUESTED';
export const fetchOneOperativoRequested = id => ({type:FETCH_ONE_OPERATIVO_REQUESTED, id});

export const FETCH_ONE_OPERATIVO_SUCCEEDED = 'FETCH_ONE_OPERATIVO_SUCCEEDED';
export const fetchOneOperativoSucceeded = operativo => ({type:FETCH_ONE_OPERATIVO_SUCCEEDED, operativo});
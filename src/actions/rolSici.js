export const FETCH_ROLES_SICI_REQUESTED = 'FETCH_ROLES_SICI_REQUESTED';
export const fetchRolesSiciRequested = () => ({type : FETCH_ROLES_SICI_REQUESTED});

export const FETCH_ROLES_SICI_SUCCEEDED = 'FETCH_ROLES_SICI_SUCCEEDED';
export const fetchRolesSiciSucceeded = response => ({type : FETCH_ROLES_SICI_SUCCEEDED, response});

export const UPDATE_ROL_SICI = 'UPDATE_ROL_SICI';
export const updateRolSici = updates => ({type : UPDATE_ROL_SICI, updates});

export const FETCH_ONE_ROL_SICI_REQUESTED = 'FETCH_ONE_ROL_SICI_REQUESTED';
export const fetchOneRolSiciRequested = id_rol_sici => ({type : FETCH_ONE_ROL_SICI_REQUESTED, id_rol_sici});

export const FETCH_ONE_ROL_SICI_SUCCEEDED = 'FETCH_ONE_ROL_SICI_SUCCEEDED';
export const fetchOneRolSiciSucceeded = rol => ({type : FETCH_ONE_ROL_SICI_SUCCEEDED, rol});

export const SUBMIT_ROL_SICI_REQUESTED = 'SUBMIT_ROL_SICI_REQUESTED';
export const submitRolSiciRequested = rol =>({type : SUBMIT_ROL_SICI_REQUESTED, rol});

export const SUBMIT_ROL_SICI_SUCCEEDED = 'SUBMIT_ROL_SICI_SUCCEEDED';
export const submitRolSiciSucceeded = response => ({type : SUBMIT_ROL_SICI_SUCCEEDED, response});
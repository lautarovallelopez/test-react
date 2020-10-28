export const FETCH_OPTIONS_REQUESTED = 'FETCH_OPTIONS_REQUESTED';
export const fetchOptionsRequested = () => ({type:FETCH_OPTIONS_REQUESTED});

export const FETCH_OPTIONS_SUCCEEDED = 'FETCH_OPTIONS_SUCCEEDED';
export const fetchOptionsSucceeded = options => ({type:FETCH_OPTIONS_SUCCEEDED, options});
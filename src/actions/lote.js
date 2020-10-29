export const FETCH_LOTES_REQUESTED = 'FETCH_LOTES_REQUESTED';
export const fetchLotesRequested = id_operativo => ({type : FETCH_LOTES_REQUESTED, id_operativo});

export const FETCH_LOTES_SUCCEEDED = 'FETCH_LOTES_SUCCEEDED';
export const fetchLotesSucceeded = lotes => ({type : FETCH_LOTES_SUCCEEDED, lotes});

export const UPDATE_LOTE = 'UPDATE_LOTE';
export const updateLote = updates => ({type : UPDATE_LOTE, updates});

export const FETCH_ONE_LOTE_REQUESTED = 'FETCH_ONE_LOTE_REQUESTED';
export const fetchOneLoteRequested = id_lote => ({type : FETCH_ONE_LOTE_REQUESTED, id_lote});

export const FETCH_ONE_LOTE_SUCCEEDED = 'FETCH_ONE_LOTE_SUCCEEDED';
export const fetchOneLoteSucceeded = loteActual => ({type : FETCH_ONE_LOTE_SUCCEEDED, loteActual});

export const SUBMIT_LOTE_REQUESTED = 'SUBMIT_LOTE_REQUESTED';
export const submitLoteRequested = (file={})=>({type : SUBMIT_LOTE_REQUESTED, file});

export const SUBMIT_LOTE_SUCCEEDED = 'SUBMIT_LOTE_SUCCEEDED';
export const submitLoteSucceeded = response => ({type : SUBMIT_LOTE_SUCCEEDED, response});
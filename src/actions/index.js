import constant from 'lodash/constant';

export const SUBMIT_ACTION = 'SUBMIT_ACTION';
export const submitAction = (email, password) => ({type: SUBMIT_ACTION, email, password});

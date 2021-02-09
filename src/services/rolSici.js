import Http from './http';
import queryString from 'query-string';
class RolSici {
    static fetch() {
        return Http.get('api/rolSici');
    }
    static delete(ids){
        return Http.delete(`api/rolSici?${queryString.stringify(ids)}`);
    }
    static fetchOne(ids) {
        return Http.get(`api/rolSici?${queryString.stringify(ids)}`);
    }
    static submit(rolSici){
        if(rolSici.FECHA_ALTA){
            delete rolSici.FECHA_ALTA;
            return Http.put(`api/rolSici?${queryString.stringify({
                ID_USUARIO:rolSici.ID_USUARIO,
                ID_ROL_USUARIO: rolSici.ID_ROL_USUARIO
            })}`, rolSici);
        }else{
            return Http.post(`api/rolSici`, rolSici);
        }
    }
}

export default RolSici;
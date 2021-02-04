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
    /*static fetchOne(id){
        return Http.get(`api/operativo/${id}`)
    }
    static submit(operativo){
        if(operativo.id_operativo){
            return Http.put(`api/operativo/${operativo.id_operativo}`, operativo);
        }else{
            return Http.post(`api/operativo`, operativo);
        }
    }*/
}

export default RolSici;
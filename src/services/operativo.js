import Http from './http';

class Operativo {
    static fetch() {
        return Http.get('api/operativo');
    }
    static fetchOne(id){
        return Http.get(`api/operativo/${id}`)
    }
    static submit(operativo){
        if(operativo.id_operativo){
            return Http.put(`api/operativo/${operativo.id_operativo}`, operativo);
        }else{
            return Http.post(`api/operativo`, operativo);
        }
    }
}

export default Operativo;

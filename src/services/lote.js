import Http from './http';

class Lote{
    static apiCall(id_operativo){
        return Http.get(`api/lote?id_operativo=${id_operativo}`);
    }
    static apiCallOne(id_lote){
        return Http.get(`api/lote?id_lote=${id_lote}`);
    }
    static apiSave(loteActual){
        return Http.postFile(`api/lote`, loteActual)
    }
}

export default Lote;
import Http from './http';

class EstructuraOperativo{
    static fetch(id_operativo){
        return Http.get(`api/estructuraOperativo?id_operativo=${id_operativo}`)
    }
    static save(campo){
        return Http.post('api/estructuraOperativo', campo)
    }
    static fetchOne(id_estructura){
        return Http.get(`api/estructuraOperativo?id_estructura=${id_estructura}`)
    }
}

export default EstructuraOperativo;
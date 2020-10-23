import Http from './http';

class Operativo {
    static async fetch() {
        const {operativos} = await Http.get('api/operativo');
        const {estadosOperativos} = await Http.get('api/estadoOperativo?column=id_estado_operativo&column=descripcion');
        return {operativos, estadosOperativos};
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

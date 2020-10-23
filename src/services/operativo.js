import Http from './http';

class Operativo {
    static async fetch() {
        const {operativos} = await Http.get('api/operativo');
        const {estadosOperativos} = await Http.get('api/estadoOperativo?column=id_estado_operativo&column=descripcion');
        return {operativos, estadosOperativos};
    }
}

export default Operativo;

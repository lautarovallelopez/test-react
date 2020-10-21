import Http from './http';

class Operativo {
    static fetch() {
        return Http.get('api/operativo');
    }
}

export default Operativo;

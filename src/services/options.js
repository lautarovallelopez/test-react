import Http from './http';

class Operativo {
    static fetch() {
        console.log('Options Service');
        return Http.get('api/options');
    }
}

export default Operativo;

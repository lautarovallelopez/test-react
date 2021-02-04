import Http from './http';
class TipoDeRol {
    static fetch() {
        return Http.get('api/tipoDeRol');
    }
}
export default TipoDeRol;
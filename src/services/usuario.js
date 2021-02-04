import Http from './http';
class Usuario {
    static fetch() {
        return Http.get('api/usuario');
    }
}
export default Usuario;
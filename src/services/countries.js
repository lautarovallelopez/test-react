import Http from './http';

class Countries {
    static fetch() {
        return Http.get('api/countries');
    }
}

export default Countries;

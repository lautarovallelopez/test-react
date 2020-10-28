import Http from './http';

class File {
    static send(file){
        return Http.postFile('api/file', file);
    }
}

export default File;
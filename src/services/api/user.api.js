import request from 'services/utils/request';

let root = 'http://jsonplaceholder.typicode.com/';

class UserApi {

    static fetchAll() {
        return request.get(root + 'users');
    }
}

export default UserApi;

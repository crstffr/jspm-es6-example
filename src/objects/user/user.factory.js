import User from 'objects/user/user.model';
import UserApi from 'services/api/user.api';

let _users = {};

class UserFactory {

    constructor() {
        this.rand = Math.random();
    }

    get users() {
        return _users
    }

    set users(val) {
        _users = val;
    }

    /**
     *
     * @param userArr
     * @returns {Array}
     */
    collect(userArr) {

        let users = _users;

        return userArr.map(function(data) {

            if (!users[data.id]) {
                users[data.id] = new User(data);
            }

            return users[data.id];

        });

    }

    /**
     *
     * @returns {Promise}
     */
    fetchAll() {

        let collect = this.collect.bind(this);

        return UserApi.fetchAll().then(function(response) {

            return collect(response.body);

        }).catch(function(error) {

            console.error(error);

        });


    }

}

export default new UserFactory();

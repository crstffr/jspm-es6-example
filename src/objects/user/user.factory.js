import User from 'objects/user/user.model';
import UserApi from 'services/api/user.api';


class UserFactory {

    constructor() {
        this.rand = Math.random();
        this.users = {};
    }

    /**
     *
     * @param userArr
     * @returns {Array}
     */
    collect(userArr) {

        let users = this.users;

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

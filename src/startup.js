import 'foundation-apps/dist/css/foundation-apps.css!';

import userFactory from 'objects/user/user.factory';

userFactory.fetchAll().then(function(users) {
    console.log(userFactory, userFactory.users);
    users.forEach(user => user.sayHello());
    users.forEach(user => console.log(user.id, user['Symbol(id)']));
});


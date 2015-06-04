import 'foundation-apps/dist/css/foundation-apps.css!';

import userFactory from 'objects/user/user.factory';

userFactory.fetchAll().then(users => console.log(userFactory));


import 'foundation-apps/dist/css/foundation-apps.css!';

import userFactory from 'objects/user/user.factory';

userFactory.fetchAll().then(users => console.log(userFactory));


import moreUsers from 'objects/user/user.factory';

moreUsers.fetchAll().then(users => console.log(moreUsers));

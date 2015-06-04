
import promise from 'promise';
import superagent from 'superagent';
import superpromise from 'superagent-promise';

export default superpromise(superagent, promise);

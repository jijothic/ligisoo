import morgan from 'morgan';

import { isDev } from '../constants';

export default app => {
    app.use(morgan(isDev ? 'dev' : 'common'));
}
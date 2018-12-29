import { Express } from "express";

import middlewaresConfig from './config/middleware';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('server is running on port 3000');
    }
});
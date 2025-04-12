import express from 'express';
import { serverConfig }from './config';
import v1Router from  './routers/v1/index.router';
const app = express();


/**
 * Registering all the router and their corresponding routes without app server object.
 */
app.use('/api/v1', v1Router);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
    console.log('Press Ctlr + C to stop the server');
});
import express from 'express';
import { serverConfig }from './config';
import v1Router from  './routers/v1/index.router';
import v2Router from  './routers/v2/index.router';
import { genericErrorHandler } from './middlewares/error.middleware';
const app = express();


app.use(express.json());

/**
 * Registering all the router and their corresponding routes without app server object.
 */
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);


// After all the routing Middlewares are handled, we can add the error handler middleware
/**
 * Add the error handler middleware
 */
app.use(genericErrorHandler);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is Running on PORT ${serverConfig.PORT}`);
    console.log('Press Ctlr + C to stop the server.');
});
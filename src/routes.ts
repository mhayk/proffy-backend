import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionControllers = new ConnectionController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.get('/connections', connectionControllers.index);
routes.post('/connections', connectionControllers.create);

export default routes;
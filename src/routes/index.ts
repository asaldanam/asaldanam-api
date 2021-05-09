import { Router } from 'express';
import { checkStatus } from './Health';


const health = Router();
health.get('/check', checkStatus);

// User-route
// const userRouter = Router();
// userRouter.get('/all', getAllUsers);
// userRouter.post('/add', addOneUser);
// userRouter.put('/update', updateOneUser);
// userRouter.delete('/delete/:id', deleteOneUser);


// Export the base-router
const baseRouter = Router();
// baseRouter.use('/users', userRouter);
baseRouter.use('/health', health);
export default baseRouter;

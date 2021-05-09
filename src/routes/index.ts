import { Router } from 'express';
import { getVitalCheck } from './VitalCheck';


const vitalCheckRouter = Router();
vitalCheckRouter.get('/', getVitalCheck);

// User-route
// const userRouter = Router();
// userRouter.get('/all', getAllUsers);
// userRouter.post('/add', addOneUser);
// userRouter.put('/update', updateOneUser);
// userRouter.delete('/delete/:id', deleteOneUser);


// Export the base-router
const baseRouter = Router();
// baseRouter.use('/users', userRouter);
baseRouter.use('/vital-check', vitalCheckRouter);
export default baseRouter;

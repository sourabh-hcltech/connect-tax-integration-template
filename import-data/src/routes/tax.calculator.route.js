import { Router } from 'express';

import { taxHandler } from '../controllers/tax.calculator.controller.js';

import { helloworld } from '../controllers/tax.calculator.controller.js';

const taxCalculatorRouter = Router();

taxCalculatorRouter.post('/taxCalculator', taxHandler);

taxCalculatorRouter.get('/hello', helloworld);

export default taxCalculatorRouter;

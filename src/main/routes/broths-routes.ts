import { Router } from 'express';
import { adaptRoute } from '../adapter/express-adapter';
import { BrothsController } from '../../presentation/controllers/broths-controller';

export default (router: Router): void => {
  const controller = new BrothsController();
  router.post('/broths', adaptRoute(controller));
};

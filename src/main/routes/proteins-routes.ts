import { Router } from 'express';
import { adaptRoute } from '../adapter/express-adapter';
import { ProteinsController } from '../../presentation/controllers/proteins-controller';

export default (router: Router): void => {
  const controller = new ProteinsController();
  router.post('/proteins', adaptRoute(controller));
};

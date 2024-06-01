import { Router } from 'express';
import { adaptRoute } from '../adapter/express-adapter';
import { OrdersController } from '../../presentation/controllers/orders-controller';

export default (router: Router): void => {
  const controller = new OrdersController();
  router.post('/orders', adaptRoute(controller));
};

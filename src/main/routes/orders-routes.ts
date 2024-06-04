import { Router } from 'express';
import { adaptRoute } from '../adapter/express-adapter';
import { CreateOrderUC } from '../../domain/usecases/create-order';
import { OrderController } from '../../presentation/controllers/orders-controller';

export default (router: Router): void => {
  const createOrderUC = new CreateOrderUC();
  const controller = new OrderController(createOrderUC);

  router.post('/orders', adaptRoute(controller));
};

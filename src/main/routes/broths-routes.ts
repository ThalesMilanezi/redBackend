import { Router } from 'express';
import { adaptRoute } from '../adapter/express-adapter';
import { BrothsController } from '../../presentation/controllers/broths-controller';
import { PgBrothRepository } from '../../infra/repositories/broth.repository';
import { GetAllBrothsUC } from '../../domain/usecases/get-all-broths';
import { PgConnection } from '../../infra/repositories/connection';

export default (router: Router): void => {
  const connectionInstance = PgConnection.getInstance();
  const brothRepository = new PgBrothRepository(connectionInstance);
  const getAllBrothsUC = new GetAllBrothsUC(brothRepository);
  const controller = new BrothsController(getAllBrothsUC);

  router.get('/broths', adaptRoute(controller));
};

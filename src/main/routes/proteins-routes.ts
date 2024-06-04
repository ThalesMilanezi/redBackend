import { Router } from 'express';
import { adaptRoute } from '../adapter/express-adapter';
import { ProteinsController } from '../../presentation/controllers/proteins-controller';
import { PgProteinRepository } from '../../infra/repositories/protein.repository';
import { GetAllProteinsUC } from '../../domain/usecases/get-all-proteins';
import { PgConnection } from '../../infra/repositories/connection';

export default (router: Router): void => {
  const connectionInstance = PgConnection.getInstance();
  const proteinRepository = new PgProteinRepository(connectionInstance);
  const getAllProteinsUC = new GetAllProteinsUC(proteinRepository);
  const controller = new ProteinsController(getAllProteinsUC);

  router.get('/proteins', adaptRoute(controller));
};

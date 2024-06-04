import { GetAllBrothsUC } from '../../domain/usecases/get-all-broths';
import { ok, serverError } from '../helpers/http-helper';
import { HttpResponse } from '../protocols/http';

export class BrothsController {
  private readonly getAllBrothsUC: GetAllBrothsUC;

  constructor(getAllBrothsUC: GetAllBrothsUC) {
    this.getAllBrothsUC = getAllBrothsUC;
  }

  async handle(): Promise<HttpResponse> {
    try {
      const broths = await this.getAllBrothsUC.execute();
      return ok(broths);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}

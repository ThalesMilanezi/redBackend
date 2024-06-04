import { GetAllProteinsUC } from '../../domain/usecases/get-all-proteins';
import { ok, serverError } from '../helpers/http-helper';
import { HttpResponse } from '../protocols/http';

export class ProteinsController {
  private readonly getAllProteins: GetAllProteinsUC;

  constructor(getAllProteinsUC: GetAllProteinsUC) {
    this.getAllProteins = getAllProteinsUC;
  }

  async handle(): Promise<HttpResponse> {
    try {
      const proteins = await this.getAllProteins.execute();
      return ok(proteins);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}

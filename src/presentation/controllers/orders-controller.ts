import { ok, serverError } from '../helpers/http-helper';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class OrdersController {
  constructor() {}
  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      return ok([]);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}

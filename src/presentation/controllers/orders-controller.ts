import { HttpRequest, HttpResponse } from '../protocols/http';
import { CreateOrderUC } from '../../domain/usecases/create-order';
import { ok, serverError } from '../helpers/http-helper';
import { OrderRequest } from '../../domain/contracts/order';

export class OrderController {
  private readonly createOrderUC: CreateOrderUC;

  constructor(createOrderUC: CreateOrderUC) {
    this.createOrderUC = createOrderUC;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const request: OrderRequest = httpRequest.body;
      const order = await this.createOrderUC.execute(request);
      return ok(order);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}

import { BaseUseCase } from '../contracts/base-usecase';
import { OrderRequest, OrderResponse } from '../contracts/order';

import axios from 'axios';

export class CreateOrderUC extends BaseUseCase<OrderRequest, OrderResponse> {
  private readonly apiUrl: string = process.env.API_URL;
  private readonly apiKey: string = process.env.API_KEY;

  constructor() {
    super();
  }

  public async execute(request: OrderRequest): Promise<OrderResponse> {
    try {
      console.log(
        `[CreateOrder] Creating order attempt with brothId: ${request.brothId} and proteinId: ${request.proteinId}`,
      );

      const response = await axios.post(
        this.apiUrl,
        {
          brothId: request.brothId,
          proteinId: request.proteinId,
        },
        {
          headers: {
            'x-api-key': this.apiKey,
          },
        },
      );

      if (!response.data || !response.data.orderId) {
        throw new Error('Order creation failed!');
      }

      return { orderId: response.data.orderId };
    } catch (error) {
      console.error(`[CreateOrder] Error: ${error.message}`);
      throw error;
    }
  }
}

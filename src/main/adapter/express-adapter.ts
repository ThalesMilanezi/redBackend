import { Request, Response } from 'express';

export interface HttpResponse {
  statusCode: number;
  body: any;
}

export interface HttpRequest {
  body?: any;
  params?: any;
  query?: any;
  headers?: any;
}

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };
    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};

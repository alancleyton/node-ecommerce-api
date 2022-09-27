import { Request, Response } from 'express';

export class ProductController {
  create(httpRequest: Request, httpResponse: Response): Response {
    const product = httpRequest.body;
    return httpResponse.status(201).json({ product });
  }
}

import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const attachCorrelationIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Generate a new correlation ID
  const correlationId = uuidv4();
  //Optionally, you can also attach it to the response headers
  req.headers["x-Correlation-Id"] = correlationId;
  console.log("Id attached to the request", req.headers["x-Correlation-Id"]);
  next();
};

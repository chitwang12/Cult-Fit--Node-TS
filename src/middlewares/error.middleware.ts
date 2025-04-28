import { NextFunction, Request , Response } from "express";

export const genericErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(501).json({
        message: "Internal Server Error",
        success: false,
        error: err.message,
    });
}
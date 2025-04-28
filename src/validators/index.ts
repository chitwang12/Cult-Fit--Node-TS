import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

/**
 * 
 * @param schema - Zod schema to validate the request body
 * @returns - Middlware function to validate the request body
 */
export const validateRequestBody = (schema : AnyZodObject) => {
    return async (req: Request, res:Response, next: NextFunction) => {
        try {

            console.log("Request body:", req.body);
            await schema.parseAsync(req.body);
            console.log("Request body is valid");
            next();
        
        } catch (error) {

            console.error("Validation Error:", error);
            //If Valdiation fails 
             res.status(400).json({
                message:"Invalid request body",
                success: false,
                error:error
            })
        }
    }
}


/**
 * 
 * @param schema - Zod schema to validate the request params
 * @returns - Middlware function to validate the request params
 */
export const validateQueryParams = (schema: AnyZodObject) => {
    return async(req: Request, res: Response, next: NextFunction) => {
        try {
            
            await schema.parseAsync(req.query);
            console.log("Query Params are valid!!!!");
            next();
        } catch (error) {
            
            res.status(400).json({
                messsage:'Invalid query params',
                success: false,
                error: error
            });
        }
    }
}
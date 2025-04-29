import { Request, Response, NextFunction} from "express";
import fs from "fs/promises";
import { NotFoundError } from "../utils/errors/app.error";

export const pingHandler = async (req: Request, res: Response, next:NextFunction) => {
        try {
            await fs.readFile('Sample.txt');
               res.status(200).json({
                 message:"Pong",
              success: true,
                });
        } catch (error) {
           throw new NotFoundError("File not found");
        }
 
}
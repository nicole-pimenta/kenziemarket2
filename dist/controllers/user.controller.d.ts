import { Request, Response, NextFunction } from "express";
export declare const create: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const list: (req: Request, res: Response) => Promise<void>;
export declare const listById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const currentUser: (req: Request, res: Response) => Promise<void>;

import { Request, Response } from "express";
export declare const create: (req: Request, res: Response) => Promise<void>;
export declare const list: (req: Request, res: Response) => Promise<void>;
export declare const listById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;

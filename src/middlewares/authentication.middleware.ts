import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      //sconsole.log(token);
      if (token == undefined) {
        return res.status(401).json({ error: "Missing authorization headers" });
      } else {
        console.log(token);

        const userId = decoded.id;

        //console.log(req.user);
        req.user = { uuid: userId };

        next();
      }
    }
  );
};

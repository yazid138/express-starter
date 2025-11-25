import UnauthorizedException from "@/exception/UnauthorizedException";
import passport from "passport";
import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";

export default (req: Request, res: Response, next: NextFunction) =>
  passport.authenticate("jwt", (err: boolean, user?: User) => {
    try {
      if (err || !user) throw new UnauthorizedException();
      req.user = user;
      next();
    } catch (err) {
      next(err);
    }
  })(req, res, next);

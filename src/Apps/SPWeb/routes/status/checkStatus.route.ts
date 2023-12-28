import { NextFunction, Router, Request, Response } from "express";
import { IController } from "../../controllers/IController";
import { container } from "../../IoC";
import CheckStatusController from "../../controllers/status/CheckStatusController";

export const register = (router: Router): void => {
	
    const controller: IController = container.resolve(CheckStatusController);
   
    router.get(
        "/status",
        (req: Request, res: Response, next: NextFunction) => {
           controller.run(req, res, next);
        }
    );
};
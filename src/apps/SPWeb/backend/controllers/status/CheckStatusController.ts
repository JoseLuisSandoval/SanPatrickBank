import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { IController } from '../IController';
import { injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export default class StatusGetController implements IController {
	run(req: Request, res: Response): void {
		res.status(httpStatus.OK).send();
	}

    
}
import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

const { OK } = StatusCodes;

export function getVitalCheck(req: Request, res: Response) {
  res.status(OK).json({ status: 'All green' });
}


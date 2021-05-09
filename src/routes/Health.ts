import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';

const { OK } = StatusCodes;

export function checkStatus(req: Request, res: Response) {
  res.status(OK).json({ 
    status: 'All green',
    env: process.env,
  });
}


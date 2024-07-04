import { Request, Response, NextFunction } from 'express';
import zod from 'zod';
import { StatusCodes } from '../../config';

const deleteCardInputSchema = zod.object({
    id: zod.number({message: "Id should be a number."})
})

const deleteCardInputValidation = (req: Request, res: Response, next: NextFunction): (void | Response<string>) => {
    const body = req.body;

    const zodResponse = deleteCardInputSchema.safeParse(body);

    if(!zodResponse.success){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: zodResponse.error.issues[0].message
        })
    }

    return next();
}

export default deleteCardInputValidation;
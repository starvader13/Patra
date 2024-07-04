import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../../config";
import zod from 'zod';

const createCardInputSchema = zod.object({
    name: zod.string({message: "Name is required and should be a valid string"}).min(4, {message: "Name should be minimum of 4 characters"}).max(50, {message: "Name should be maximum of 50 characters"}),
    description: zod.string({message: "Description is required amd should be a valid string"}).max(250, {message: "Description could not be more than 250 words"}),
    age: zod.number({message: "Age should be a number"}).min(10, {message: "Age should be in the range of 10-90"}).max(90, {message: "Age should be in the range of 10-90"}).optional(),
    mailTo: zod.string({message: "Mail should be a string"}).email({message: "Email should be valid"}).optional(),
    imageUrl: zod.string({message: "Image URL should be a string"}).url({message: "Image Url should be a valid URL"}).startsWith("https://", {message: "Should start with https://"}),
    linkedin: zod.string({message: "Linkedin should be a string"}).url({message: "Linekdin should be a valid URL"}).startsWith("https://www.linkedin.com", {message: "Should start with https://www.linkedin.com"}).optional(),
    twitter: zod.string({message: "Twitter should be a string"}).url({message: "Twitter should be a valid URL"}).startsWith("https://x.com", {message: "Should start with https://x.com"}).optional(),
    customURL: zod.string({message: "Custom URL should be a string"}).url({message: "Custom URL should be a valid URL"}).optional(),
    hobbies: zod.string({message: "Hobbies should be a string"}).optional(),
}).strict();

const createCardInputValidation = async (req: Request, res: Response, next: NextFunction) => {
   const body = req.body;
   const zodResponse = createCardInputSchema.safeParse(body);

   console.log("hello")

   if(!zodResponse.success){
    return res.status(StatusCodes.BAD_REQUEST).json({
        message: zodResponse.error.issues[0].message
    })
}

return next();
}

export default createCardInputValidation;
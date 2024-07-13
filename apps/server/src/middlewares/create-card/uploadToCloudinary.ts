import {Request, Response, NextFunction} from "express";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { StatusCodes } from "../../config";
dotenv.config();

const CLOUD_NAME=process.env.CLOUDINARY_CLOUD_NAME
const API_KEY=process.env.CLOUDINARY_API_KEY
const API_SECRET=process.env.CLOUDINARY_API_SECRET

const uploadToCloudinary = async (req: Request, res: Response, next: NextFunction) => {

    try {
        cloudinary.config({ 
            cloud_name: CLOUD_NAME, 
            api_key: API_KEY, 
            api_secret: API_SECRET
        });

        const response = await cloudinary.uploader.upload(req.body.imageUrl, {
            folder: "/patra",
        })

        req.body.imageUrl = response.secure_url;
        return next();
    }catch(error:any){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Error In Uploading File",
            error: error
        })
    }
}

export default uploadToCloudinary;
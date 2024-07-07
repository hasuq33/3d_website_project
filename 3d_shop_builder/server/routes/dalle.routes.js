import express from "express";
import * as dotenv from "dotenv";
import  { OpenAI } from "openai"

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})
const router = express.Router();

router.route('/').get((req , res) =>{
    res.status(200).json({message: "Hello From OpenAI Routes "})
})

router.route('/').post(async (req , res ) =>{
    try {
        const { prompt } = req.body;

        const responde = await openai.images.generate({
            model:"dall-e-2",
            prompt: prompt, 
            n:1, 
            size:"1024x1024",
        })

        const image = responde.data[0].url;
        res.status(200).json({photo: image})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"})
    }
})

export default router;

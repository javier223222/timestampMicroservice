
import { Request,Response } from "express";
import express from 'express';
import DataService from "../services/DataService";
const router=express.Router();



export default class DateController {
    constructor(private readonly dataService: DataService) {
        router.get("/:date",async(req:Request,res:Response)=>{
            const {date}=req.params;
            const result=await this.dataService.proccess(date);
            return res.status(200).json(result);
        });
    }
    public getRouter(){
        return router;
    }
    


}
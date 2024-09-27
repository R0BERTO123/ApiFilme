import {salvarfilme} from "../repository/filmeRepository.js";
import { Router } from "express";
const endpoints = Router()


endpoints.post('/filmes', async (req,resp)=>{

    let filmeobjeto = req.body;

    let id = await salvarfilme(filmeobjeto);
    resp.send({
        id: id
    })


})


export default endpoints;
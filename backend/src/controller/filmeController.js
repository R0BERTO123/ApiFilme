import {salvarfilme} from "../repository/filmeRepository.js";
import { Router } from "express";
import '../utils/global.js'
import salvarfilmeService from "../service/filme/salvarfilmeService.js";
import { Consultarfilmes } from "../repository/filmeRepository.js";
import ConsultarfilmesService from "../service/filme/consultarService.js";

const endpoints = Router()


endpoints.post('/filmes', async (req,resp)=>{
try {

    let filmeobjeto = req.body;

    let id = await salvarfilmeService(filmeobjeto)
    resp.send({
        id: id
    })
    
} catch (err) {
    logErro(err)
    resp.status(400).send(criarErro(err))
    
}
 


})


endpoints.get('/filmes', async (req,resp)=>{
    try {

        let nome = req.query.nome
        let registros= await ConsultarfilmesService (nome)
        resp.send (registros)
        
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

export default endpoints;
import {salvarfilme} from "../repository/filmeRepository.js";
import { Router } from "express";
import '../utils/global.js'
import salvarfilmeService from "../service/salvarfilmeService.js";
import { Consultarfilmes } from "../repository/filmeRepository.js";
import ConsultarfilmesService from "../service/consultarService.js";


const endpoints = Router()

import * as db from '../repository/filmeRepository.js';


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

        let id = req.query.id
        let registros= await ConsultarfilmesService (id)
        resp.send (registros)
        
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))
    }
})

endpoints.put('/Afilmes/:id', async (req, resp) => {

    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.AlterarFilme(id, pessoa);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/Dfilme/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarFilmee(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
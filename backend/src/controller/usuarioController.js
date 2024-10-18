import cors from "cors";
import { inserirUsuario, validarUsuario } from "../repository/usuarioRepository.js";
import { Router } from "express";
const endpoints= Router()

import { gerarToken } from "../utils/jwt.js";

import * as db from '../repository/usuarioRepository.js';

endpoints.post ('/usuario',async(req,resp)=>{

    let usuarioObjeto= req.body

    let id= await inserirUsuario(usuarioObjeto)
    resp.send({
        id:id
    })
})
endpoints.post ('/entrar', async(req,resp)=>{

    let pessoa = req.body;

        let usuario = await db.validarUsuario(pessoa)
        
        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            resp.send({
                "token": token
            })
        }
      
})

export default endpoints
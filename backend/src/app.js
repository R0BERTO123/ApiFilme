import express from 'express';
import cors from 'cors';
//import dotenv from 'dotenv';
import filmeController from './controller/filmeController.js';
import usuarioController from './controller/usuarioController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(filmeController);
servidor.use(usuarioController)

import './repository/connection.js'


const PORTA = process.env.PORTA|| 5001
servidor.listen(PORTA,()=>console.log("SUUUBIUU"))
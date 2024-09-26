import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const servidor = express()
servidor.use(cors())
servidor.use(express.json())

import './repository/connection.js'


const PORTA = process.env.PORTA
servidor.listen(PORTA,()=>console.log("SUUUBIUU"))
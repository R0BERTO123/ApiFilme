import './index.scss';

import axios from 'axios'
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

export default function Consultar(){

    const[filme,setFilme]=useState("")
const[sinopse,setSinppse]=useState("")
const [avaliacao,setAvaliacao]=useState("")
const[lancamento,setLancamento]=useState("")
const [disponivel,setDisponivel]=useState(false)
const [imagem,setImagem]=useState(null)

const navigate = useNavigate()

//const { id } = useParams();

async function salvar() {
    let paramCorpo = {
        "filme": filme,
        "sinopse": sinopse,
        "avaliacao": avaliacao,
        "lancamento": lancamento,
        "disponivel": disponivel,
        "imagem": imagem
    }
      
       

    }

    

    return(
        
   
   <div className='pagina-cadastrar'>
            <button><Link to={'/'}>Voltar</Link></button>
            


            <div className='form'>
                <div>
                    <label>filme:</label>
                    <input type='text'value={filme}onChange={e=>setFilme(e.target.value)}  />
                </div>
                <div>
                    <label>Sinopse:</label>
                    <input type='text' value={sinopse} onChange={e=>setSinppse(e.target.value)} />
                </div>
                <div>
                    <label>Avaliacao:</label>
                    <input type='text' value={avaliacao} onChange={e=>setAvaliacao(e.target.value)} />
                </div>
                <div>
                    <label>lancamento</label>
                    <input type='date' value={lancamento} onChange={e=>setLancamento(e.target.value)} />
                </div>
                <div>
                    <label>disponivel:</label>
                    <input type='checkbox' value={disponivel}  onChange={e=>setDisponivel(e.target.checked)}/>
                </div>
                <div>
                    <img src={imagem}/>
                    <input type='file' accept='image/*'  onChange={e=> setImagem}/>
                </div>
            </div>
            <button > SALVAR </button>


        </div>
    )
    }
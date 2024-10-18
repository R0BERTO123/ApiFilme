
import './App.scss';

import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function App() {

  const[nome,setNome]=useState("")
  const[senha, setSenha]=useState("")

  const navigate = useNavigate()

  async function entrar() {
      const usuario = {
          "nome": nome,
          "senha": senha
      }
    
      const url = `http://localhost:5001/entrar`
      let resp = await axios.post(url, usuario)

      if (resp.data.erro != undefined) {
        alert(resp.data.erro)
    }else{
      localStorage.setItem('USUARIO', resp.data.token)
            navigate('/consultar')

    }

  }
  return (
    <div className="App">

      <div className='Entrar'>

        <h1>Entrar</h1>

        <div className='campo'>
                <label htmlFor='nome'>Nome</label>
                <input value={nome} onChange={e=>setNome(e.target.value)}/>
            </div>

            <div className='campo'>
                <label htmlFor='senha'>Senha</label>
                <input value={senha} onChange={e=> setSenha(e.target.value)}/>
            </div>

      

      </div>
      <button onClick={entrar}>Entrar</button>
    
    </div>
  );
}


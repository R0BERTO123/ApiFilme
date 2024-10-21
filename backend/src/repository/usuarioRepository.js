import con from "./connection.js";


export async function inserirUsuario(usuario){
    let comando =`
    insert into tb_usuario(nome,senha)
values(?,?)
    `
    let resposta = await con.query(comando,[usuario.nome, usuario.senha])

    let info = resposta[0]
    let iduauario= info.insertId;
    return iduauario;
}

export async function validarUsuario(pessoa){
    let comando=`
    select 
    id_usuario,
    nome 
from tb_usuario 
where 
    nome =?
    and senha = ?;
    `
    let registros = await con.query(comando, [pessoa.nome, pessoa.senha])
    return registros[0][0];
}
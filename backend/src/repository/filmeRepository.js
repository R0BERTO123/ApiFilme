import con from './connection.js';



export async function salvarfilme(filme){
    let comando =`
    insert into tb_fime(filme, sinopse, avaliacao, lancamento, disponivel)
    values(?,?,?,?,?)
    `


    let resposta = await con.query(comando,[filme.nome,filme.sinopse,filme.bom]);

    let info = resposta[0];
    let idfilme = info.insertId;
    return idfilme;

}

export async function Consultarfilmes(nome){
    let comando = `
    select *from catalogo
where nome like ?;
    `

    let resposta = await con.query(comando,[`%${nome}%`])
    let registros = resposta[0]

    return registros
}



import con from './connection.js';



export async function salvarfilme(filme){
    let comando =`
    insert into tb_filme(filme, sinopse, avaliacao, lancamento, disponivel,id_usuario)
    values(?,?,?,?,?,?)
    `


    let resposta = await con.query(comando,[filme.nome,filme.sinopse,filme.avaliacao,filme.lancamento,filme.bom,filme.usuario]);

    let info = resposta[0];
    let idfilme = info.insertId;
    return idfilme;

}

export async function Consultarfilmes(id){
    let comando = `
    select *from tb_filme
where id_usuario like ?;
    `

    let resposta = await con.query(comando,[id])
    let registros = resposta[0]

    return registros
}

export async function AlterarFilme(id,filme){
    let comando= `
    update tb_filme 
            set filme = ?,
                sinopse = ?,
                avaliacao = ?,
                lancamento = ?,
                disponivel = ?,
            where id_filmes = ?
    `
    let resposta = await con.query(comando,[filme.filme,filme.sinopse,filme.avaliacao,filme.lancamento,filme.disponivel,id])
let info = resposta[0];
return info.affectedRows;

}
 export async function deletarFilmee(id){
    let comando= `
    delete from tb_filme 
         where id_filme = ?
    `
    let resposta = await comando.query(comando,[id])
    let info = resposta[0];
    return info.affectedRows;
 }



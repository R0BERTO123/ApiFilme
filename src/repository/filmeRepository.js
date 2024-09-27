import con from './connection.js';



export async function salvarfilme(filme){
    let comando =`
    insert into catalogo(nome,sinopse,bom)
values(?,?,?)
    `


    let resposta = await con.query(comando,[filme.nome,filme.sinopse,filme.bom]);

    let info = resposta[0];
    let idfilme = info.insertId;
    return idfilme;

}



create database filmes;
use filmes;

create table tb_filme(
id_filme int primary key auto_increment,
filme varchar(255),
sinopse varchar(255),
avaliacao decimal (10,2),
lancamento date,
disponivel boolean,
imagem varchar(255)
);

create table tb_usuario(
id_usuario int primary key auto_increment,
nome varchar(255),
email varchar (255),
senha varchar (255)
);
insert into tb_usuario(nome,email,senha)
values(?,?,?);
select* from tb_usuario;



        select 
            id_usuario,
            nome 
        from tb_usuario 
        where 
            nome =?
            and senha = ?;
    

 insert into tb_fime(filme, sinopse, avaliacao, lancamento, disponivel,imagem)
 values(?,?,?,?,?,?)

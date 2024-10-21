export function validarNovofilme(filmeobjeto){
    if(!filmeobjeto.nome){
    throw new Error("ESCREVE O NOME ")
    }

    if(isNaN(!filmeobjeto.sinopse)){
    throw new Error("VAI ESCREVER EM NUMERO????")
    }
    if(!filmeobjeto.sinopse){
    throw new Error("??")
    }
    if(!filmeobjeto.bom==undefined){
    throw new Error("Q???")
    }
}
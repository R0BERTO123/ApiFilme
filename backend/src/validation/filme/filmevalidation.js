export function validarNovofilme(filmeobjeto){
    if(!filmeobjeto.nome){
    throw new Error("ESCREVE O NOME PORRA")
    }

    if(isNaN(!filmeobjeto.sinopse)){
    throw new Error("VAI ESCREVER EM NUMERO????")
    }
    if(!filmeobjeto.sinopse){
    throw new Error("TA MUDO??")
    }
    if(!filmeobjeto.bom==undefined){
    throw new Error("Q???")
    }
}
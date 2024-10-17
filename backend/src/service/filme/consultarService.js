import { Consultarfilmes } from "../../repository/filmeRepository.js";

export default async function ConsultarfilmesService(nome){
    if(!nome){
        nome="";
    }

    let registros = await Consultarfilmes(nome)
return registros;
}


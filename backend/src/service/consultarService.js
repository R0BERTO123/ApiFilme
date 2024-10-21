import { Consultarfilmes } from "../repository/filmeRepository.js";

export default async function ConsultarfilmesService(id){
    if(!id){
        id="";
    }

    let registros = await Consultarfilmes(id)
return registros;
}


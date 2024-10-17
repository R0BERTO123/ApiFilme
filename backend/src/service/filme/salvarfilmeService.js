import { salvarfilme } from "../../repository/filmeRepository.js";
import { validarNovofilme } from "../../validation/filme/filmevalidation.js";

export default async function salvarfilmeService(filmeobjeto){
    validarNovofilme(filmeobjeto)
    let id = await salvarfilme(filmeobjeto)
    return id
}
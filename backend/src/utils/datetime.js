


export function horaAtual(){
    let agora =new Date()
    let msg =agora.toLocaleDateString()+''+agora.toDateString();
    return msg

}
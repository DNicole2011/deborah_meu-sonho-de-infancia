function validar (){
    var nome = formcontato.nome.value;
    var nota = formcontato.nota.value;
    
    if(nome == ""){
        alert ("Campo Inválido! Digite seu nome, por favor");
        formcontato.nome.focus();
        return false;
    }
    if(nota == ""){
        alert ("Campo Inválido! Coloque a nota, por favor");
        formcontato.nota.focus();
        return false;
    }
    return true;
}

function processarform(){
    if (validar ()){
        alert ("Dados enviados com Sucesso!");
        formcontato.reset();
    }
    return false;
}
function validar(usuario, senha){
    if(usuario == "Anderson" && senha == "1234")
        return true;
    
    return false;
}

exports.validar = validar;
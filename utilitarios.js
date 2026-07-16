function recuperarTexto(IdComponente){
    let componente = document.getElementById(IdComponente);
    let valor = componente.value;
    return valor;
}

function recuperarFloat(IdComponente){
    let valorTexto = recuperarTexto(IdComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function recuperarEntero(IdComponente){
    let valortexto = recuperarTexto(IdComponente);
    let valorEntero = parseInt(valortexto);
    return valorEntero;
}


function mostrarEnSpan(idSpan, valor){
    document.getElementById(idSpan).textContent = valor;
}
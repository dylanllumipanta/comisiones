const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {

        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);

    }

    return comision;
}

function validarInput(input){

    const valor = input.value.trim();
    const error = document.getElementById("error_" + input.id);

    if(valor === ""){
        error.textContent = "No puede estar vacío";
        return false;
    }

    if(!/^\d+$/.test(valor)){
        error.textContent = "Solo se permiten números";
        return false;
    }

    if(valor.length > 5){
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    error.textContent = "";
    return true;
}

function calcular(){

    const sueldoValido = validarInput(document.getElementById("txtSueldoBase"));
    const ventasValidas = validarInput(document.getElementById("txtVentas"));
    const precioValido = validarInput(document.getElementById("txtPrecio"));

    if (!sueldoValido || !ventasValidas || !precioValido){
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase.toFixed(2));
    mostrarEnSpan("spComision", comision.toFixed(2));
    mostrarEnSpan("spTotal", total.toFixed(2));
}
const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {

        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);

    }

    return comision;
}

function validarVenta(){
        let numeroVentasStr = recuperarTexto("txtVentas");

        if(numeroVentasStr.length > 5){
        alert("maximo 5 caracteres!")
        return false;
    }else{
        return true;
    }
}

function calcular(){

    if (validarVenta()== false){
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);

}
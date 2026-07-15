const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {

        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (precioProducto * 0.10);

    }

    return comision;
}

function calcular() {

    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    let sueldoBase = parseFloat(componenteSueldoBase.value);
    let numeroVentas = parseFloat(componenteVentas.value);
    let precioProducto = parseFloat(componentePrecio.value);

    let comision = calcularComision(numeroVentas, precioProducto);
    let total = sueldoBase + comision;

    document.getElementById("spSueldoBase").textContent = sueldoBase.toFixed(2);
    document.getElementById("spComision").textContent = comision.toFixed(2);
    document.getElementById("spTotal").textContent = total.toFixed(2);

}
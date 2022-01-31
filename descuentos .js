const PrecioOriginal = 100;
const descuento = 15;

const PorcentajePrecioCOnDescuento = 100 - descuento;
const PrecioConDescuento = (PrecioOriginal * PorcentajePrecioCOnDescuento) / 100

//Funciones

function CalcularPrecioConDescuento(precio, descuento) {
    const PorcentajePrecioCOnDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * PorcentajePrecioCOnDescuento) / 100
    return PrecioConDescuento;
}

// Calculadora de descuentos

function OneClickPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const PriceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = inputDiscount.value;

    const PrecioConDescuento = CalcularPrecioConDescuento(price, disconut);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son $" + PrecioConDescuento
};
var quantityTorresmo = 0;
var quantitySalada = 0;
var quantityFarofa = 0;
var quantityBife = 0;
var quantityCoxa = 0;
var quantityCarne = 0;

function countCarne(op) {
    var tipo = "quantityCarne";
    quantityCarne = convert(op, tipo, quantityCarne);
}

function countCoxa(op) {
    var tipo = "quantityCoxa";
    quantityCoxa = convert(op, tipo, quantityCoxa);
}

function countBife(op) {
    var tipo = "quantityBife";
    quantityBife = convert(op, tipo, quantityBife);
}

function countTorresmo(op) {
    var tipo = "quantityTorresmo";
    quantityTorresmo = convert(op, tipo, quantityTorresmo);
}

function countSalada(op) {
    var tipo = "quantitySalada";
    quantitySalada = convert(op, tipo, quantitySalada);
}

function countFarofa(op) {
    var tipo = "quantityFarofa";
    quantityFarofa = convert(op, tipo, quantityFarofa);
}

function convert(op, tipo, quantity) {

    switch (op) {
        case "+":
            quantity++;
            document.getElementById(tipo).innerHTML = quantity;
            break;
        case "-":
            if (quantity == 0 || quantity < 0) {
                quantity == 0;
                document.getElementById(tipo).innerHTML = quantity;
            } else {
                quantity--;
                document.getElementById(tipo).innerHTML = quantity;
            }
    }
    return quantity;
}
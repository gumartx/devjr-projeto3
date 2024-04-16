
var prods = [
    { id: 1, name: "Bife com batata", price: 30.00, quantity: 0 },
    { id: 2, name: "Coxa de Frango Crocante", price: 25.00, quantity: 0 },
    { id: 3, name: "Carne de Panela", price: 22.00, quantity: 0 },
    { id: 4, name: "Farofa", price: 10.00, quantity: 0 },
    { id: 5, name: "Salada", price: 8.00, quantity: 0 },
    { id: 6, name: "Torresmo", price: 12.00, quantity: 0 }
];

function countQty(op, id) {

    var food = prods[id-1];

    switch (op) {
        case "+":
            food.quantity++;
            document.getElementById(food.id).innerHTML = food.quantity;
            break;
        case "-":
            if (food.quantity == 0 || food.quantity < 0) {
                food.quantity == 0;
                document.getElementById(food.id).innerHTML = food.quantity;
            } else {
                food.quantity--;
                document.getElementById(food.id).innerHTML = food.quantity;
            }
            break;
    }

}

function viewOrder() {
    var name = document.getElementById("name").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    if (name != "" && telephone != "" && email != "") {
        var orderName = `<div></br></br>Caro <strong>${name}</strong> </div> <div></br></br>Seguem os dados do seu pedido.</div> <div></br>O seu pedido é: </br></br></div>`;
        var totalOrder = 0;
        document.getElementById("order").innerHTML = orderName;
        for (let i = 0; i < prods.length; i++) {
            if (prods[i].quantity > 0) {
                var total = prods[i].price * prods[i].quantity;
                var orders = `<li>Prato: ${prods[i].name} - Preço unitário: ${formatter.format(prods[i].price)} - Quantidade: ${prods[i].quantity} - Total: ${formatter.format(total)}</li>`;
                document.getElementById("order").innerHTML += orders;
                totalOrder += total;
            }
        }
        totalOrder = `<h2></br></br><strong>Preço final ${formatter.format(totalOrder)}</strong></h2>`;
        document.getElementById("order").innerHTML += totalOrder;
    } else {
        document.getElementById("order").innerHTML = "<div></br></br> Dados inválidos </div>";
    }
}

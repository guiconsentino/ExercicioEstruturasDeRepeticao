
var alcool = prompt("digite o valor do alcool: ");
alcool = parseFloat(alcool);

var gasolina = prompt("Digite o valor da gasolina: ");
gasolina = parseFloat(gasolina);

var divisor = alcool / gasolina;

if (divisor > 0.7) {
    alert(divisor.toFixed(2) + " vale a pena usar gasolina");
} else if (divisor < 0.7) {
    alert(divisor.toFixed(2) + " vale a pena usar álcool");
} else if (divisor == 0.7) {
    alert(divisor.toFixed(2) + " pode usar qualquer um");
}

do {
    alert("digite corretamente [sim/nao]")
    var sair = prompt("deseja fazer um novo calculo? [sim/nao]");

    do {

        var sair = prompt("deseja fazer um novo calculo? [sim/nao]");
    } while (sair != "nao" && sair != "sim")

    if (sair == "sim") {
        var alcool = prompt("digite o valor do alcool: ");
        alcool = parseFloat(alcool);

        var gasolina = prompt("Digite o valor da gasolina: ");
        gasolina = parseFloat(gasolina);

        var divisor = alcool / gasolina;

        if (divisor > 0.7) {
            alert(divisor.toFixed(2) + " vale a pena usar gasolina");
        } else if (divisor < 0.7) {
            alert(divisor.toFixed(2) + " vale a pena usar álcool");
        } else if (divisor == 0.7) {
            alert(divisor.toFixed(2) + " pode usar qualquer um");
        }
    }
} while (sair == "sim");


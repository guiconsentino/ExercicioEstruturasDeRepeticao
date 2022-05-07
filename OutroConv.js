
    var contador = 1;
    
    for (var i = 0; i <= contador; i++) {
    
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
    
    var result = prompt("deseja realizar uma Nova consulta? !");

    if (result == "sim") {

        contador++

    }else{
        do{
            alert("digite corretamente [sim/nao]")
            var result = prompt("deseja realizar uma Nova consulta? !");
            
        }while(result != "sim" && result != "nao")
       
        }
    }

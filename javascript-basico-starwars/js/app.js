console.log('Olá Javascript')
var userName = 'Simone, aprendendo essa bagaça'

document.getElementById('user-name').innerHTML= userName // puxando elemento user-name do HTML para o javascript

//Variáveis//
//var nome = 'Mestre Yoda'
//var idade = 100
//var jedi = true
// javascript trabalha com tipagem dinâmica
//console.log( typeof nome) // typeof mostra o tipo da varável
//console.log(typeof idade)
//console.log(typeof jedi)
//typeof mostra o tipo de variável lá na visualização, no devtools

//Operadores matemáticos//
//var n1=7
//var n2=2.5

//console.log(typeof n1)
//console.log(typeof n2)

//var total = n1 / n2
//console.log(total)

//Operadores de comparação//
//var v1 = 5
//var v2 = 5
//resultado = v1===v2 // esses très sinais de igual faz a comparação
//resultado = v1 != v2 // compara se são diferentes (nesse caso vai dar false)
//console.log(resultado)  // como 5 é igual a 5 então o resultado será true (por ser valores númericos)
// se for string '5' vi dar false, se usarmos == aí vai dar true

// Funções//
// function soma(n1, n2){ 
//     console.log(n1 + n2)
// }
// soma(5,5) // invocando a função

// function BoasVindas(nome){
//     alert(nome + ', Seja bem vindo(a)!!')
// }
// BoasVindas('Simone') // invocando a função

// function soma(n1, n2){
//     return(n1 + n2) // retorna o valor mas não mostra no navegador
// }
// var resultado = soma(5,5) // pra mostrar o resultado precisa de uma variável (resultado)
// console.log(resultado)
var saldo = 1000
function saque(valor){
    if( saldo < valor){ // primeira condição
       
        console.log('O valor do saque excede o valor do saldo')
    } else if(valor > 700){ // segunda condição
        console.log('Valor excede o limite de saque permitido')
    } else{ // terceira condição
        saldo = saldo - valor
    }
   
}
saque(701)
console.log(saldo)
// As condições acima atendem aos três cenários descritos abaixos.


//Controle de fluxos com BDD//

// Histório de usuário
// Sendo cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceita cartão de crédito ou débito

// Cenário um: saque com sucesso (caminho feliz)
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo de operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor excede o máximo permitido
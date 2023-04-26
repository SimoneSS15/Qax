console.log('Olá Javascript')
var userName = 'Simone, aprendendo essa bagaça'

document.getElementById('user-name').innerHTML= userName // puxando elemento user-name do HTML para o javascript

//Variáveis//
// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true
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

// O código abaixo refere-se aos três cenários feitos logo após a codificação
// var saldo = 1000
// function saque(valor){
//     if( saldo < valor){ // primeira condição
       
//         console.log('O valor do saque excede o valor do saldo')
//     } else if(valor > 700){ // segunda condição
//         console.log('Valor excede o limite de saque permitido')
//     } else{ // terceira condição
//         saldo = saldo - valor
//     }
   
// }
// saque(701)
// console.log(saldo)
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

//Arrays//
// È um tipo de dados onde podemos ter um conjunto de informações
// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinho'] // quatro gavetas começando pela gaveta 0
// console.log(gaveteiro[0]) // mostra a primeira gaveta Meias

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// //console.log(typeof personagens) // vai mostrar que a variável é do tipo Object
// personagens.push('C3pO') // a função push adiciona um novo item no array
// personagens.push('R2D2')
// personagens.pop() // vai retirar o último item da lista

// personagens = personagens.filter(function(p){
//     return p !== 'Darth Vader'
// }) // Esse trecho de código mais complexo, retira o nome Darth Vader da lista array, a letra p representa a primeira letra da variável personagens

// personagens = personagens.filter(function(p){
//     return p === 'Mestre Yoda'
// }) // Esse código faz um filtro e mostra penas o item Mestre Yoda do array ignorando os outros
// console.log(personagens)

// Controles de repetição (loops)//
// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// personagens.forEach(function(p){ // É uma estrutura (um loop) de repetição que vai mostrar todos os personagens na tela
//     console.log(p)
// })
// for (var i in personagens){  // outra forma de listrar os personagens
//     console.log(personagens[i])
// }
// for (var i = 0; i<= 10; i++){ // vai mostrar o valor de i até i>=10
//     console.log(i)
// }

// Objetos // (super variáveis)
// var yoda  = { 
//     nome: 'Mestre yoda', // parecido com json
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é ${this.idade} anos`)// interpolação de string
//     }
// } // a variável yoda é um objeto (uma super variável) onde posso incrementar valores

// console.log(yoda)
// yoda.mostraIdade()

// Constante//
// const nome = 'Darth Vader'
// console.log(nome)
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

//Operadores de comparação
var v1 = 5
var v2 = 5
//resultado = v1===v2 // esses très sinais de igual faz a comparação
resultado = v1 != v2 // compara se são diferentes (nesse caso vai dar false)
console.log(resultado)  // como 5 é igual a 5 então o resultado será true (por ser valores númericos)
// se for string '5' vi dar false, se usarmos == aí vai dar true
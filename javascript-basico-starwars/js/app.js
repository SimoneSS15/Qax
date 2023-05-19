const LIST = [  // array de objetos com 8 itens
    {
    id: 1,
    nome: 'Mestre Yoda',
    avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Chew Bacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
     },
     {
        id: 8,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
     }

]

const App = new Vue({ // a constante App é uma nova instância do framework Vuejs
    el: '#app', // id que está na div do html
    data: {
        title: 'Star Wars Lego',
        userName: 'Simone',
        characters: LIST, // lista de personagens
        searchName: ''
    },
    methods:{ // recurso do vue para usar funções
        like(userName){
            alert(`O pesonagem ${userName} recebeu um like`)// foi usado crase para inrterpolação
        },
         remove(id){
            const list = this.characters // a constante copia a lista de personagens

            const result = list.filter(item =>{ // é feito um filtro sem o id do personagem escolhido
             return item.id !== id  // então ele retorna na tela apenas os outros personagens diferente do personagem com id escolhido
            })
            this.characters = result // a sensação é de que o personagem foi excluido (mas não foi) se der um refresh na página volta tudo novamente
         },

        search(){
            if (this.searchName === ''){
                 return alert('O preenchimento do campo é obrigatório')
            }
            const list = this.characters = LIST
            const result = list.filter(item =>{
                return item.nome === this.searchName
            })
            if (result.length <= 0){
                alert('Nenhum registro encontrado')
            } else {
                this.characters= result
            }

            
        }

    }
})
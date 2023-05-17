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
        characters: LIST // lista de personagens
    },
    methods:{ // recurso do vue para usar funções
        like(userName){
            alert(`O pesonagem ${userName} recebeu um like`)// foi usado crase para inrterpolação
        }

    }
})
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/icecream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/icecream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard(){
    for(let i=0; i<cardArray; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'C:\Users\ANKITA JB\Desktop\jsproject\images\blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    console.log
}
function flipcard(){
   console.log(cardArray)
   const cardId = this.getAttribute('data.id')
   console.log(cardArray[cardId].name)
   console.log('clicked', cardId)
   console.log(cardsChosen)
   this.setAttribute('src', cardArray[cardId].img)
   if(cardsChosen.length === 2){
    setTimeout( checkMatch, 500)
   }
}

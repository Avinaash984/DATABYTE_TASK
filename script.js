const cards = document.querySelectorAll('.card');

cards.forEach(Card => Card.addEventListener('click',flipcard));


let cardsflipped = false;
let cardone;
let cardtwo;

function flipcard(){
    this.classList.add('flip');

    if(!cardsflipped){
        cardsflipped = true;
        cardone = this;
    }
    else{
        cardsflipped = false;
        cardtwo = this;
    }

    if(cardone.dataset.framework === cardtwo.dataset.framework) {
            firstCard.removeEventListener('click',flipcard);
            secondCard.removeEventListener('click',flipcard);
    }
    else{
     setTimeout(() => {
        cardone.classList.remove('flip');
        cardtwo.classList.remove('flip');
        },1500);
    }
}



(function shuffle(){
    cards.forEach(Card =>{
        let shuffling = Math.floor(Math.random()*16);
        Card.style.order = shuffling;
    })
})
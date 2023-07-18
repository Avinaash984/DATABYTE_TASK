const cards = document.querySelectorAll('.card');

cards.forEach(Card => Card.addEventListener('click',flipcard));


let cardsflipped = false;
let cardone;
let cardtwo;
let scores=0;
let time=0;
let timer=null;

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
            scores++;
            document.getElementById("score").textContent = `SCORE:${scores}`;
    }
    else{
     setTimeout(() => {
        cardone.classList.remove('flip');
        cardtwo.classList.remove('flip');
        },1500);
    }
}



function shuffle(){
    cards.forEach(Card =>{
        let shuffling = Math.floor(Math.random()*16);
        Card.style.order = shuffling;
    });
}
function Timer(){
    timer = setInterval(() =>{
       (time++) ;
        document.getElementById("time").textContent = `TIME: ${time}`;
        
    if(time > 60){
        clearTimeout(timer);
        alert("timer ended!");
    }
    }, 1000);

    // if(time > 60){
    //     clearInterval(timer);
    //     windows.alert("timer ended!");
    // }
}

document.getElementById("restart").onclick= () =>{
    scores = 0;
    time = 0;
    shuffle();
    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click',flipcard);
    });
}

let clickCount = document.getElementById("clicks");
let count = 0;
cards.forEach(card => card.addEventListener('click',clickCount));

function clickCounts(){
    count++;
    clickCount.textContent = `CLICKS: ${count}`
};
shuffle()
Timer()

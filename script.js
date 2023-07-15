// Card data
const cards = [
    { id: 1, img: 'image1.jpg' },
    { id: 2, img: 'image2.jpg' },
    { id: 3, img: 'image3.jpg' },
    { id: 4, img: 'image4.jpg' },
    { id: 5, img: 'image1.jpg' },
    { id: 6, img: 'image2.jpg' },
    { id: 7, img: 'image3.jpg' },
    { id: 8, img: 'image4.jpg' }
  ];
  
  let flippedCards = [];
  let score = 0;
  let numClicks = 0;
  
  // Shuffle cards
  const shuffledCards = shuffle(cards.concat(cards));
  
  // Create game board
  const gameBoard = document.getElementById('game-board');
  shuffledCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-id', card.id);
    cardElement.addEventListener('click', flipCard);
    const imgElement = document.createElement('img');
    imgElement.src = card.img;
    cardElement.appendChild(imgElement);
    gameBoard.appendChild(cardElement);
  });
  
  // Card click event handler
  function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
      this.classList.add('flipped');
      flippedCards.push(this);
      numClicks++;
  
      if (flippedCards.length === 2) {
        checkForMatch();
      }
    }
  }
  
  // Check if flipped cards match
  function checkForMatch() {
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];
  
    const id1 = card1.getAttribute('data-id');
    const id2 = card2.getAttribute('data-id');
  
    if (id1 === id2) {
      score++;
      document.getElementById('score').textContent = `Score: ${score}`;
      flippedCards = [];
      if (score === cards.length) {
        setTimeout(() => {
          alert('Congratulations! You won the game.');
        }, 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 1000);
    }
  }
  
  // Shuffle an array
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
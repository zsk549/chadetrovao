let jogo = document.querySelector(".jogo");
let tempo = 60;
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let c_counter = 0;
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let pause = document.querySelector(".blur")
let clicks = false
let aud = new Audio()
var intervalo
let win = null

const cloy = document.createElement('div');
cloy.classList = 'cloyster'
jogo.appendChild(cloy)

b2.addEventListener('click', ()=>{
  
  if(!clicks){ 
  pause.style.display = "flex"
  clearInterval(intervalo)
  b2.textContent = "Continue"
  clicks = true}

else{
  intervalo = setInterval(timer, 1000)
  pause.style.display =  "none";
  b2.textContent = "Pause"
  clicks = false
}
})
b1.onclick = ()=>{
  restart()
  tempo = 60
  c_counter = 0
  clicks= false
  h2.textContent = c_counter;

}

window.onload = ()=>{
  if(!clicks){ 
    pause.style.display = "flex"
     clearInterval(intervalo)
      clicks = true}
}

const getData= ()=> [
  {imgSrc: 'img/apoc.png', name: 'apoc'},
  {imgSrc: 'img/cloyster.png', name: 'cloy'},
  {imgSrc: 'img/flamengo.png', name: 'flame'},
  {imgSrc: 'img/pix.png', name: 'pix'},
  {imgSrc: 'img/saitama.png', name: 'sait'},
  {imgSrc: 'img/gundum.png', name: 'gun'},
  {imgSrc: 'img/mih.png', name: 'omin'},
  {imgSrc: 'img/pain.png', name: 'pain'},
  {imgSrc: 'img/pain.png', name: 'pain'},
  {imgSrc: 'img/apoc.png', name: 'apoc'},
  {imgSrc: 'img/cloyster.png', name: 'cloy'},
  {imgSrc: 'img/flamengo.png', name: 'flame'},
  {imgSrc: 'img/pix.png', name: 'pix'},
  {imgSrc: 'img/saitama.png', name: 'sait'},
  {imgSrc: 'img/gundum.png', name: 'gun'},
  {imgSrc: 'img/mih.png', name: 'omin'}
];
//random
const randomize = ()=>{
  const cardData = getData();
  cardData.sort(()=> Math.random() - 0.5);
  return cardData;
  
}
const cardGenerator =()=>{
  const cardData = randomize();
//html gen  
cardData.forEach((item) =>{
  const card = document.createElement('div');
  const face = document.createElement('img');
  const back = document.createElement('div');
  card.classList = 'card';
  face.classList = 'face';
  back.classList = 'back';
  //info
  face.src = item.imgSrc;
  card.setAttribute('name', item.name)
  //attach
  jogo.appendChild(card)
  card.appendChild(face)
  card.appendChild(back)

  card.addEventListener('click', (e)=>{
    card.classList.toggle('toggleCard');
    checkCards(e);
    
  })
});
};

const checkCards = (e)=>{

  const clickedCard = e.target;
   clickedCard.classList.add('flipped');
     const flippedCards = document.querySelectorAll('.flipped');
       const toggleCard = document.querySelectorAll('.toggleCard');
  

  //logic
  if (flippedCards.length === 2) {
   
    if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {     
      if (flippedCards[0].getAttribute('name') === 'omin' && flippedCards[1].getAttribute('name') === 'omin') {
        clearInterval(intervalo)
        
        aud.src = 'MadeInHeaven.mp3'
        aud.play()
        let c = 0
        let madeInHeaven = setInterval(() => {
          tempo--
          h1.style.color = 'red'
          h1.style.animationPlayState = 'running'
          h1.textContent = tempo
          c++
          if (c > 25 || tempo < 0) {
            h1.style.color = 'white'
            h1.style.animationPlayState = 'paused'
            clearInterval(madeInHeaven)
               intervalo = setInterval(timer, 900)
            // function timer() {
            //   h1.textContent = tempo
            //   tempo--
            //   if (tempo <= 0) {
            //     tempo = 0
            //     displayCloyster()
            //     clearInterval(intervalo)
            //   }
            // }
          }
        }, 500)

      }
        flippedCards.forEach((card) => {
          card.classList.remove("flipped");
          card.style.pointerEvents = "none";
      })
    }else{
      if(flippedCards[0].getAttribute('name') === 'cloy' && flippedCards[1].getAttribute('name') != 'cloy' || flippedCards[0].getAttribute('name') != 'cloy' && flippedCards[1].getAttribute('name') === 'cloy' ){
        c_counter = c_counter +1;
         h2.textContent = c_counter;
          if(c_counter === 3){
           c_counter = 0;
            setTimeout(CR, 1000)
        }
      }   

      flippedCards.forEach(card => {   // remove  2 classes em delay
        card.classList.remove('flipped');
        setTimeout(() => card.classList.remove('toggleCard'), 1000)
      });
    }
  }
      
  if(toggleCard.length === 16) {
    win = true
    aud.src =  'parabains.mp3'
    aud.play()
    pause.style.display = "flex"
    clearInterval(intervalo)
    document.querySelector('.blur').textContent = "Parabains!"
    clicks = true
  }
}

///Restart
const restart = () => {
  let cardData = randomize();
   let faces = document.querySelectorAll(".face");
     let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
      cards[index].classList.remove('toggleCard')
        cards[index].style.pointerEvents = "auto";
      setTimeout(()=>{
        faces[index].src =item.imgSrc
          cards[index].setAttribute('name', item.name)
      },1000)

  })
}
function CR(){
  let cardData = randomize();
     let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
      cards[index].classList.remove('toggleCard')
        cards[index].style.pointerEvents = "auto";
  })
}

// tempo
intervalo = setInterval(timer, 1000)

function timer(){
    h1.textContent = tempo
    tempo--
    if(tempo <= 0){
      clearInterval(intervalo)
      displayCloyster()  
      tempo=0
    }
}

//Cloyster
function displayCloyster(){
  if(!win){aud.src =  'SpongeBob.mp3'
  aud.play()
cloy.style.display = "block";}
}
cardGenerator()
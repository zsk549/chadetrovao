let container = document.querySelectorAll('.container2 div');
let artic = document.querySelectorAll('.artic');
const breakdownButton = document.querySelectorAll('.container2 div');
let c = 1

setInterval(()=>{
    if(c>2)c=0
    breakdownButton.forEach((a,b)=>{
        a.classList.remove(`anime${b}`)
      })
    artic.forEach((a,b)=>{
        a.classList.remove(`opacit`)
      })
    container[c].classList.add(`anime${c}`)
    artic[c].classList.add(`opacit`)
    c++
//     setTimeout(()=>{
//     container[c].classList.remove(`anime${c}`)
//     artic[c].classList.remove(`opacit`)
//     c=c+1
// },9800);
},10000);

breakdownButton.forEach(function(btn, ind) {
    btn.addEventListener('click', function(e) {
      breakdownButton.forEach((a,b)=>{
        a.classList.remove(`anime${b}`)
      })
    this.classList.add(`anime${ind}`)
    // setTimeout(()=>this.classList.remove(`anime${ind}`),10000)
  });
});
    

// setInterval(()=>{
//     container[c+1].classList.remove('.anime'+(c+1))
//     container[c-1].classList.remove('.anime'+(c-1))
//     container[1].classList.add('.anime1')
//     c++
//     if(c==3) c=0;
// }, 4000);
// window.sr = ScrollReveal({ reset: false });

// sr.reveal('.container', { duration: 4000});

// sr.reveal('.wrapper', { duration: 5000});

// sr.reveal('.container2', { duration: 1000});

// let boxW = document.getElementById('raphaB');
let rapha = document.getElementById('rapha');
rapha.onmouseover = () =>{
    rapha.src = 'imagens/umineko_2.png'
}
rapha.onmouseout = () => {
    rapha.src = 'imagens/umineko.png'
}

//     let varRadomN;
//     varRadomN = Math.floor(Math.random() * 50000) + 1
let igor = document.getElementById('igor');
igor.onmouseover = () =>{
      igor.src = 'imagens/Aqua.png'
  }
igor.onmouseout = () => {
      igor.src = 'imagens/Eugeo.png'
  }
let churras = document.getElementById('churras');
let churrasko = document.querySelector('.boxK')
churrasko.onmouseover = () =>{
      churras.src = 'imagens/emiC.png'
  }
churrasko.onmouseout = () => {
      churras.src = 'imagens/emi.png'
  }
//     setInterval(timeF, varRadomN)
//     setInterval(timeF2, 400)

//     function timeF(){
//         igor.src = 'imagens/Aqua.png';
        
//     }

//     function timeF2(){
//         igor.src = 'imagens/Eugeo.png';
        
//     }

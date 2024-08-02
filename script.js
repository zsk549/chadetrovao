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


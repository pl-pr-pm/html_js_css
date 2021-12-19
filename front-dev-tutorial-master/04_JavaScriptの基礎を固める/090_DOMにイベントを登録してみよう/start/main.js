const btn = document.querySelector("#btn");

function changeColor() {
  //this === btn
  this.style.color = 'red';
  console.log(this);
}


btn.addEventListener('click', changeColor);
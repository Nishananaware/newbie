const sidebaar= document.querySelector("#catagories");

const newsd= document.querySelector(".sidebar");

sidebaar.addEventListener("click", ()=>{
  newsd.style.left='28px'
  newsd.style.transition='all 0.4s linear';
});
const cut= document.querySelector(".btn1");
cut.addEventListener("click",()=>{
  newsd.style.left='-34%'
});
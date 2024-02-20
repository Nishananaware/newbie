const input=document.querySelector(".input1");
const adds=document.querySelector(".testicon");

const listtodo=document.querySelector(".list"); 
console.log(listtodo);
const reset=document.querySelector("button");

adds.addEventListener("click",()=>{
    console.log("hello");
    let inputtd = input.value;
    if(inputtd.length == 0){
        alert("please enter your todo..");
    }else{
    let list1 =document.createElement("li");
     list1.innerHTML=`<p> ${inputtd}</p>
        <h2>Pending...</h2>
      <i class="fas fa-times"></i>
      <i class="far fa-edit"></i>`;
      listtodo.appendChild(li);
      input.value="";
    }
    

});
const input=document.querySelector("#inputtd");
const adds=document.querySelector(".testicon");

const listtodo=document.querySelector(".list"); 
console.log(listtodo);
const reset=document.querySelector("button");

adds.addEventListener("click",()=>{
    console.log("hello");
    let inputt = input.value;
    if(inputt.length == 0){
        alert("please enter your todo..");
    }else{
    let list1 =document.createElement("li");
     list1.innerHTML=`<p> ${inputt}</p>
        <h2>Pending...</h2>
      <i class="fas fa-times"></i>
      <i class="far fa-edit"></i>`;
      listtodo.appendChild(list1);
      input.value="";
    }
    

});
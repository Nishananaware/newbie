const input=document.querySelector(".input1");

const adds=document.querySelector(".testicon");

const listtodo=document.querySelector(".list"); 
console.log(listtodo);
const reset=document.querySelector("button");

function addit(){
    if( input.value === "") {
        alert("type something your todo..");
    } else {
        let li= document.createElement("li");
        li.innerHTML=input.value;
         listtodo.appendChild(li);
        input.value="";
    }
}
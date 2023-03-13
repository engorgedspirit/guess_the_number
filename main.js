var inp=document.querySelector("#inp");
var but=document.querySelector("#submit");
var ans=document.querySelector("#ans");
let x=Math.floor(Math.random()*20)+1;
console.log(x)
let tnode;
var br=document.createElement("br");
but.addEventListener("click",function(){
    let x1=inp.value;
    if(x==x1){
    tnode=document.createTextNode("Your guess is correct.\n");
    but.disabled=true;
    }else if(x1<x){
    tnode=document.createTextNode("Your guess is less than actual number.\n");
    }else{
    tnode=document.createTextNode("Your guess is higher than actual number.\n");
    }
    ans.appendChild(tnode);    
})


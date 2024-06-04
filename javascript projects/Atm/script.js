function maskPassword() {
    var passwordInput = document.getElementById("passwordInput");
    passwordInput.type = "text"; 
    passwordInput.value = passwordInput.value.replace(/./g, "*"); 
}

let cancelBtn=document.getElementById("cancel");
let clearBtn=document.getElementById("clear");
let enterBtn=document.getElementById("enter");
let buttons=document.querySelectorAll(".button");
let supText=document.querySelectorAll("sup");
let displayScreen=document.querySelector(".inner-box2")
let globe=document.querySelector(".globe");

let transaction=document.querySelector(".transaction");
let withdrawal=document.getElementById("withdrawal");
let deposit=document.getElementById("deposit");
let amount=document.getElementById("amount");
let balance=document.getElementById("balance");
let FastCash=document.getElementById("FastCash");
let preference=document.getElementById("preference");

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML==='CLEAR'){
      string="";
      passwordInput.value=string;
    }
    else if(e.target.innerHTML==='CANCEL'){
      string=string.substring(0,string.length-1);
      passwordInput.value=string;
    }
    else if(e.target.innerHTML==="ENTER"){
      string="";
      passwordInput.value=string;
      let h2=document.createElement("h2");
      h2.classList.add("h2_text")
      h2.innerText="WELCOME";
      document.querySelector(".pin").prepend(h2);
      globe.style.visibility="visible";
      document.querySelector('#pin-text').style.visibility='hidden';
      passwordInput.style.visibility='hidden';
      displayScreen.classList.add('display');
      transaction.style.visibility="visible";
    }
    else{
      string+=e.target.innerText;
      passwordInput.value=string;
      maskPassword();
    }
  })
})

setTimeout(()=>{
    globe.classList.add('')
},3000)

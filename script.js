const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnlogin-popup');
const iconClose=document.querySelector('.icon-close');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});
function validate()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="tushar@123"&& password=="tushar")
    {
        alert("login successfully");
        return false;
    }
    else{
        document.write("login is not  successfully");
    }
}


var objuser=[
    {
    email:"tushar@134",
    password:"raja123456"
},
{
    email:"Prem@134",
    password:"savle12" 
},
{
    email:"pawan@134",
    password:"jir123456"
}
]
function getDetails(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    for(i=0;i<objuser.length;i++){
        if(email == objuser[i].email && password == objuser[i].password){
console.log(email+"is Loged in 10")
        }
    }
    
  console.log("incorrect email and password")  ;
}


function  getInfo()
{
    var email=document.getElementById("email").value;
    var email=document.getElementById("password").value;
    if("")
    {
        alert("Your oder completed!");
        return false;
    }
    
}


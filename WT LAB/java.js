let total = 0;
let virtual = 0;
let inperson = 0;

function register(){

let valid = true;

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const type = document.querySelector('input[name="type"]:checked');

if(name.length < 6 || name.length > 100){
document.getElementById("nameErr").innerHTML =
"Name must be between 6 and 100 characters.";
valid = false;
}
else{
document.getElementById("nameErr").innerHTML="";
}

if(!email.includes("@")){
document.getElementById("emailErr").innerHTML =
"Please enter a valid professional email address.";
valid = false;
}
else{
document.getElementById("emailErr").innerHTML="";
}

if(!type){
document.getElementById("typeErr").innerHTML =
"Please select your attendance type.";
valid = false;
}
else{
document.getElementById("typeErr").innerHTML="";
}

if(valid){

total++;

if(type.value=="Virtual"){
virtual++;
}else{
inperson++;
}

document.getElementById("total").innerHTML = "Total Registrants: " + total;
document.getElementById("virtual").innerHTML = "Virtual: " + virtual;
document.getElementById("inperson").innerHTML = "In-Person: " + inperson;

alert("Registration Successful");

}

}

function toggleStats(){

const stats = document.getElementById("stats");
const btn = document.getElementById("btn");

if(stats.style.display=="none" || stats.style.display==""){
stats.style.display="block";
btn.innerHTML="Hide Event Analytics";
}
else{
stats.style.display="none";
btn.innerHTML="Show Event Analytics";
}

}

function clearForm(){

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("company").value = "";

document.getElementById("nameErr").innerHTML = "";
document.getElementById("emailErr").innerHTML = "";
document.getElementById("typeErr").innerHTML = "";

const radios = document.getElementsByName("type");

for(let i=0;i<radios.length;i++){
radios[i].checked = false;
}

}
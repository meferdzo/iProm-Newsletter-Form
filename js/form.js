console.log("I'm connected");

var closeBtn = document.getElementById("close");
var form = document.getElementById("main-wrapper");

form.style.opacity = 1;
form.style.transition = "opacity .5s";

const fade = (() => {
  form.style.opacity = 0;
});

closeBtn.addEventListener("click", fade, false)

function validateform(){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var btncheck = document.getElementById('consent').checked

  if(name == "" || email == ""){
    console.log("empty");
    document.getElementById('name-error').innerHTML = 'Izpolnite to polje.'
    document.getElementById('email-error').innerHTML = 'Izpolnite to polje.'
    return false;

  } else if (name == "Ime_in_priimek" || email == "Elektronski_naslov"){
    console.log("empty halo");
    document.getElementById('name-error').innerHTML = 'Izpolnite to polje.'
    document.getElementById('email-error').innerHTML = 'Izpolnite to polje.'
    return false;
  }  else if(btncheck == false){
    console.log("no check");
    return false;
  } else{
    console.log("thanks")
    return true;
  }
}

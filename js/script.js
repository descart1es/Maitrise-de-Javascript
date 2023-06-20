let form= document.querySelector('#loginForm');

//ici nous ecoutons la modification
form.email.addEventListener('change', function(){
   validEmail(this)
});
// ici nous ecoutons la modification du password
form.password.addEventListener('change', function(){
    validPassword(this)
 });
 // ici nous ecoutons la soumission du formulaire
 form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validEmail(form.email)){
        form.submit ();
        
    }else if(validPassword(form.password)){
        form.submit ();
    }

    
   
 });
const validEmail = function(inputEmail){
    //Creation de la reg exp pour l'email
    let emailRegexp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

     //recuperation de la balise small
    let small = inputEmail.nextElementSibling;
     //ici on test l'expresion reguliere
    if(emailRegexp.test(inputEmail.value)){
        small.innerHTML = "L'adresse mail est valid";
        small.classList.remove('text-danger');
        small.classList.add("text-success");
        return true;
    }else{
        small.innerHTML = "L'adresse mail est incorrect";
        small.classList.remove("text-success")
        small.classList.add('text-danger');
        return false;
    }
   
};

//************Validation Password********

  const validPassword = function(inputPassword){
    let msg;
    let valid = false;
    //aumoins 3caracters
    if(inputPassword.value.length < 3){
        msg = "le mot de pass doit contenire au moins 3 caracteres";
    }
     //aumoins 1maj
     else if(!/[A-Z]/.test(inputPassword.value)) {
        msg = "le mot de pass doit contenire au moins 1 majuscule";
     }
     else if(!/[a-z]/.test(inputPassword.value)) {
        msg = "le mot de pass doit contenire au moins 1 minuscule";
     }
     else if(!/[0-9]/.test(inputPassword.value)) {
        msg = "le mot de pass doit contenire au moins 1 chiffre";
     }
    else{
        msg= "le mot de pass est valid";
        valid = true;
    }
     
      //aumoins 1min

       //recuperation de la balise small
    let small = inputPassword.nextElementSibling;
    //ici on test l'expresion reguliere
   if(valid){
       small.innerHTML = "mot de passe correct";
       small.classList.remove('text-danger');
       small.classList.add("text-success");
       return true;
   }else{
       small.innerHTML = "le mot de pass est incorrect";
       small.classList.remove("text-success")
       small.classList.add('text-danger');
       
       return false;
   }
};





    

let popUp = document.getElementById("cookiePopup");
//Quand l'utilisateur click le bouton accepter
document.getElementById('acceptcookie').addEventListener("click", () =>{
// Ici on crée l'objet
let d = new Date();
d.setMinutes( 2 +  d.getMinutes());

document.cookie = "myCookieName=thisIsMyCookie; expires = " + d +";";
popUp.classList.add("hide");
popUp.classList.remove("show");

});
   const checkCookie = () =>{
    let input = document.cookie.split("=");

    if(input[0] == "myCookieName"){
        popUp.classList.add("hide");
        popUp.classList.remove("show");
    }
    else{
        //popUp.classList.add("show");
         popUp.classList.add('show');
         popUp.classList.remove('hide');
        //popUp.classList.remove("hide");
    }
 }
 //Ici on verifie si le cookie existe quand la page se charge
 window.onload = () => {
    setTimeout(()=>{
        checkCookie();
    },2000);
 }
 
/* window.onload = () =>{
    setTimeout(() => {
        checkCookie();
    },2000);*/
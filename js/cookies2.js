let popup = document.getElementById("cookiePopup");
//Quand l'utilisateur click le bouton accepter
document.getElementById('acceptcookie').addEventListener("click",() =>{
// Ici on crée l'objet
let d =new Date();
d.setMinutes(2 +  d.getMinutes());

document.cookie = "myCookieName=thisIsMyCookie;expires= "+ d +";";
popup.classList.add("hide");
popup.classList.remove("show");
});
 const checkCookie = () =>{
    let input = document.cookie.split("=");
    if (input[0]== "myCookieName"){
        popup.classList.add("hide");
        popup.classList.add("show");
        
    }else{
        popup.classList.add("show");
        popup.classList.add("hide");
    }
 }
 //Ici on verifie si le cookie existe quand la page se charge
 window.onload = () =>{
    setTimeout(() =>{
        checkCookie();
    }, 2000)
 }

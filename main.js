const form = document.querySelector("form"),
       emailField = form.querySelector(".email-field"),
       emailInput = emailField.querySelector(".email"),
       passField = form.querySelector(".create-password"),
       passInput = passField.querySelector(".password"),
       cpassField = form.querySelector(".confirm-password"),
       cpassInput = cpassField.querySelector(".cPassword");

    // Email valideren
    function checkEmail() {
        const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(!emailInput.value.match(emailpattern)){
        return emailField.classList.add("invalid"); //Toevoegen
        }
        emailField.classList.remove("invalid"); //Verwijderen
    }

    // Wachtwoord verbergen
    const eyeIcons = document.querySelectorAll(".show-hide");
    
    eyeIcons.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () =>{
            const pInput = eyeIcon.parentElement.querySelector("input"); //Selecteert de input van het wachtwoord

            if(pInput.type === "password"){
                 eyeIcon.classList.replace("bx-hide", "bx-show");
                 return (pInput.type = "text");
            }
                 eyeIcon.classList.replace("bx-show", "bx-hide");
                 (pInput.type = "password");
            
        });
    });

    // Wachtwoord valideren
    function createPass(){
        const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!passInput.value.match(passPattern)){
        return passField.classList.add("invalid"); //Toevoegen
        }
        passField.classList.remove("invalid"); //Verwijderen
    }

    // Wachtwoord valideren (Bevestiging)
function confirmPass(){
     if(passInput.value !== cpassInput.value || cpassInput.value === ""){
        return cpassField.classList.add("invalid");
     }
     return cpassField.classList.remove("invalid");
}

    form.addEventListener("submit", (e) =>{
     e.preventDefault () //preventing
     checkEmail();
     createPass();
     confirmPass();

     // Functie ophalen door middel van "key up"
     emailInput.addEventListener("keyup", checkEmail);
     passInput.addEventListener("keyup", createPass);
     cpassInput.addEventListener("keyup", confirmPass);

     if(
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cpassField.classList.contains("invalid")
        ) {
            location.href = form.getAttribute("action");

     }
    });
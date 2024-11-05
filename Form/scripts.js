const form = document.getElementById('formi')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
   const emailValue = email.value;
   const passwordValue = password.value;

   if (emailValue === '') {
    setErrorFor(email, 'Email Obrigatório')
   }
   else if(!checkEmail(emailValue)) {
    setErrorFor(email, 'Insira um Email Válido')
   }
   else{
    setSucessFor(email)
   }

   if (passwordValue === '') {
    setErrorFor(password,'Senha Obrigatória')
   }
   else {
    setSuccessFor(password);
   }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    formControl.className = "form-control error";
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
  
    // Adicionar a classe de sucesso
    formControl.className = "form-control success";
  }
  
  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
const form = document.getElementById('formi')
const email = document.getElementById('email')
const password2 = document.getElementById('password2')
const rpassword = document.getElementById('rpassword')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
   const emailValue = email.value;
   const password2Value = password2.value;
   const rpasswordValue = rpassword.value;

   if (emailValue === '') {
    setErrorFor(email, 'Email Obrigatório')
   }
   else if(!checkEmail(emailValue)) {
    setErrorFor(email, 'Insira um Email Válido')
   }
   else{
    setSucessFor(email)
   }

   if (password2Value === '') {
    setErrorFor(password2,'Senha Obrigatória')
   }
   else if (password2Value.length < 5) {
    setErrorFor(password2, 'A Senha deve no mínimo 5 caracteres')
   }
   else {
    setSuccessFor(password2);

   }

   if (rpasswordValue === "") {
    setErrorFor(rpassword, "A confirmação da senha é obrigatória.");
  } else if (rpassword !== password2Value) {
    setErrorFor(rpassword, "As senhas não conferem.");
  } else {
    setSuccessFor(rpassword);
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
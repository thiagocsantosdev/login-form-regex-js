
function strongPassValidator() {

   // Obtém o valor do campo de senha
   let passwordInput = document.getElementById('password1').value

   // Expressões regulares para verificar se há letras minúsculas, letras maiúsculas e números
   let lowercaseRegex = /[a-z]/
   let uppercaseRegex = /[A-Z]/
   let numberRegex = /[0-9]/

   // Elementos HTML para exibir os indicadores de letras minúsculas, letras maiúsculas, números e comprimento válido
   let hasLowercase = document.getElementById('letraMinuscula')
   let hasUppercase = document.getElementById('letraMaiuscula')
   let hasNumber = document.getElementById('numeros')
   let hasValidLength = document.getElementById('totalCaracters')

   // Botão de cadastro
   let btnCadastrar = document.getElementById('btnCadastrar')
 
   // Verifica se há letras minúsculas na senha e atualiza o estilo na página
   if (lowercaseRegex.test(passwordInput)) {
      hasLowercase.style.textDecoration = "line-through"
      hasLowercase.style.color ="gray"
   }else{
       hasLowercase.style.textDecoration="none"
       hasLowercase.style.color ="white"
   }

   // Verifica se há letras maiúsculas na senha e atualiza o estilo na página
   if (uppercaseRegex.test(passwordInput)) {
       hasUppercase.style.textDecoration = "line-through"
       hasUppercase.style.color ="gray"
    }else{
        hasUppercase.style.textDecoration="none"
        hasUppercase.style.color ="white"
    }

  // Verifica se há números na senha e atualiza o estilo na página
    if(numberRegex.test(passwordInput)){
       hasNumber.style.textDecoration = "line-through"
       hasNumber.style.color ="gray"
    }else{
       hasNumber.style.textDecoration="none"
       hasNumber.style.color ="white"
    }

    // Verifica se o comprimento da senha está entre 6 e 10 caracteres e atualiza o estilo na página
    if(passwordInput.length >= 6 && passwordInput.length <= 10 ){
       hasValidLength.style.textDecoration = "line-through"
       hasValidLength.style.color ="gray"
    }else{
       hasValidLength.style.textDecoration="none"
       hasValidLength.style.color ="white"
    }

    // Habilita ou desabilita o botão de cadastro com base nas validações da senha
    if (passwordInput.length >= 6 && passwordInput.length <= 10 && numberRegex.test(passwordInput) && uppercaseRegex.test(passwordInput) && lowercaseRegex.test(passwordInput)){
     btnCadastrar.disabled = false
    }else{
     btnCadastrar.disabled = true
    }
 }


 function userIdPass() {
   // Obtém o elemento do campo de usuário
   let userId = document.getElementById('inputUser')
   let valor = userId.value

   // Expressão regular para permitir apenas caracteres alfanuméricos
   let userRegex = /^[a-zA-Z0-9]+$/

   // Valida o valor do campo de usuário e remove caracteres inválidos
   if (!userRegex.test(valor)) {
     userId.value = valor.replace(/[^a-zA-Z0-9]+/g, '')
   }
 }



 

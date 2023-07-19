




function senhaForte() {


   let inputPass = document.getElementById('password1').value
 
   let passRegexMin = /[a-z]/
   let passRegexMai = /[A-Z]/
   let passRegexNum = /[0-9]/


   

   let letraMinuscula = document.getElementById('letraMinuscula')
   let letraMaiuscula = document.getElementById('letraMaiuscula')
   let numbers = document.getElementById('numeros')
   let totalCaracters = document.getElementById('totalCaracters')

   let btnCadastrar = document.getElementById('btnCadastrar')
 
   if (passRegexMin.test(inputPass)) {
      letraMinuscula.style.textDecoration = "line-through"
      letraMinuscula.style.color ="gray"
   }else{
       letraMinuscula.style.textDecoration="none"
       letraMinuscula.style.color ="white"
   }
   
   if (passRegexMai.test(inputPass)) {
       letraMaiuscula.style.textDecoration = "line-through"
       letraMaiuscula.style.color ="gray"
    }else{
        letraMaiuscula.style.textDecoration="none"
        letraMaiuscula.style.color ="white"

    }

    if(passRegexNum.test(inputPass)){
       numbers.style.textDecoration = "line-through"
       numbers.style.color ="gray"
    }else{
       numbers.style.textDecoration="none"
       numbers.style.color ="white"
    }

    if(inputPass.length >= 6 && inputPass.length <= 10 ){
       totalCaracters.style.textDecoration = "line-through"
       totalCaracters.style.color ="gray"
    }else{
       totalCaracters.style.textDecoration="none"
       totalCaracters.style.color ="white"
    }

    if (inputPass.length >= 6 && inputPass.length <= 10 && passRegexNum.test(inputPass) && passRegexMai.test(inputPass) && passRegexMin.test(inputPass)){
     btnCadastrar.disabled = false
    }else{
     btnCadastrar.disabled = true
    }
 }
 function userIdPass() {
   let userId = document.getElementById('inputUser')
   let valor = userId.value
   let userRegex = /^[a-zA-Z0-9]+$/

   if (!userRegex.test(valor)) {
     userId.value = valor.replace(/[^a-zA-Z0-9]+/g, '')
   }
 }



 

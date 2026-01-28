 

 let spanElem = document.querySelector('.counter')
 let inputElem = document.querySelector('.inputElem')
 inputElem.addEventListener('keyup', function (event) {  
    let result = inputElem.getAttribute('maxlength') - inputElem.value.length
    spanElem.innerHTML= result
 })
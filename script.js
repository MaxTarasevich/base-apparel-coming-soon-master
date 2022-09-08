const form = document.querySelector(`.hero__form`)
const input = document.querySelector(`.email`)
const btn  = document.querySelector(`.btn`)
const error = document.querySelector(`.error`)
const erroeIcon = document.querySelector(`.error__icon`)

form.addEventListener(`submit`,(e)=>{
    if(!input.validity.valid) {
        showError()
       e.preventDefault()
      }
})

input.addEventListener('input', ()=> {
  
    if (input.validity.valid) {
        error.textContent = ''
        input.classList.remove(`invalid`)
        erroeIcon.style.display = 'none'
    } else {
        showError();
        input.classList.add(`invalid`)
    }
  });

  function showError() {
    if(input.validity.valueMissing) {
      error.textContent = 'You need to enter an e-mail address.'
      erroeIcon.style.display = 'block'
    } else if(input.validity.typeMismatch) {
      error.textContent = 'Please provide a valid email'
      erroeIcon.style.display = 'block'
    } 
}
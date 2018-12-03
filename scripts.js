
var inputText = document.querySelector('#input-text--js')
document.querySelector('.form').addEventListener('submit', submitForm);
document.querySelector('#input-text--js').addEventListener('keyup', enableButton);



function enableButton() {
  var inputValidation = /[^A-Za-z]/;
  if (inputText.value.length === 0 || inputValidation.test(inputText.value) || inputText.value.length > 10) {
    document.querySelector('#submit--js').disabled = true;
  } else {
    document.querySelector('#submit--js').disabled = false;
  }
}

function submitForm(event) {
  event.preventDefault()
  var headerTitle = document.querySelector('#header__title--js');
  headerTitle.innerText = inputText.value;
  inputText.value = '';
}

const jsInput = document.querySelector('.js-iput');
const jsBtn = document.querySelector('.js-btn');
const jsList = document.querySelector('.js-list')
function addList(){
  jsList.innerHTML += `<li class=" js-element">${jsInput.value} <span>&#215;</span></li>`;
  const jsElement = document.querySelectorAll('.js-element');
  console.log(jsElement)
}
jsBtn.addEventListener('click', ()=>{
  addList();
  jsInput.value = '';
})
function pressKeybord (event){
  if(event.key === 'Enter'){
    addList();
    jsInput.value = '';
  }
}
jsInput.addEventListener('keydown', pressKeybord)
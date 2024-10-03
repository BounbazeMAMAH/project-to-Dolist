const jsInput = document.querySelector('.js-iput');
const jsBtn = document.querySelector('.js-btn');
const jsList = document.querySelector('.js-list')
function addList(){

  //ne pas enregistrer une ligne vide
  if(jsInput.value.trim()===''){
    return;
  }

  //create li
  const newList = document.createElement('li');
  newList.innerHTML = `${jsInput.value} <span class="js-span">&#215;</span>`
  jsList.appendChild(newList);
  const jsSpan = newList.querySelector('.js-span');

  //remove list by click on close button
  jsSpan.addEventListener('click', ()=>{
    newList.remove()
  })

  //line-through on do list
  newList.addEventListener('click', ()=>{
    if(newList.className !== 'select'){
      newList.classList.add('select')
    }else{
      newList.classList.remove('select')
    }
  })
  
}

// save systeme
function saveData(){
  localStorage.setItem('data', jsList.innerHTML)
}
function showTask(){
  jsList.innerHTML = localStorage.getItem('data')
}


jsBtn.addEventListener('click', ()=>{
  addList();
  jsInput.value = '';
})

//valid with enter on keybord
function pressKeybord (event){
  if(event.key === 'Enter'){
    addList();
    jsInput.value = '';
  }
}
jsInput.addEventListener('keydown', pressKeybord)



window.view = {};
//Función para que aparezca el input para poner el nombre a la lista
window.view.newList = () => {
  document.getElementById('addList').innerHTML = `
  <div class="list d-inline-block mb-3" id="firstAdd">
    <input type="text" placeholder="Introduzca el título de la lista..." id="listTitle">
    <button type="button" class="btn btn-success ml-1 mb-2" id="btnAddList" onclick="window.view.addList()">Añadir lista</button>
    <button type="button" class="btn" id="btnBack" onclick="window.view.goBack()">X</button>
  </div>
  `
}

//Función para volver al boton de inicio
window.view.goBack = () => {
  document.getElementById('addList').innerHTML = `
  <button class="btn" id="inputTitle" onclick="window.view.newList()">+ Añada una lista</button>
  `
}

//Función para agregar el nombre de la lista y dar la opción de agregar una tarjeta
window.view.addList = () => {
  let header = document.getElementById('listTitle').value;
  let idNum = document.getElementsByClassName('list').length;
  console.log(idNum)
  if (listTitle.value !== '') {
    document.getElementById('cardBox').innerHTML += `
  <div class="list d-inline-block" id="cardList${idNum}">
    <h6 class="pt-2 pl-2 ml-1">${header}</h6>
    <div id="newCard${idNum}"></div>
    <div id="newSpace${idNum}">
      <p id="newTask${idNum}" class="newTask pl-1 mb-2" onclick="window.view.addTask(${idNum})">+ Añada una tarjeta</p>
    </div>    
  </div>
  `
  document.getElementById('listTitle').value = '';
  } else { }
}

//Función que despliega el textarea para escribir la tarjeta  
window.view.addTask = (idNum) => {
  document.getElementById('newSpace'+idNum).innerHTML = `
    <input type="text" id="cardInput" placeholder="Introduzca un título para esta tarjeta...">
    <button type="button" class="btn btn-success ml-1 mb-2" onclick="window.view.add(${idNum})">Añadir tarjeta</button>
    <button type="button" class="btn" id="btnGoBack" onclick="window.view.goBackOnList(${idNum})">X</button>
  `
}

//Función para volver a la opción de añadir una tarjeta
window.view.goBackOnList = (idNum) => {
  document.getElementById('newSpace'+idNum).innerHTML = `
  <div id="newTask" class="newAddCard pl-1 mb-2" onclick="window.view.addTask(${idNum})">+ Añada una tarjeta</div>
  `
}


//Función para agregar la tarjeta a la lista
window.view.add = (idNum) => {
  if (cardInput.value !== '') {
    let card = document.getElementById('cardInput').value;
    document.getElementById('newCard'+idNum).innerHTML += `
  <div class="container-fluid pl-2 pr-2" id="thisCard${idNum}">
    <p class="list-card p-1">${card}</p>
  </div>
  `
  document.getElementById('cardInput').value = '';
  } else { }
}
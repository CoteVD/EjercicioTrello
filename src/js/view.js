window.view = {};
//Boton del comienzo para aparecer el input
document.getElementById('cardBox').innerHTML = `
<button class="btn" id="inputTitle" onclick="window.view.newList()">+ Añada una lista</button>
`

//Función para que aparezca el input para poner el nombre a la lista
window.view.newList = () => {
  document.getElementById('cardBox').innerHTML = `
  <div class="list mb-3" id="firstAdd">
    <input type="text" placeholder="Introduzca el título de la lista..." aria-label="Username" aria-describedby="basic-addon1" id="listTitle">
    <button type="button" class="btn btn-success ml-1 mb-0" id="btnAddList" onclick="window.view.addList()">Añadir lista</button>
    <button type="button" class="btn" id="btnBack" onclick="window.view.goBack()">X</button>
  </div>
  `
}

//Función para volver al boton de inicio
window.view.goBack = () => {
  document.getElementById('cardBox').innerHTML = `
  <button class="btn" id="inputTitle" onclick="window.view.newList()">+ Añada una lista</button>
  `
}

//Función para agregar el nombre de la lista y dar la opción de agregar una tarjeta
window.view.addList = () => {
  let header = document.getElementById('listTitle').value;
  if (listTitle.value !== '') {
    document.getElementById('cardBox').innerHTML = `
  <div class="list" id="cardList">
    <h6 class="text-white pt-2 pl-2">${header}</h6>
    <div id="newCard"></div>
    <div id="newTask" class="pl-1 mb-2" onclick="window.view.addTask()">+ Añada una tarjeta</div>
  </div>
  `
  } else { }
}

//Función que despliega el textarea para escribir la tarjeta  
window.view.addTask = () => {
  document.getElementById('newTask').innerHTML = `
  <div class="form-group" id="cardTitle">
    <input type="text" placeholder="Introduzca un título para esta tarjeta..." aria-label="Username" aria-describedby="basic-addon1" id="cardInput">
    <button type="button" class="btn btn-success" onclick="window.view.add()">Añadir tarjeta</button>
    <button type="button" class="btn" id="btnGoBack" onclick="window.view.goBackOnList()">X</button>
  </div>
  `
}

window.view.goBackOnList = () => {
  document.getElementById('newTask').innerHTML = `
  <div id="newTask" class="pl-1" onclick="window.view.addTask()">+ Añada una tarjeta</div>
  `
}


//Función para agregar la tarjeta a la lista
window.view.add = () => {
  /*if (cardInput.value !== '') {*/
    let card = document.getElementById('cardInput').value;
    document.getElementById('newCard').innerHTML += `
  <div class="container">
    <p class="list-card">${card}</p>
  </div>
  `
  /*} else { }*/
}
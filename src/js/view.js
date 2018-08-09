window.view = {};

//Función para que aparezca el input para poner el nombre a la lista
window.view.newList = () => {
  document.getElementById('inputTitle').style.display = 'none';
  document.getElementsByClassName('addInput').innerHTML = `
  <div class="input-group mb-3" id="firstAdd">
    <input type="text" class="form-control" placeholder="Introduzca el título de la lista..." aria-label="Username" aria-describedby="basic-addon1" id="listTitle">
    <button type="button" class="btn btn-success" id="btnAddList" onclick="window.view.addList()">Añadir lista</button>
  </div>
  `
}

//Función para agregar el nombre de la lista y dar la opción de agregar una tarjeta
window.view.addList = () => {
  document.getElementById('firstAdd').style.display = 'none';
  const header = document.getElementById('listTitle').value;
  document.getElementById('addInput').innerHTML = `
  <h6>${header}</h6>
  <br>
  <p id="newTask" onclick="window.view.addTask()">+ Añada una tarjeta</p>
  `
}

//Función que despliega el textarea para escribir la tarjeta  
window.view.addTask = () => {
  document.getElementById('newTask').style.display = 'none';
  document.getElementById('textAddList').innerHTML = `
  <div class="form-group">
    <textarea class="form-control" rows="5" id="newText"></textarea><br>
    <button type="button" class="btn btn-success" onclick="window.view.add()">Añadir tarjeta</button>
  </div>
  `
}

//Función para agregar la tarjeta a la lista
window.view.add = () => {

  document.getElementById('newList').style.display = 'block';
  const card = document.getElementById('newText').value;
  document.getElementById('textAddList').style.display = 'none';
  const list = document.createElement('div');
  cards.appendChild(list);
  list.innerHTML += `
  <div class="container">
    <p class="list-group-item">${card}</p>
  </div>
  `
}

//Función ocultar el texto de "+ Añada otra tarjeta" del HTML y que muestre nuevamente el Textarea
window.view.addCard = () => {

  document.getElementById('newList').style.display = 'none';
  document.getElementById('textAddList').style.display = 'block';
}
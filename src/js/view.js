window.view = {};

window.view.addList = () =>{
  let contentAddList = document.getElementById('contentAddList');
  contentAddList.innerHTML = `
  <input type="text" id="titleList" placeholder="Ingresar nombre de lista"></input>
  <button onclick="window.view.addNewTitleList()">Añadir nueva lista</button>
  <button onclick="window.view.resetContentList()">X</button>
  `;
}

window.view.resetContentList=()=>{
  let contentAddList = document.getElementById('contentAddList');
  contentAddList.innerHTML = `
  <button class="btn" onclick="window.view.addList()">Añadir lista</button>
  `;
}

window.view.addNewTitleList=()=>{
  let titleList = document.getElementById('titleList').value;
  let contentTitleList = document.getElementById('contentTitleList');
  contentTitleList.innerHTML = `
  <div>
    <h6>${titleList}</h6>
    <div id="textArea">
    <button onclick="window.view.addNewCard()">+ Añadir nueva tarea</button>
    </div>
    
  </div>
  `
}

window.view.addNewCard =()=>{
  let textArea = document.getElementById('textArea');
  textArea.innerHTML = `
  <textarea placeholder="Escribe tu mierda aqui"></textarea>
  <button class="btn">Ingresar texto del textarea</button>
  `
}
/*
//Función para que aparezca el input para poner el nombre a la lista
window.view.newList = () => {
  document.getElementById('addInput').innerHTML = `
  <div class="input-group mb-3" id="firstAdd">
    <input type="text" class="form-control" placeholder="Introduzca el título de la lista..." aria-label="Username" aria-describedby="basic-addon1" id="listTitle">
    <button type="button" class="btn btn-success" id="btnAddList" onclick="window.view.addList()">Añadir lista</button>
  </div>
  `
}

//Función para agregar el nombre de la lista y dar la opción de agregar una tarjeta
window.view.addList = () => {
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
*/
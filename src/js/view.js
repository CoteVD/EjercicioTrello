window.view = {};
window.view.newList = () => {
  document.getElementById('inputTitle').style.display = 'none';
  document.getElementById('addInput').innerHTML = `
  <div class="input-group mb-3" id="firstAdd">
    <input type="text" class="form-control" placeholder="Introduzca el título de la lista..." aria-label="Username" aria-describedby="basic-addon1" id="listTitle">
    <button type="button" class="btn btn-success" id="btnAddList" onclick="window.view.addList()">Añadir lista</button>
  </div>
  `
}

window.view.addList = () => {
  document.getElementById('firstAdd').style.display = 'none';
  const header = document.getElementById('listTitle').value;
  document.getElementById('addInput').innerHTML = `
  <h6>${header}</h6>
  <br>
  <p id="newTask" onclick="window.view.addTask()">+ Añada una tarjeta</p>
  `
}

window.view.addTask = () => {
  document.getElementById('newTask').style.display = 'none';
  document.getElementById('textAddList').innerHTML = `
  <div class="form-group">
    <textarea class="form-control" rows="5" id="newText"></textarea><br>
    <button type="button" class="btn btn-success" onclick="window.view.add()">Añadir tarjeta</button>
  </div>
  `
}

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

window.view.addCard = () => {
  document.getElementById('newList').style.display = 'none';
  document.getElementById('textAddList').style.display = 'block';
}


newList = () => {
  document.getElementById('topInput').style.display = 'none';
  document.getElementById('addInput').innerHTML = `
  <div class="input-group mb-3" id="firstAdd">
    <input type="text" class="form-control" placeholder="Introduzca el título de la lista..." aria-label="Username" aria-describedby="basic-addon1" id="listTitle">
    <button type="button" class="btn btn-success" id="btnAddList" onclick="addList()">Agregar lista</button>
  </div>
  `
}

addList = () => {
  document.getElementById('firstAdd').style.display = 'none';
  const header = document.getElementById('listTitle').value;
  document.getElementById('addInput').innerHTML = `
  <h6>${header}</h6>
  <br>
  <p id="newTask" onclick="addTask()">+ Añadir tarjeta...</p>
  `
}

addTask = () => {
  document.getElementById('newTask').style.display = 'none';
  document.getElementById('cardList').innerHTML = `
  <div class="form-group">
    <textarea class="form-control" rows="5" id="newText"></textarea><br>
    <button type="button" class="btn btn-success" onclick="add()">Añadir</button>
  </div>
  `
}

add = () => {
  const list = document.getElementById('newText').value;
  document.getElementById('cardList').style.display = 'none';
  document.getElementById('cards').innerHTML = `
  <div class="list-group-item">${list}</div>
  <p id="newList" onclick="addCard()">+ Añadir otra tarjeta</p>
  `
}

addCard = () => {
  document.getElementById('newList').style.display = 'none';
  document.getElementById('cardList').style.display = 'block';
}


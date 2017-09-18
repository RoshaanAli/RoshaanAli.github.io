function deleteAll() {
  document.getElementById('list').innerHTML = '';
}















function add() {
  var getInput = document.getElementById('inputTxtBox').value;
  var newInput = document.createElement('li');
  var createInput = document.createTextNode(getInput);

  var img = document.createElement('img');
 img.classList.add('cross')
  img.src = 'cross.png';
  img.onclick = function () {
    var del = this.parentNode;
    var dlt = del.parentNode;
    dlt.removeChild(del);
  };

  newInput.appendChild(img);
  newInput.appendChild(createInput);
  if (getInput === '') {
    alert('Please write something');
  }
  else {
    document.getElementById('list').appendChild(newInput);
  }
  document.getElementById('inputTxtBox').value = "";




}

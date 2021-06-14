const form = document.getElementById('addForm');
const listItem = document.getElementById('items');
const filter = document.getElementById('filter');

//adding event to form
form.addEventListener('submit', addItem);
//deleting li
listItem.addEventListener('click', removeItem);
//adding event to filter(in search)
filter.addEventListener('keyup', searchItem);


//fucntion for addItem
function addItem(e){
  e.preventDefault();

  //getting value from the submit
  const newItem = document.getElementById('item').value;

  //creating new li element
  const li = document.createElement('li');
  //adding class to li element
  li.className = 'list-group-item';

  //adding value to the li element
  li.appendChild(document.createTextNode(newItem));

  //creating button element
  const deleteBtn = document.createElement('button');
  //adding class to button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //adding text to the delete button
  deleteBtn.appendChild(document.createTextNode('X'));

  //adding button to the li
  li.appendChild(deleteBtn);
  
  //adding li to the ul
  listItem.appendChild(li);
}

//fucntion for removeItem
function removeItem(e){
  if (e.target.classList.contains('delete')){
    if (confirm("Are you sure?")){
      const li = e.target.parentElement;
      listItem.removeChild(li);
    }
  }
}

function searchItem(e){
  const text = e.target.value.toLowerCase();

  //getting values from the list
  const items = listItem.getElementsByTagName('li');

  //converting to array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}
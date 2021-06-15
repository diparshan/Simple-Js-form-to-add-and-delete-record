const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//adding event listner to form 
form.addEventListener('submit', addItem);
//adding event listner to delete item
itemList.addEventListener('click', removeItem);
//adding event listner to search
filter.addEventListener('keyup', searchItem);

//addItem function
function addItem(e) {
  e.preventDefault();

  //getting value from the submit area
  const newItem = document.getElementById('item').value;

  //creating li element
  const li = document.createElement('li');
  //adding class to li element
  li.className = 'list-group-item';
  //adding text to the li element
  li.appendChild(document.createTextNode(newItem));

  //creating button
  const deleteBtn = document.createElement('button');
  //adding class to button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //inserting text to delete button
  deleteBtn.appendChild(document.createTextNode('X'));

  //adding button to the li element
  li.appendChild(deleteBtn);

  //adding li to the items
  itemList.appendChild(li);
};

//removeItem function
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const deleteItem = e.target.parentElement;
      itemList.removeChild(deleteItem);
    }
  }
};

//searchItem function
function searchItem(e) {
  //getting value from the search
  const searchItem = e.target.value.toLowerCase();

  //getting items from the list
  const items = document.getElementsByTagName('li');

  //since items is in HTMLCOLLECTION, we need to convert it to array
  //converting to array
  Array.from(items).forEach(function (item) {
    //getting name of the item
    const itemName = item.firstChild.textContent;
    
    //checking if itemname matches to the searchItem
    if (itemName.toLowerCase().indexOf(searchItem) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}
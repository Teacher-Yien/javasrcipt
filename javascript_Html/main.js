const itemList = document.getElementById('item-list');
const form = document.getElementById('input-form');

// Read items from local storage and display them
const items = JSON.parse(localStorage.getItem('items')) || [];

const renderItems = () => {
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px;">
            <span>${item.name}</span>
            <button data-id="${item.id}" class="delete-btn">Delete</button>
        `;
        itemList.appendChild(li);
    });
}

renderItems();

// Add item to local storage and display list
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').value;
    const id = Date.now(); // Generate a unique ID
    
    const newItem = { id, name, image };
    items.push(newItem);
    
    localStorage.setItem('items', JSON.stringify(items));
    
    renderItems(); // Refresh the item list
    form.reset();
});

// Delete item from local storage and update list
itemList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        const itemId = e.target.getAttribute('data-id');
        const filteredItems = items.filter(item => item.id !== parseInt(itemId));
        localStorage.setItem('items', JSON.stringify(filteredItems));
        items = filteredItems;
        renderItems(); // Refresh the item list
    }
});
const list = JSON.parse(localStorage.getItem('list'))
//     [
//     {
//         id: 'id1',
//         title: 'Learn JS',
//         done: true
//     },
//     {
//         id: 'id2',
//         title: 'Learn React',
//         done: false
//     },
//     {
//         id: 'id3',
//         title: 'Get a job!',
//         done:false
//     }
// ];

const listElement = document.getElementById('list');
const toDoInput = document.getElementById("todoInput");

function render() {
    listElement.innerHTML = null

    list.forEach(el => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', el.done ? 'done' : 'progress');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);

        const buttonItem = document.createElement('button');
        buttonItem.setAttribute('id', el.id)
        const buttonText = document.createTextNode('Done');
        buttonItem.appendChild(buttonText);
        listItem.appendChild(buttonItem)

        listElement.appendChild(listItem);
    });
}
render();

listElement.addEventListener('click', (event) => {
if (event.target.nodeName === 'BUTTON') {
    const id = event.target.id;
    for(let i = 0; i < list.length; i++) {
        if (list[i].id === id) list[i].done = !list[i].done; //будет менять действие на противоположное
        }
    updateLocalStorage();
    render();
    }
})

function addToList(){
   const todoInputValue = toDoInput.value;

   list.push({
       id: Math.random().toString(),
       title: todoInputValue,
       done: false
    });

   updateLocalStorage();
   // listElement.innerHTML = '' //to clear list
   render();

    // to clear input value
    toDoInput.value = '';
}

function updateLocalStorage() {
    localStorage.setItem('list', JSON.stringify(list))
}
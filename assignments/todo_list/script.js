let todos = [];
var addToDoButton = document.querySelector('button');
// var inputfield = document.querySelector('input');
var todo = document.querySelector('.todos')
// var i = 0;
let drop = document.querySelector("#dropdown");
addToDoButton.addEventListener("click", work);


async function main() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        todos = json.slice(0, 10);
        console.log(todos);
        todos.forEach((todom,index)=>{
            const newTodo = document.createElement('p');
            newTodo.setAttribute('key', index);
            newTodo.innerHTML = todom.title
            todo.appendChild(newTodo);
        })
    }catch(e) {
        console.log(e);
    }
}

function work(){
    if(drop.value ==="list"){
        main()
    }else if(drop.value === "completed"){
        completed()
    }else if(drop.value === "pending"){
        pending()
    }
}

function completed(){
    todo.innerHTML = ""
    todos.filter(todom => todom.completed).forEach((todom,index)=>{
        const newTodo = document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML = todom.title
        todo.appendChild(newTodo);
    })

}

function pending(){
    todo.innerHTML = ""
    todos.filter(todom => !todom.completed).forEach((todom,index)=>{
        const newTodo = document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML = todom.title
        todo.appendChild(newTodo);
    })
}
main()
var input=document.querySelector('input');
var button=document.querySelector('button');
var todoDiv=document.querySelector('div.todos');

let count=0;

button.addEventListener('click', function(){
    console.log(input.value);
    if(input.value) {
        var newTodo=document.createElement('p');
        newTodo.innerHTML=input.value;
        newTodo.setAttribute('key',count++);
        todoDiv.appendChild(newTodo);
        newTodo.addEventListener('click',function(e){
            todoDiv.removeChild(e.target);
        })
        input.value="";
    }
})
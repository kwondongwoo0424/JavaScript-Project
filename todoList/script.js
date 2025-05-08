const form = document.querySelector("#inputForm")
const input_Box = document.querySelector("#inputBox")
const submit = document.querySelector("#submit")
const ul = document.querySelector('#ul')
const toDos = []

function deleteTodo(event) {
    const delLi=event.target.parentElement
    delLi.remove();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = '삭제'
    span.innerText = newTodo;
    button.addEventListener('click', deleteTodo)
    li.appendChild(span);
    li.appendChild(button)
    ul.appendChild(li);
}

function onSubmit(event){
    event.preventDefault(); 
    toDos.push(input_Box.value);
    paintTodo(input_Box.value);
    input_Box.value="";
    console.log(toDos);
}

form.addEventListener('submit',onSubmit);
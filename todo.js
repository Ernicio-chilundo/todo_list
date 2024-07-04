'use strict '

let banco =[
    {"tarefa":"Estudar JS", "status": ""},
    {"tarefa":"netflix", "status": "checked"}
]

const criarItem =(tarefa,status)=>{
    const item = document.createElement("label")
    item.classList.add("todo_item")
    item.innerHTML = `
        <input type ="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="x">
    `
    document.getElementById("todoList").appendChild(item)
}

const limparTarefas = ()=>{
    const todoList = document.getElementById("todoList")
    while(todoList.firstChild)
        todoList.remove(todoList.lastChild)
}

const atualizarTela = ()=>{
    limparTarefas()
    banco.forEach(item => criarItem(item.tarefa, item.status))
}
document.getElementById("newItem").addEventListener("keypress",)

atualizarTela()
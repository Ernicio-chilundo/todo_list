'use strict '

// let banco =[
//     {"tarefa":"Estudar JS", "status": ""},
//     {"tarefa":"netflix", "status": "checked"}
// ]

const getBanco =()=> JSON.parse(localStorage.getItem("todoList")) ?? []

const criarItem =(tarefa,status,indice)=>{
    const item = document.createElement("label")
    item.classList.add("todo_item")
    item.innerHTML = `
        <input type ="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="x" data-indice=${indice}>
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
    banco.forEach((item,indice) => criarItem(item.tarefa, item.status, indice))
}
const inserirItem =(evento)=>{
    const tecla =evento.key
    const texto = evento.target.value
    if(tecla == "Enter"){
        banco.push({"tarefa": texto, "status":""})
        atualizarTela()
        evento.target.value=""
    }
}

const removerItem = (indice)=>{
    banco.splice(indice, 1)
    atualizarTela()
}

const atualizarItem=(indice)=>{
    banco[indice].status = banco[indice].status == ''? "checked": ""
    atualizarTela()
}

const clickItem =(evento)=>{
    const elemento = evento.target
    if(elemento.type === "button"){
       const indice = elemento.dataset.indice
        removerItem(indice)
    }else if(elemento.type === "checkbox"){
        const indice = elemento.dataset.indice
        atualizarItem(indice)
    }
}
document.getElementById("newItem").addEventListener("keypress",inserirItem)
document.getElementById("todoList").addEventListener("click",clickItem)

atualizarTela()
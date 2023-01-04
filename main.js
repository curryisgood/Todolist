import {loadPages, addPages, deletePages, savePage} from './store.js'
import {createLiEle, createInputEle,createSpanEle,createDelBtn,createEditBtn } from './craeteDom/createElement.js'

let id = 0;
const todo = document.getElementById("todoContainer");
const inputText = document.getElementById('todoText');
document.addEventListener('DOMContentLoaded', () => {
    const pages = loadPages();
    pages.map((page)=>{
        const pageEl = createTodoItem(page);
        console.log(page.id, page.page)
        todo.appendChild(pageEl);
    })
});

function reset(){
    alert('초기화');
    localStorage.clear();
    location.reload();
}

document.querySelector('#clearBtn').addEventListener('click', ()=>{
    reset();
});


document.querySelector('#submitTodo').addEventListener("click", ()=>{
    const getTodoItemElement = todoItemElement();
    const getTodoItem = createTodoItem(getTodoItemElement);
    todo.appendChild(getTodoItem);
    savePage();   
    inputText.value=' ';
    
});


function createTodoItem(todoItemData){
    const item = createLiEle();

    if (inputText.value==' '){
        inputText.value='Text'
    }
    // input 
    const todoIteminput = createInputEle(item);
    todoIteminput.value = inputText.value||todoItemData.page;
    if(inputText.value){
        todoItemData.page = todoIteminput.value;
    }

    // 투두리스트 내용
    const todoItemText = createSpanEle(item);
    todoItemText.textContent = todoItemData.page;


    // 삭제 버튼
    const delBtn = createDelBtn(item);
    // 수정 버튼
    const editBtn = createEditBtn(item);


    
    // 삭제 이벤트 
    delBtn.addEventListener('click',()=>{
        deletePages(todoItemData.page);
        item.remove();
    })

    // 수정 이벤트
    todoItemText.addEventListener('dblclick',()=>{
        FilpHiddenState(todoIteminput, todoItemText, delBtn, editBtn);
    })
    
    editBtn.addEventListener('click',()=>{
        FilpHiddenState(todoIteminput, todoItemText, delBtn, editBtn);
        todoItemData.page = todoIteminput.value;
        todoItemText.textContent=todoItemData.page;
        savePage();
    });
    
    return item;
}

const FilpHiddenState=(todoIteminput, todoItemText, delbtn, editbtn)=>{
    todoIteminput.hidden=!(todoIteminput.hidden);
    todoItemText.hidden=!(todoItemText.hidden);

    delbtn.hidden=!(delbtn.hidden);
    editbtn.hidden=!(editbtn.hidden);
}

function todoItemElement(){
    const createTodoItemElement ={
        page : 'Text'
    };
    addPages(createTodoItemElement);
    return createTodoItemElement;
}

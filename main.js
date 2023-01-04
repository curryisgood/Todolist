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
    const getTodoItem = createTodoItem(ele);
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
    const input = createInputEle(item);
    input.value = inputText.value||todoItemData.page;
    if(inputText.value){
        todoItemData.page = input.value;
    }

    // 투두리스트 내용
    const span = createSpanEle(item);
    span.textContent = todoItemData.page;


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
    span.addEventListener('dblclick',()=>{
        FilpHiddenState(input, span, delBtn, editBtn);
    })
    
    editBtn.addEventListener('click',()=>{
        FilpHiddenState(input, span, delBtn, editBtn);
        todoItemData.page = input.value;
        span.textContent=todoItemData.page;
        savePage();
    });
    
    return item;
}

const FilpHiddenState=(input, span, delbtn, editbtn)=>{
    input.hidden=!(input.hidden);
    span.hidden=!(span.hidden);

    delbtn.hidden=!(delbtn.hidden);
    editbtn.hidden=!(editbtn.hidden);
}

function todoItemElement(){
    const createTodoItemElement ={
        id : id++,
        page : 'Text'
    };
    addPages(createTodoItemElement);
    return createTodoItemElement;
}

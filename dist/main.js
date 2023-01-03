import {loadPages, addPages, deletePages, savePage} from './store.js'
import {createInputEle} from './createinput.js'
import {createSpanEle} from './createspan.js'
import {createDelBtn, createEditBtn} from './createbtn.js'


const todo = document.getElementById("todoContainer");
const listText = document.getElementById('todoText');
document.addEventListener('DOMContentLoaded', () => {
    const pages = loadPages();
    console.log("~~~~~~~");
    pages.map((page)=>{
        const pageEl = createElement(page);
        todo.appendChild(pageEl);
    })
});


document.querySelector('#clearBtn').addEventListener('click', ()=>{
    alert('초기화');
    localStorage.clear();
    location.reload();
});


document.querySelector('#submitTodo').addEventListener("click", ()=>{
    const ele = info();
    const list = createElement(ele);

    todo.appendChild(list);
    savePage();   
    listText.value=' ';
    
});


function createElement(info){
    const listEl = document.createElement('li');

    // input 
    const input = createInputEle(listEl);
    if (listText.value==' '){
        listText.value='Text'
    }

    input.value = listText.value||info.page;
    if(listText.value){
        info.page = input.value;
    }

    // 투두리스트 내용
    const span = createSpanEle(listEl);
    span.textContent = info.page;


    // 삭제 버튼
    const delBtn = createDelBtn(listEl);
    // 수정 버튼
    const editBtn = createEditBtn(listEl);

    // 삭제 이벤트 
    delBtn.addEventListener('click',()=>{
        deletePages(info.page);
        listEl.remove();
        
    })

    // 수정 이벤트
    span.addEventListener('dblclick',()=>{
        changeState(input, span, delBtn, editBtn);
    })
    
    editBtn.addEventListener('click',()=>{
        changeState(input, span, delBtn, editBtn);
        info.page = input.value;
        span.textContent=info.page;
        savePage();
    });
    
    return listEl;
}

const changeState=(input, span, delbtn, editbtn)=>{
    input.hidden=!(input.hidden);
    span.hidden=!(span.hidden);

    delbtn.hidden=!(delbtn.hidden);
    editbtn.hidden=!(editbtn.hidden);
}

function info(){
    const eleInfo ={
        page : 'Text'
    };
    addPages(eleInfo);
    return eleInfo;
}

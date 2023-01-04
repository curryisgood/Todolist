export const createLiEle=()=>{
    const listElLi = document.createElement('li');
    return listElLi;
}


export const createInputEle=(listEl)=>{
    const listElInputBox = document.createElement('input');
    listElInputBox.hidden=true;
    listEl.append(listElInputBox);

    return listElInputBox;   
}

export const createSpanEle=(listEl)=>{
    const listElContent = document.createElement('span');
    listElContent.textContent= listEl.id;
    listEl.append(listElContent);

    return listElContent;
}


export const createDelBtn=(listEl)=>{
    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
    delBtn.setAttribute('data-btnname', 'del');

    listEl.append(delBtn);
    return delBtn;
}

export const createEditBtn=(listEl)=>{
    const editBtn = document.createElement('button');
    editBtn.textContent='수정';
    editBtn.hidden=true;
    editBtn.setAttribute('data-btnname','edit');

    listEl.append(editBtn);
    return editBtn;
}

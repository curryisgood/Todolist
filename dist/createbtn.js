
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
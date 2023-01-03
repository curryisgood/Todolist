
export const createInputEle=(listEl)=>{
    const listElInputBox = document.createElement('input');
    listElInputBox.hidden=true;
    listEl.append(listElInputBox);

    return listElInputBox;
    
}
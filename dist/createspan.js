

export const createSpanEle=(listEl)=>{
    const listElContent = document.createElement('span');
    listElContent.textContent= listEl.id;
    listEl.append(listElContent);

    return listElContent;
}

let pages=[];

export function savePage(){
    window.localStorage.setItem('pages', JSON.stringify(pages));    // 직렬화
} 

export function loadPages(){
    const data = localStorage.getItem('pages');
    if(!data){
        return pages;
    }
    pages = JSON.parse(data);   // 역직렬화
    return pages;
}

export const addPages=(page)=>{
    pages.push(page);
    savePage();
}

export const deletePages=(target)=>{
    const index = pages.findIndex(function(data){return data.page==target})
    pages.splice(index,1);
    savePage();

    return target;
    
}

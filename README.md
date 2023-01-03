test

<ul class="contains-task-list">
  <li class="task-list-item"> javascript를 사용한 todolist입니다.</li>
  <li class="task-list-item"> localStorage를 통해 브라우저에 리스트를 저장합니다. </li>
  <li class="task-list-item"> 프론트 리스트는 page(text 정보가 담긴 속성)의 변경 사항을 갱신하며,<br/>
  localStorage는 이를 토대로 브라우저에 데이터를 저장합니다.</li>
</ul>
 <br/>
<pre class="nottranslate">
┌── 📂 dist
│   ├── 📝 createbtn.js     // 삭제, 수정 버튼 생성
│   ├── 📝 createinput.js   // text 수정 시 나타나는 input 생성
│   ├── 📝 createspan.js    // text를 보이는 span 생성
│   ├── 📝 main.js 
│   └── 📝 store.js         // localstorage 관련 기능
├── 📂 node_modules
├── 📝 index.html
├── 📝 package-lock.json
└── 📝 package.json
</pre>
 <br/>
 <br/>

과제의 진행 정도에 따라 점진적으로 1. 기초지식 학습 2. 기본 기능 구현 3. 리팩토링 순으로 고려했습니다.
 <pre class="nottranslate">
1. 기초지식 학습의 과정
    - <li> 태그의 기호 삭제
    - const와 function의 차이
    - localstorage              
2. 기본 기능 구현
    - 초기에는 function create() 하나에 모든 기능을 넣어 구현했습니다.
    - 삭제 기능 : 파이썬처럼 pop() 삭제 함수에 인덱스를 설정할 수 있을 줄 알았으나 이로 인해 오류가 발생했습니다.
                 인덱스는 findIndex()를 사용하여 찾은 후 삭제는 splice로 대체하였습니다.
3. 리팩토링
    - 별개의 js파일을 생성하여 기능(요소의 생성)에 따라 분리하였습니다.
</pre>

아쉬운 점
 <pre class="nottranslate">
- 객체를 사용하지 않고 text 정보를 저장할 방법에 대한 여부
- 버튼클릭 이벤트 분리 실패
- savePage()를 적합한 곳에 사용한 것이 맞는지
- input.value와 span.textContent, page의 값 교환 코드들이 주먹구구식인 느낌
- changeState의 매개변수가 너무 많은 것
</pre>

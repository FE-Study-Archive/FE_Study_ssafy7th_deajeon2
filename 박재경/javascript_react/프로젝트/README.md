# 스터디: 리액트를 활용하여 웹사이트 제작

> **노마드 코더의 리액트 기초강의를 듣고 학습한 내용을 바탕으로 웹사이트 구현하기**

[강의 링크](https://nomadcoders.co/react-for-beginners/lobby)

<br>

## 1. 프로젝트 소개

### 1) 기획

> **1주차 발표자료.pdf 요약본**

<br>

![019](https://raw.githubusercontent.com/JaeKP/image_repo/main/img/019.png)

<br>

<img src="https://raw.githubusercontent.com/JaeKP/image_repo/main/img/%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84.png" alt="와이어프레임" style="zoom:50%;" />

<br>

### 2) 1주차 진행 상황

![반응형](https://raw.githubusercontent.com/JaeKP/image_repo/main/img/%EB%B0%98%EC%9D%91%ED%98%95.gif)

`React`

> 링피트 플레이기록을 Create, Read, Delete 할 수 있다.

- 버튼을 클릭하면 링피트 플레이를 기록할 수 있는 Modal창이 뜬다.

- Modal 창을 통해 플레이를 기록할 수 있다.
- 데이터의 변화를 감지하여 카드 컴포넌트가 실시간으로 생성되고 삭제된다.
- Local Storage에 저장하여 새로고침을 해도 다시 데이터를 Read할 수 있다.

<br>

![기능설명](https://raw.githubusercontent.com/JaeKP/image_repo/main/img/%EA%B8%B0%EB%8A%A5%EC%84%A4%EB%AA%85.gif)

`CSS`

- `flex`를 활용하여 컴포넌트를 정렬한다.
- media쿼리를 사용하여 반응형 웹페이지로 제작한다.
- 카드와 버튼을 hover시 동적인 효과를 준다.

<br>

## 2. 배운 점

### 1) CSS in JS

> CSS in JS (styled-components 라이브러리 활용법)

리액트에서 CSS를 어떻게 적용해야 할 지, 찾아보다가 CSS in JS 방식을 발견하게 되었다. [참고한 블로그 글](https://www.daleseo.com/react-styled-components/)

CSS in JS 방식은 다음과 같다.

1. HTML, CSS, JavaScript 3개로 분리하지 않는다.
2. 대신 component 단위로 제작한다.
3. 각 component에 HTML, CSS, JavaScript을 다 넣는다.

즉, CSS, HTML을 JavaScipt로 코드를 작성한다. styled-components 라이브러리는 생각보다 손쉽게 사용할 수 있었다.

<br>

### 2) 이벤트 버블링, 캡쳐링

모달창을 띄운 후 모달창 외부를 클릭하면 창이 자동으로 꺼지게 설정하고 싶었다. 그런데 모달창내부 태그가 모달창 외부 태그보다 하위 태그이기 때문에 모달창내부를 클릭해도 모달창이 꺼지게 되는 상황이 발생했다. 해결하기 위해 더 알아보던중 이벤트 캡쳐와 버블링에 대한 개념을 알게 되었다. [공식문서](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events)

이벤트 버블링이란, 특정 객체에 이벤트가 발생했을때 해당 객체보다 상위의 요소들로 전달되는 특성을 말한다. body <= div <= button 와 같은 구조일 때, 아래에 있는 button 태그에서 이벤트가 발생하면 body태그까지 이벤트가 전달된다.

이벤트 캡쳐링이란, 버블링과 반대로 상위객체들로 부터 하위 요소에게 전달된다.

이벤트가 전파되는 것을 막기위해서는 `Event.stopPropagation()`을 사용해야 한다. [공식문서](https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation)

```react
// modal.js

//... 생략
   <div>
      {show ? (
        <StyledContainer onClick={hide}>
          {/* 이벤트 전파 막기! 클릭 이벤트가 발생해도 상위 객체는 모른다! (전파되지 않는다.) */ }
          <StyledModal onClick={(event) => event.stopPropagation()}>
            <form onSubmit={formSubmit}>
				...
            </form>
          </StyledModal>
        </StyledContainer>
      ) : null}
    </div>
```

<br>

### 3) 로컬 스토리지 활용

> 리액트에서 LocalStorage CRUD

#### (1) 삽질의 시작: 여러개의 리스트로 데이터를 저장

유저가 링피트 플레이 내역을 기록하면 해당 데이터를 Local Storage에 저장해야 했다. 저장해야할 데이터는 다음과 같다.

| 데이터      | 데이터 타입 (예시)      | 반영된 DB                                    |
| ----------- | ----------------------- | -------------------------------------------- |
| id          | int (예시: 1)           | countLocal = [0, 1, 2]                       |
| 날짜        | date (예시: 2022-04-28) | dateLocal = ["", 2022-04-29, 2022-04-12]     |
| 플레이 시간 | text (예시: 2시간 30분) | timeLocal = ["", '1시간 20분', '1시간 10분'] |
| 소모 칼로리 | int (예시 500)          | carloriesLocal = ["", 200, 300]              |

**처음에 데이터를 저장하는 방법 자체를 잘못생각했다. 각각의 필드를 따로 따로 리스트 형태로 저장한 것이다.** 

<br>

```javascript
// components/Modal.js 

function Modal({ show, hide }) {
    
 /* Read: JSON으로 저장된 파일 파싱해서 가져온다. 데이터가 없으면 오류가 발생하기 때문에 빈 데이터를 처음에 추가한다. 
    Create, Update: set을 통해 데이터를 수정, 추가할 수 있다. */
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("countInLocal")) || [0]
  );
  const [dateList, setdateList] = useState(
    () => JSON.parse(localStorage.getItem("dateInLocal")) || [""]
  );
  const [timeList, settimeList] = useState(
    () => JSON.parse(localStorage.getItem("timeInLocal")) || [""]
  );
  const [caloriesList, setcaloriesList] = useState(
    () => JSON.parse(localStorage.getItem("caloriesInLocal")) || [""]
  );

 /* Create, Update: useEffect를 활용하여 데이터가 바뀔 때 자동으로 저장한다.
    특정 데이터를 Json파일로 변환해서 문자열 형태로 저장한다. */
  useEffect(() => {
    localStorage.setItem("countInLocal", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("dateInLocal", JSON.stringify(dateList));
  }, [dateList]);

  useEffect(() => {
    localStorage.setItem("timeInLocal", JSON.stringify(timeList));
  }, [timeList]);

  useEffect(() => {
    localStorage.setItem("caloriesInLocal", JSON.stringify(caloriesList));
  }, [caloriesList]);
```

이와 같이 데이터를 저장하면 단점이 있다. 

1. 코드가 길어진다. 
2. 데이터를 update하거나 삭제하기 힘들었다. 즉,  데이터가 분산 저장되어 접근,관리가 힘들었다. 

그래서 객체 방식으로 수정했다. 

**또한, Local Storage는 상위에서 다루어야 하위 컴포넌트들에게 props로 전달하기 쉽기 때문에 App.js로 코드를 이동시켰다.**

<br>

#### (2) 객체로 데이터를 저장한다. 

<br>

<img src="https://raw.githubusercontent.com/JaeKP/image_repo/main/img/image-20220430191111305.png" alt="image-20220430191111305" style="zoom: 67%;" />

<br>

```react
// App.js

import { useEffect, useState } from "react";
import Button from "./component/Button";
import Card from "./component/Card";
import Sidebar from "./component/Sidebar";

// App.js에서 LocalStorage를 관리한다. 그리고 해당 데이터들을 Button과 Card 컴포넌트에게 전달한다.
function App() {
    
  // read, create, update
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("data")) || [""]
  );
    
  // delete
  const deleteData = (num) => {
    const newData = data.filter((d) => d.id !== num);
    setData(newData);
  };
    
  // create, update
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
    
  return (
    <div>
      <Button data={data} setData={setData} />
      <Card data={data} setData={setData} deleteData={deleteData} />
      <Sidebar data={data} />
    </div>
  );
}

export default App;

```

<br>

```react
// Modal.js

// Create
const formSubmit = (event) => {
  hide();
  event.preventDefault();

  const newData = { id: index, date: date, time: time, calories: calories };
  const realData = [...data];
  realData.push(newData);
  setData(realData);
  changeIndex();

  setDate("");
  setTime("");
  setCalories("");
};
```

- Modal에서 데이터를 객체의 리스트로 저장한다.
  - ["", {id:1 , date:2022-04-28, time: 20분, caloreis: 120}, {id:2, date:2022-04-29, time:30분 calories: 150}]

<br>

```react
// Card.js

// DELETE
const deleteData = (num) => {
  const newData = data.filter((d) => d.id !== num);
  setData(newData);
};
```

- 카드 컴포넌트에서는 전달받은 데이터들을 Read하여 카드 컴포넌트를 생성한다.
- 삭제는 위의 방식처럼 삭제버튼을 누른 컴포넌트의 id를 인식하여 해당 id만 필터링한 리스트를 새로 생성하고 이를 데이터에 반영한다

<br>

#### (3) 드래그앤 드롭

객체의 리스트 형식으로 데이터를 저장하니 데이터 관리가 편해졌다.

그래서, 데이터 교환의 형식으로 드래그앤 드롭을 구현할 수 있었다. 

```javascript
function Card({ data, setData, deleteData }) {
   /* 생략 */
  
  let dragStartId = 0;
  const onDragStart = (num) => {
    dragStartId = num;
  };

  const onDrop = (dropId) => {
    // 데이터 찾기!
    const startData = data.find((element) => element.id === dragStartId);
    const startDataIndex = data.indexOf(startData);
    const dropData = data.find((element) => element.id === dropId);
    const dropDataIndex = data.indexOf(dropData);
      
    // 데이터 교환!
    startData.id = dropId;
    dropData.id = dragStartId;
    const newData = [...data];
    newData[startDataIndex] = dropData;
    newData[dropDataIndex] = startData;
    
    // 데이터 저장!   
    setData(newData);
  };
  return (
    <div>
      <StyledDiv>
        <StyledCardContainer onDragOver={(e) => e.preventDefault()}>
          {data.map((detailData) =>
            detailData.id === undefined ? null : (
              <StyledCard
                key={detailData.id}
                draggable
                onDragStart={() => onDragStart(detailData.id)}
                onDrop={() => onDrop(detailData.id)}
              >
  /* 생략 */
}
```

1. 카드 컴포넌트에게 draggble 속성을 준다. 
2. 드래그를 시작한 컴포넌트의 id와 drop된 위치에 있는 컴포넌트의 id를 가져온다. 
3. id를 통해 얻은 데이터 정보로 두 데이터의 위치를 교환한다. 
   - 데이터가 순서대로 랜더링 되기 때문에 LocalStorage에 위치한 데이터의 순서를 바꾼다. 

<br>

`daragover의 기본동작을 막는 이유 `

ondragover 속성은 드래그되는 대상 객체가 어느 요소 위에 놓일 수 있는지를 설정한다.

기본적으로 HTML 요소는 다른 요소의 위에 위치할 수 없기 때문에, 다른 요소 위에 위치할 수 있도록 만들기 위해서는 놓일 장소에 있는 요소의 기본 동작을 막아야만 한다.

<br>

### 4) 반복 랜더링

```react
 /* component/card.js (수정 전 코드) */
function Card({ data, deleteData }) {
    return (
         /* 생략... */
        {detailData.calories <= 50 ? (
         <StyledCircleContainer>
             <StyledExpBarRed />
             <StyledExpBarGrey />
             <StyledExpBarGrey />
             <StyledExpBarGrey />
             <StyledExpBarGrey />
             <StyledExpBarGrey />
         </StyledCircleContainer>
         ) : detailData.calories <= 100 ? (
        <StyledCircleContainer>
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarGrey />
            <StyledExpBarGrey />
            <StyledExpBarGrey />
            <StyledExpBarGrey />
        </StyledCircleContainer>
    ) : detailData.calories <= 150 ? (
        <StyledCircleContainer>
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarGrey />
            <StyledExpBarGrey />
            <StyledExpBarGrey />
        </StyledCircleContainer>
    ) : detailData.calories <= 200 ? (
        <StyledCircleContainer>
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarGrey />
            <StyledExpBarGrey />
        </StyledCircleContainer>
    ) : detailData.calories <= 250 ? (
        <StyledCircleContainer>
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarGrey />
        </StyledCircleContainer>
    ) : (
        <StyledCircleContainer>
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
            <StyledExpBarRed />
        </StyledCircleContainer>
    )} 
        <StyledCircleContainer />
 /* 생략... */
	);
}
```

위의 코드는 사용자가 입력한 칼로리를 각 조건에 따라 어떻게 표현되는지 보여준다. (6칸으로 되어있는 경험치바로 50, 100, 150... 단위로 빨간색 칸이 증가한다. 예를 들어,  200kal를 소모했다면 빨간색 칸 4개 회색칸 2개로 구성된 경험치 바를 랜더링한다. 

처음에는 단순하게 조건부 랜더링을 했다. 하지만 작성하면서도 이 코드는 나중에 수정을 해야겠다 마음을 먹었고 어떻게 반복랜더링을 할 수 있을지 고민해 보았다. 

<br>

#### (1) 우선 칼로리 데이터에 접근을 해볼까? 

```react
const dataCalories = data.map((data) => data.calories);
console.log(dataCalories);
```

<br>

#### (2) 아 ! 데이터의 id가 있어야 하네!

 id에 접근하기 위해서는 결국 template에서 가져와야 했다. 그래서 script구간에서 미리 함수를 만들어놓고 랜더링을 해봤다. 

데이터의 칼로리를 인자로 전달하여 함수를 template에서 실행 하면 되지 않을까... 라고 생각을 했었다. 🙄

```react
function Card({ data, deleteData }) {
    const expBar = (num) => {
        let redStart = 0;
        let greyStart = 0;
        
        // 경험치바는 최대 6칸이기 때문에 6보다 큰수가 오면 6칸으로 처리한다. 
        const red = num >= 6 ? 6 : num;
        const grey = 6 - red;

        while (redStart < red) {
            <StyledExpBarRed />
            redStart += 1;
        }
        while (greyStart < grey) {
            <StyledExpBarGrey />
            greyStart += 1;
        }
    };
	return (
    /* 생략... 
    칼로리를 50으로 나눈 값을 인자로 넘긴다.(Math.floor()를 통해 소숫점은 버린다. ) */
        <StyledCircleContainer>
            {expBar(Math.floor(detailData.calories / 50))}
        </StyledCircleContainer>
    )
```

<br>

#### (3) 오류는 발생하지 않지만 컴포넌트가 보이지 않았다.

**생각해보니 당연한 이유였다. return이 없기 때문이다. (머쓱타드)**  😅

처음에 localStorage에 있던 데이터 배열을 map 메서드로 카드 컴포넌트를 만든 것은 별 생각 없이 만들었다.  지금와서 생각해보니 반복할때마다 return을 해주기때문에 카드 컴포넌트를 생성할 수 있었던 것이다! 

이를 위해서는  경험치를 표현하는 배열을 만들어야 했다. 

1. 예를 들어 '200kal만큼 운동을 했다'라고 가정하면, 빨간색칸은 4칸 회색 칸은 2칸이여야 한다. 
2. `red = [0, 0, 0, 0] , grey = [0, 0]`과 같이 만든다. 
3. template부분에서 map을 통해 해당 배열의 길이만큼 컴포넌트를 생성하는 것이다. 

이것이 깔끔한 방법인지는 모르겠지만, 내가 아는 반복 랜더링 방법은 map 뿐이였기 때문에 배열을 만들 수 밖에 없었다. 

```react
function Card({ data, deleteData }) {
  const greyExp = (num) => {
    const red = num >= 6 ? 6 : num;
    const grey = 6 - red;
    const greyArray = new Array(grey).fill(0); // [0, 0, 0, 0]
    return greyArray;
  };

  const redExp = (num) => {
    const red = num >= 6 ? 6 : num;
    const redArray = new Array(red).fill(0); // [0, 0]
    return redArray;
  };
	return (
    /* 생략... 
    칼로리를 50으로 나눈 값을 인자로 넘긴다.(Math.floor()를 통해 소숫점은 버린다. ) 
    key는 해당 데이터의 `id-칼로리바색-index`로 구성했다. */
        <StyledCircleContainer>
            {redExp(Math.floor(detailData.calories / 50)).map(
                    (item, index) => {return (<StyledExpBarRedkey={`${detailData.id}-red-${index}`}/>);
                    }
                  )}
            {greyExp(Math.floor(detailData.calories / 50)).map(
                    (item, index) => {return (<StyledExpBarGreykey={`${detailData.id}-grey-${index}`}/>);
                    }
                  )}
        </StyledCircleContainer>
    )
```

<br>

## 3. 어려웠던 점

### 1) 리액트 실력 미숙

### 2) 좋은 코드가 뭔지 모른다.

<br>

## 4. 아쉬운 점

<br>

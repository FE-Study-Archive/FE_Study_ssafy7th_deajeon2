#### 1. 프로젝트 설명

- 부트스트랩을 이용하여  모달, 카드, 아코디언을 만들었다.

- 새로운 보스 목록 생성시 form에서 보스이름, 등장지역(select), 필수보스 여부(check)를 입력 할 수 있게 만들 었고,  필수 보스일 경우 보스의 이름이 노란색으로 표시되게 만들었다.

- 해당 보스의 카드 클릭시 `onclick`을 받아 클리어 여부를 카드의 색상으로 표시해주고 로컬 스토리지에 클리어 정보를 저장한다.

- 로컬 스토리지를 이용하여 보스이름, 등장지역, 필수보스 여부, 클리어 여부를 json의 형태로 저장하였고, 페이지를 새로고침해도 정보를 똑같이 표시할 수 있도록 만들었다.(클리어 정보 유지에 공를 들임)

  ![image-20220430183128867](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/image-20220430183128867.png)



- 프로젝트 동작 

![bandicam 2022-04-30 18-18-36-333](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/bandicam%202022-04-30%2018-18-36-333.gif)



#### 2. 2주차 목표

- 기능 구현은 거의 완성 했기 때문에, css와 라이브러리등을 활용하여 디자인과 이펙트를 손 보는것이 목표이다.







# 2주차



### 1. 컴포넌트 수정

더러웠던 Nav의 구조를 컴포넌트화 해서 간단하고 이해 하기 좋게 만들었다.

기존 App.js -> Nav.js 로 끝나던 구조는 무지성한 반복, 아코디언과 카드의 분리를 하지 못하여 다른사람이 이해하기도 힘들고, 코드 길이도 길었다.

![image-20220506193548601](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/image-20220506193548601.png)

저랬던 구조를 1차적으로 아코디언 부분을 분리해서 Accodion.js를 하위 컴포넌트로 생성하였다

![image-20220506193642975](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/image-20220506193642975.png)

여기서 card 리스트를 생성하는 코드를  Accodion.js의 하위 컴포넌트인 CardList.js로 분리해냈다.

![image-20220506193753910](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/image-20220506193753910.png)

코드가 어마어마 하게 간결해 졌고

![image-20220506193811645](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/image-20220506193811645.png)

각 컴포넌트의 역활도 이해하기 쉽게 되었다.



### 2. 클리어한 보스위치 변경

기존에는 이미 체크한 보스도 체크여부랑 상관 없이 기존의 인덱스를 따라서 상단에 위치해 있었다. 이는 아직 잡지 못한 보스를 확인하는데 불편함을 주었기 때문에 하단으로 위치하게 변경하였다.

![Honeycam_2022-05-06_02-29-11](https://raw.githubusercontent.com/shrewslampe/image_sever/master/img/Honeycam_2022-05-06_02-29-11.gif)



기존의 방식은 체크된 보스를 확인하여 카드의 색상만 변경해 줬다.

지금의 방식으로 바꾸기 위해서는 잡은 보스와 잡지않은 보스의 리스트를 개별로 만들어서 합칠 필요가 있었기 때문에 카드를 생성하는 Cards.js라는 하위 컴포넌트를 CardList.js에 생성하였다.





#### Accodion.js

```javascript
  for (let i = 0; i < area.length; i++) {
    const areaData = [[], []];
    for (let j = 0; j < props.data.length; j++) {
      if (props.data[j].body === area[i]) {
        if (props.data[j].clearInfo === true) {
          areaData[1].push(props.data[j]);
        } else {
          areaData[0].push(props.data[j]);
        }
      }
    }
```

Accodion.js에서 데이터를 순회 하며 보스클리어 여부를 바탕으로 areaData[1]과 areaData[0]으로 해당지역의 보스 정보를 분리하여 저장하였다.



#### CardList.js

```javascript
import Cards from "./Cards";

function CardList(props) {
  const lis = [];
  if (props.data) {
    for (let j = 0; j < props.data[0].length; j++) {
      lis.push(
        <article className="col-12 col-sm-6 col-xl-4" key={props.data[0][j].id}>
          <Cards
            data={props.data[0][j]}
            onClear={props.onClear}
            cardColor="bg-white"
          ></Cards>
        </article>
      );
    }
    for (let i = 0; i < props.data[1].length; i++) {
      lis.push(
        <article className="col-12 col-sm-6 col-xl-4" key={props.data[1][i].id}>
          <Cards
            data={props.data[1][i]}
            onClear={props.onClear}
            cardColor="bg-secondary text-light"
          ></Cards>
        </article>
      );
    }

    return <div className="row">{lis}</div>;
  }
}

export default CardList;
```

Accodion.js로 부터 areaData를 받아 두번의 for문을 돌렸다. 첫 for문으로 클리어하지 못한 보스들의 데이터를 받아 Card 컴포넌트를 통해 카드를 생성해 lis에 저장하였고, 두번째 for문으로 클리어한 보스의 카드를 생성해 lis에 추가해줘 클리어하지 못한 보스가 클리어한 보스보다 앞에 위치하게 하였다.



### 3. 공략 진행도 progress bar로 변환

기존 (클리어 보스수)/ (전체 보스 수) 는 너무 성의 없어 보여서 해당 기능을 progress bar의 형태로 변환 하였다.

```react
function Header(props) {
  const gage = (props.clearBossN / props.maxN) * 100;
  console.log(gage);
  return (
    <header>
      <h1>
        <p>{props.title}</p>
        <div className="progress col-3" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${gage}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </h1>
    </header>
  );
}
```


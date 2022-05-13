[toc]

# 1. Grid 기초

[이번에야말로 CSS Grid를 익혀보자](https://studiomeal.com/archives/533)

<aside>
💡 교재와 같이 소스코드 보는 것을 추천!
</aside>

## 1.그리드 형태 정의

### 1)  grid-template-columns

> 그리드 형태를 정의 한다.
> 

`grid-template-row`   `grid-template-columns`

```css
.grid-container {
        display: grid;
				
				/* columns를 200px, 300px, 200px로 만들 겠다.*/
        grid-template-columns: 100px 300px 200px;

        /* fr: fraction (비율), 알아서 늘어난다. (가변 크기) */
        grid-template-columns: 1fr 2fr 1fr; 

        /* 양 끝의 column은 늘어나고 가운데는 고정되어 있다.  */
        grid-template-columns: 1fr 500px 1fr; 

				/* reapeat를 사용하여 반복할 수 있다. */
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: repeat(5, 1fr)

        /* row는 fr을 사용해도 자동으로 늘어나지 않는다.=> 컨테이너 자체를 늘려야 한다.*/ 
        grid-template-rows: repeat(2, 1fr); 
				
			  /* 그리드 item의 경우 컨테이너 높이가 확보되어있으면 row는 알아서 늘어난다. */
        height: 80vh;
      }
```

<br>

### 2) minmax

> 최솟값과 최댓값을 지정할 수 있는 함수이다.
> 

```css
.grid-container {
		display: grid;
		
		grid-template-columns: repeat(3, 1fr);

		/* minmax(최솟값, 최댓값): 최소 100px 최대는 자동으로 늘어난다. */
		grid-template-rows: repeat(3, minmax(100px, auto));
}
```

<br>

### 3) auto-fill과 auto-fit

> column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채운다.
> 

```css
.grid-container {
		display: grid;

		/* media쿼리를 쓰지 않고도 column 갯수가 변하는 반응형 레이아웃을 만들 수도 있다. */
		grid-template-columns: repeat(auto-fill, minmax(200px, auto));
	}
```

- `auto-fill`: 셀의 수보다 item 갯수가 모자라면 공간이 남는다.
- `auto-fit`: 셀의 수보다 item 갯수가 모자라도 남는 공간을 채운다. (item의 너비에 변화를 줌)

<br>

## 2. 간격 만들기

> 그리드 셀 사이의 간격을 설정한다.
> 

`row-gap`  `column-gap`  `gap`

```css
.grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, minmax(200px, auto));

      /* 기본 값은 0이다. */
      /* row-gap: 20px; */
      /* column-gap: 20px; */
      /* grid-gap: 20px; 예전 버전 */
      gap: 20px;
}
```

<br>

## 3. 그리드 형태를 자동으로 정의

> 동적으로 트랙의 크기를 지정한다. 
(grid-template-columns의 통제를 받지 않는 column들의 배치를 결정하는 규칙)

`grid-auto-columns`   `grid-auto-rows`

```css
/* row가 몇개인지 지정하지 않아도 자동으로! */
.grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* grid-template-rows: repeat(3, minmax(100px, auto)); */
      grid-auto-rows: minmax(100px, auto);
      gap: 1rem;
}
```

- 알아서 배치된다.
- 정적인 데이터를 다루는 레이아웃이 아니라면 필요하다.
    - 동적으로 계속 데이터가 로드된다면, `repeat(3)` 처럼 row의 개수를 미리 지정할 수 없다.
- 즉, 굳이 횟수를 지정해서 반복할 필요 없이 알아서 처리된다.

<br>

## 4. 각 셀의영역을 지정한다.

> 그리드 라인 번호를 이용하여 column과 row의 범위를 직접 결정하는 방법
(즉, 바둑판 형식에서 벗어날 수 있도록 하는 속성들이다)
> 

```css
/* 바둑판 형식에서 벗어날 수 있는 속성들.. */
/* grid-item에 설정하는 속성들. 각 셀별로 크기를 설정해주는!  */
/* 라인 번호를 의미한다. */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
}
.grid-item:nth-child(1) {
  /* 축약형
	grid-column: 1 / 3
	grid-row: 1 / 4 */
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
}
.grid-item:nth-child(3) {
  grid-column: 3;
  grid-row: 2;
}
.grid-item:nth-child(4) {
  grid-column: 3;
  /* span: 점유하는 칸수를 기입하는 방법이다.(3번 라인에서 3칸
		 grid-row: 3 / 5와 같다.  */
  grid-row: 3 / span 3;
  opacity: 0.8;
}
```

```css
.grid-container {
		display: grid;
		grid-template-columns: 50px;
		grid-auto-columns: 1fr 2fr;
		gap: 1rem;
	}
```

- 처음에만 `grid-template-columns`의 통제를 받아 50px이 되고 나머지 column들은 `grid-auto-columns`의 규칙에 따라 1:2 비율이 반복된다.

<br>

## 5. 영역 이름으로 그리드 정의

> 각 영역(Grid Area)에 이름을 붙이고, 그 이름을 이용해서 배치하는 방법이다.
> 

`grid-template-areas`

```css
/* 영역들의 이름을 지어놓그 이름을 활용하여 배치할 수 있다 
   빈칸은 마침표 또는 none을 사용하면 된다. */
.grid-container {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-areas:
          "..... header header"
          "sidebar-a main sidebar-b"
          "footer footer footer";
  }

/* 매칭시켜주기 */
.header {
  grid-area: header;
}
.sidebar-a {
  grid-area: sidebar-a;
}
.sidebar-b {
  grid-area: sidebar-b;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

<br>

## 6. 정렬

| 아이템 그룹 정렬 | 세로 정렬: align-content    가로 정렬: jusrify-content     축약: place-content |
| --- | --- |
| 아이템 정렬 | 세로 정렬: align-items    가로 정렬: jusrify-items     축약: place-item |
| 개별 아이템 정렬 | 세로 정렬: align-self    가로 정렬: jusrify-self     축약: place-self |

<br>

# 2. Grid: 반응형 웹페이지 구현

## 1. 전체 레이아웃

### 1) grid 번호 이용

![image-20220513181940935](https://raw.githubusercontent.com/JaeKP/image_repo/main/img/image-20220513181940935.png)

그리드 라인 번호 (column은 1~4번, row는 1~5번이다.)

<br>

```css
@media (min-width: 1024px) {
  .page {
    display: grid;
    /* fr은 강제성이 없다...  */
    grid-template-columns: 20% 1fr 20%;
  }
  /* 각 아이템들의 영역을 지정해준다. (위의 그림을 참조한다.)  */
  .header {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }
  .menu {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
  }
  .primary {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .secondary-a {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  .secondary-b {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
  }
  .footer {
    grid-column: 1 / 4;
    grid-row: 4 / 5;
  }
}

@media (min-width: 1400px) {
  .page {
    display: grid;
    grid-template-columns: 300px 1fr 300px;
  }
}
```

<br>

### 2) grid-template-area를 이용

각 영역에 이름을 지정해줘서 적용하는 방법

```css
@media (min-width: 1024px) {
	.page {
		display: grid;
		grid-template-columns: 20% 1fr 20%;
		grid-template-areas:
			"  header    header    header   "
			"   menu      menu      menu    "
			"secondary-a primary secondary-b"
			"  footer    footer    footer   ";
	}
	.header {
		grid-area: header;
	}
	.menu {
		grid-area: menu;
	}
	.primary {
		grid-area: primary;
	}
	.secondary-a {
		grid-area: secondary-a;
	}
	.secondary-b {
		grid-area: secondary-b;
	}
	.footer {
		grid-area: footer;
	}
}
@media (min-width: 1400px) {
	.page {
		grid-template-columns: 300px 1fr 300px;
	}
}
```

<br>

## 2. 카드 리스트

auto-fill을 활용하여 media 쿼리가 없이도 반응형 웹사이트를 만든다. 

```css
/* card list */
.card-list {
	display: grid;
	/* 횟수가 아니라 auto-fill을 작성하여 자동으로 채워지게 한다. 
     화면 너비에 따라 반응형으로 column의 개수가 변한다.*/
	grid-template-columns: repeat(auto-fill, minmax(220px, auto));
	column-gap: 2%;
}
.card-item {
	margin-bottom: 2rem;
	background: white;
}
.card-image {
  /* 백그라운드 이미지이기때문에 패딩 바텀을 통해 높이를 준다.  */
	height: 0;
	padding-bottom: 60%;
	background-repeat: no-repeat;
	background-position: center;
	background-color: lightgray;
	background-size: cover;
}
.card-image img {
	display: none;
}
.card-desc {
	padding: 1em;
}
```

<br>


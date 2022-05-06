# Travlog

## 1. 기술 스택

- React
- Material UI
- Dajngo
- Python
- HTML, CSS, JSX
- RESTAPI

## 2. 기능 구현(최종안)

### 1) RESTAPI

- RESTAPI를 통해 React.js(프론트)와 Django(백엔드) URL을 연동시켜 구현할 예정이다.
- 직렬화, 역직렬화를 통해 JSON형태로 리엑트에 요청, 응답을 처리해 화면을 구성할 계획이다.

### 2) React 페이지 구성

- 블로그의 메인 페이지로써 다른 사람들의 게시글들을 볼 수 있습니다.

- 페이지 구성 - Bootstrap 혹은 Material UI를 활용

  - 네비게이션 바(header)
    - 로그인
      - 회원가입하기
      - 네이버, 카카오로 로그인하기(부연 기능이 가능하다면 추가)
    - 알림 및 수신 메세지
    - 프로필
    - 로고
  - 여행지 추천 API
  
- CRUD

  - **누구나 조회가 가능**
    - 게시글 조회
    - 댓글 조회
  - **인증된 사용자에 한함**
    - 게시글 작성
    - 게시글 삭제
    - 게시글 수정
    - 게시글 조회
  
- 사용자 인증

  - 로그인
  - 회원가입
  - 회원탈퇴
  - 프로필 페이지
  - 회원 정보 수정
  
- Model / Django ORM을 활용한 DB 구현(외래키의 관계를 활용한 참조, 역참조)

  - 댓글 추가
  - 댓글 삭제
  - 게시글 좋아요, 팔로우
  - 작성자 표시
  
  

## 3. REACT.JS 페이지 구현(1차 중간 발표)

- **네비게이션 바**
  - 로그인 페이지 LINK
  - 알림 및 수신 메세지
  - 프로필
  
- **사이드바(좌측)**
  - 친구 목록
  - 흑백 모드 전환
  
- **메인 게시물(중앙 Feed)**
  - 게시물들
    - 좋아요 하트 버튼
    - 공유 버튼
    - 수정 및 삭제 버튼
  - 게시물 작성 버튼
  
- **사이드바(우측)**
  - 이미지 리스트
    - 나의 추억들(사진 모음)
    
  - 최근 대화 목록
  
    

#### 2주차 구현 목표

- 게시물을 작성, 삭제하는 Create, Delete 기능 구현 및 구조화된 엘리먼트를 게시물로 추가
- 수정할 것
  - NavBar 컴포넌트에서 커스텀 Style된 컴포넌트를 생성해 사용해 인라인 요소로 들어가버림.
  - 흑백 모드 사용시 색상 변경이 이루어지지 않으므로 수정 요망
  - DB 이용이 불가하므로 로컬스토리지를 이용한 데이터 처리가 필요


![asdfasdf](README.assets/asdfasdf.PNG)

![d](https://user-images.githubusercontent.com/90893428/166096384-2bba69cf-5819-4967-8140-6db78c2e814c.PNG)





## 4. 구현에 활용된 Material UI 컴포넌트 & 기술

### 1. REACT

#### 1) URL Routing(App.js)

```react
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";

//return 요망
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Home />}/>
  </Routes>
</BrowserRouter>
```

- 기본 페이지 구성이되는 페이지와 URL이 필요한 페이지들의 구성



#### 2) Props(Home.js)

```react
//import는 js파일에서 확인
const Home = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
```

- useState를 활용해 default를 `light`로 해 MUI 라이브러리의  ThemeProvider에 커스텀 theme으로 넣어줬습니다.
  - 일반적인 div의 인라인 스타일에 넣어도 동작이 같습니다.
- 사이드바에 토글로 다크 모드를 On/Off 해주기 위해서 useState의 변수들을 props를 통해 넘겨줬습니다.

```react
<Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")}/>
```

- Switch 컴포넌트에는 onChange 속성으로 상태가 변하면 setMode를 수정시켰습니다.



### 2. Material UI

#### 1) Box

- Box 컴포넌트는 일반적인 div 역할을 대신하는 컴포넌트로,  return을 통해 DOM으로 바꿔줄 때 효과적입니다
- 스타일과 컴포넌트 시멘틱 태그 속성들을 `sx`로 자유자재로 삽입하는 것이 가능합니다.

#### 2) Stack

- Stack의 하위 요소들의 axis(배치 방향)들을 결정하고 간격을 부여할 수 있는 컴포넌트.

```react
<Box sx={{ width: '100%' }}>
  <Stack spacing={2}> #spacing => 간격
    <Item>Item 1</Item> // Item => 원하는 컴포넌트 or 요소
   	<Item>Item 2</Item>
    <Item>Item 3</Item>
  </Stack>
</Box>
```



#### 3) Theme Provider

- 하위 요소의 배경 및 theme 스타일을 변경하고 관리해주는 역할을 가진 컴포넌트
- 하위 요소들을 커스텀 theme으로 바꿀 수 있습니다.

```react
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

<ThemeProvider theme={theme}>
  <CustomCheckbox defaultChecked />
</ThemeProvider>
```



#### 4) AppBar

- 화면 상단에 붙어있는 네비게이션 바를 만들 때 사용하는 컴포넌트
- 툴바는 flex 속성으로 Appbar를 사용하면 상단에서 하단으로 쌓이는 자식 요소들을 왼쪽에서 오른쪽으로 쌓기 위해 필요한 컴포넌트.

```react
<AppBar position="sticky" color="neutral">
  <Toolbar>
  	//something components you want!
  </Toolbar>
</AppBar>
```



#### 5) Grid

- 화면의 여백과 배치 비율을 더 자세하게 분할하기 위한 컴포넌트
  - 12분할로 나뉘며 Grid로 감싸서 분할합니다.

```react
<Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
```



#### 6) Typography

- 글씨체의 디자인과 속성을 다양하고 쉽게 사용할 수 있도록 만들어진 컴포넌트
  - ex) h1, h2, h3 등의 글자 크기 등을 자유롭게 설정 가능

```react
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom component="div">
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom component="div">
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  );
}
```



#### 7) Badge

- 특정 앱 혹은 태그의 알림의 개수 등을 확인하기 위한 컴포넌트
  - ex) 카톡 위에 300+

```react
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
```



#### 8) Avatar

- 원형 틀 안에 이미지를 넣을 수 있는 컴포넌트
  - ex) 각 사용자의 프로필 사진이 들어간 간단한 원형 프로필

```react
<Avatar
	sx={{ width: 30, height: 30 }}
	src="https://media.bunjang.co.kr/product/170766779_3_1637643102_w360.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
	onClick={(e) => setOpen(true)}
/>
```



#### 9) Menu

- 특정 이벤트를 통해 팝업되는 목록을 가진 메뉴 컴포넌트
  - Menu 리스트가 추가로 필요합니다.

```react
<Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
    >
    Dashboard
</Button>

<Menu 속성 필요!> //열고 닫는 이벤트를 처리해줘야함.(버튼을 클릭시에 메뉴 팝업)
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
```



#### 10) Modal

- 전체 화면의 색을 옅게 처리하고 새로운 창을 팝업하는 컴포넌트

```react
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
```



#### 11) List

- 기본적인 목록의 리스트
- 사각형 테이블 안에 상단에서 하단으로 배치되는 리스트

```react
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
```



#### 12) Card

- 기본적으로 페이스북과 같은 카드 형태의 포스팅을 가능하게 해주는 디자인 카드 컴포넌트
  - 내부에 기본적으로 Card의 부속 컴포넌트들이 들어있습니다.
  - 자세한 내용은 공식문서를 참조

```react
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://tistory1.daumcdn.net/tistory/3365165/attach/ff9b9a1e02d2459488a5bd7284939f47?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="타이틀!"
        subheader="부제목!"
      />
      <CardMedia
        component="img"
        height="900"
        image="https://i.pinimg.com/564x/44/71/01/447101dbe5a1f0ab0a1fea27d9268123.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          내용!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
          />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
```



## 5. 코드 리뷰 & 설계 시 고려사항



### 1) 컴포넌트의 독립성

- 개선 전

```react
const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

//SideBar의 props로 전달
<SideBar setMode={setMode} mode={mode} />

//SideBar 내부에서 사용한 콜백 함수
<Switch onChange={(e) => setMode(mode === "light" ? "dark" : "light")}/>
```

- 개선 후

```react
const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

const onDarkMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

//SideBar의 props로 전달
<SideBar onDarkMode={onDarkMode} />

//SideBar 내부에서 사용한 콜백 함수
<Switch onChange={onDarkMode}/>
```



### 2) DOM 요소에 접근

> 자바스크립트를 다루다보니 DOM 트리의 노드에 접근 할 때, document.querySelector을 이용해 리엑트에서도 DOM을 조작하면 안된다는 글을 접했다. 다행히 요소에 접근하려던 참이었는데 좋은 글을 접해 useRef를 적용하게 되었다.

- React는 Virtual DOM을 통해 실제 DOM을 그리기 때문에 실제 DOM으로 접근하는 querySelector을 쓰면, 리엑트가 Virtual DOM에 존재하는지 실제 DOM에 존재하는지 불투명해진다.
- React 내부 데이터는 State로 조작되는데 실제 DOM을 건들이면 React가 조작하는 범위를 벗어나고, 리엑트를 사용하는 이유가 없어진다.
- 생명주기에 맞춰서 가져온 DOM Element만을 신뢰할 수 있기 때문에, 데이터를 어디서 어떻게 조작하는지 모르니 당연히 디버깅도 어려워진다.



### 3) 게시물 이미지 업로드 구현

- FileReader를 이용해 파일을 받아와 해당 파일을 URL의 형식으로 변환해 img.src에 넣어줬다.

```react
  const saveImgFile = (e) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (e) {
    setImageURL(e.target.result);
    };
  };
```


# Veutify

#### 1) Grid-system

- 부트스트랩과 그리드 시스템의 적용 방식이 살짝 달라서 헷갈렸다. v-col 요소들에 v-for을 적용해 복사할 수도 있어 컴포넌트 내부에 v-col을 넣는 구조를 잘 생각해야 했습니다.

```vue
<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        컴포넌트들!
      </v-col>
    </v-row>
  </v-container>
</template>
```



#### 2) Cards (Custom Actions)

- Cards에 동적인 script까지 추가해 펼치고 접는 카드를 생성했다. 부모 컴포넌트의 속성을 상속해 가져와서 자식 요소들의 display 속성이 달라 scoped를 주고 스타일을 커스텀하거나, 구조적인 변화를 줘야 실제로 transition이 작동하는 어려움이 있었다.
- 아래는 관통 프로젝트에서 적용한 카드이다.

```vue
<v-card class="mx-auto">
    <v-card-title style="height: 100px">
        {{ movie.title }}
    </v-card-title>

    <v-card-subtitle> 개봉일: {{ movie.release_date }} </v-card-subtitle>
    <v-img :src='posterPath + movie.poster_path'></v-img>
    <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
                {{ movie.overview }}
            </v-card-text>
        </div>
    </v-expand-transition>
</v-card>
```



#### 3) Icons

- 아이콘을 import 해올 수 있도록 npm install @mdi/js를 통해 다양한 아이콘을 가져올 수 있다.

```react
<v-icon dark>
  mdi-pencil
</v-icon>
```



#### 4) buttons

- 버튼에 이벤트를 적용해 toDoList를 만들기 위해 버튼 UI와 내부에 Icons를 가져와 넣어줬다.

```vue
<v-btn
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
```



#### 6) Dialog

- 다이얼 로그로 Modal과 같은 역할을 하며, 다이얼로그를 통해 구체적인 업무, 중요한 정보, 필요한 결정, 다중 작업 등 여러가지 용도로 사용이 가능한 컴포넌트 이다. 띄우면, 주변 배경 색상이 어두워지고 중앙에 박스가 팝업된다.

```vue
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >From the bottom</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Opening from the bottom</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Hello world!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
```





#### 7) App bar

- 네비게이션 바를 대체하는 앱 바이다. 부트스트랩이나 다른 UI 라이브러리들과 다르게 기본 제공되는 컴포넌트만으로 네비게이션 바의 배경을 임의로 바꿔줄 수 있고, 탭이 따로 존재해 URL 라우팅을 넣어주기에도 안성맞춤이다.

```vue
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
```

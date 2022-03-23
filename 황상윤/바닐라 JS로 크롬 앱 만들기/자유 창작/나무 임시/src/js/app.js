// App 클래스 정의
class App {
  // constructor 함수 정의
  constructor() {
    // canvas 라는 이름의 tag 생성
    this.canvas = document.createElement('canvas');
    
    // html body 태그의 자식요소로 this.canvas 추가
    document.body.appendChild(this.canvas);


    // 캔버스는 처음에 비어있기 때문에 무언가를 표시하기 위해서 getContext()함수를 사용할 필요가 있다.
    // getContext()는 어떤타입의 그림을 그릴지 정하는 함수이다.
    // getContext()의 속성중에 2d를 그리기위해 "2d"를 지정
    this.ctx = this.canvas.getContext('2d');

    // 레티나 디스플레이에서도 제대로 보이기 위한 설정 
    // 레티나 디스플레이를 잘 몰?루
    // 나중에 좀더 자세히 조사하는걸로
    // [레티나 디스플레이를 사용하는 유저들도 선명하게 보이기 위해 window.devicePixelRatio를 가져와 이 값이 1보다 크면 캔버스의 사이즈와 비율을 2배, 1 이하면 1배로 설정하고자 이 값을 저장한다.] 라고 한다.
    // window.devicePixelRatio 매서드는 현재 디스플레이의 물리적 픽셀과 css의 픽셀 비율을 반환해준다.
    // (css 픽셀 / 물리적 픽셀)로 이해해도 된다
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    // 윈도우 창의 크기가 변경되면 resize 함수 실행
    window.addEventListener('resize', this.resize.bind(this), false);
  	this.resize();
  }

  // 캔버스 크기를 변경시키는 하는 함수
  resize() {
    // document.element.clientWidth : body 속성의 너비를 저장
    this.bodyWidth = document.body.clientWidth; 
    // document.elemen.clientHeight : body 속성의 높이를 저장
    this.bodyHeight = document.body.clientHeight;

    // 캔버스의 너비를 디스플레이 비율에 맞춰 조정
    // pixelRatio 는 [window.devicePixelRatio > 1 ? 2 : 1]를 통해 조정한 비율
    this.canvas.width = this.bodyWidth * this.pixelRatio
    // 캔버스의 높이를 디스플레이 비율에 맞춰 조정
    this.canvas.height = this.bodyHeight * this.pixelRatio
    // element.sacale(x,y) : element의 사이즈를 가로 x배 세로 y배로 바꿔줌
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    // 리사이즈가 완료되면 캔버스를 비운다.
    // canvasName.clearRect(x1, y1, x2, y2) : canvasName의 (x1,y1)부터 (x2,y2)까지 범위의 영역을 비운다.
    this.ctx.clearRect(0, 0, this.bodyWidth, this.bodyHeight);

  }

}


// <script>를 원칙적으로는 body의 최하단에 위치 시켜야 정상적으로 작동한다.
// 하지만 코드가 길어질 경우 <script>를 찾으려면 많은 스크롤을 내렸다 돌아와야됨
// 그 귀찮음을 해결하기 위한 방법이 window.onload 메소드이다.
// <script>를 상단에 위치시켜도 자동적으로 최하단에서 실행되도록 고쳐주는 메소드이다.
window.onload = () => {
  new App();
}
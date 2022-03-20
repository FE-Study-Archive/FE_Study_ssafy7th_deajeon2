const favoriteForm = document.querySelector("#favoriteForm");
const favoriteInput = document.querySelector("#favoriteForm input");
const favoriteMusic = document.querySelector("#favoriteMusic");

let favorites = [];

function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites)); //역직렬화를 통해 스트링을 array로 만든다.
}

function deleteFavorites(event) {
  const li = event.target.parentElement;
  li.remove();
  favorites = favorites.filter(favorites => favorites.id !== parseInt(li.id)); //저장했던 id와 다른 것들은 남겨둠. id는 문자열이므로 int로 바꿔야함.
  saveFavorites();
}

function writeFavorites(newFavorite) { //ul태그의 li요소들을 추가하는 용도
  const li = document.createElement("li");
  li.id = newFavorite.id; //새로운 newFavoriteObj의 id를 li의 고유 id로 저장해줌.
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteFavorites);
  li.appendChild(span); //span안에 li 넣기
  li.appendChild(button);
  span.innerText = newFavorite.text; // input으로 받아온 인자로 받은 고유한 newFavoriteObj를 span의 text로 넣어줌. 그럼 객체자체가아니라 원래의 텍스트를 받음.
  favoriteMusic.appendChild(li);
}


function favoriteMusicSubmit(event) {
  event.preventDefault();
  const newFavorite = favoriteInput.value; //값 복사
  favoriteInput.value = "";
  const newFavoriteObj = {
    text: newFavorite,
    id: Date.now() // id를 고유한 값으로 하기위해 시간정보 저장.
  };
  favorites.push(newFavoriteObj);
  writeFavorites(newFavoriteObj); // 함수로 복사한 인자 넘겨줌 -> 수정 -> 고유한 값을 가진 객체를 넣어줌. 하지만 출력은 object로 반환함.
}

favoriteForm.addEventListener("submit", favoriteMusicSubmit);

const getSavedFavorite = localStorage.getItem("favorites");

if (getSavedFavorite !== null) {
  const parsedFavorites = JSON.parse(getSavedFavorite);
  favorites = parsedFavorites; //리스트가 새로고침해서 잊는 것을 시작 전에 넣어주는 것.
  parsedFavorites.forEach(writeFavorites); //하나씩 꺼내와 실행.
}
const musics = [
  {
    music: "회전목마",
    singer: "sokodomo",
  },
  {
    music: "라일락",
    singer: "IU",
  },
  {
    music: "Dun Dun Dance",
    singer: "오마이걸",
  },
  {
    music: "멜로디",
    singer: "ASH ISLAND",
  },
  {
    music: "OHAYO MY NIGHT",
    singer: "디핵",
  },
  
];
  
const MusicName = document.querySelector("#Recommendation a:first-child");
const SingerName = document.querySelector("#Recommendation a:last-child");
MusicName.href = 'https://www.genie.co.kr/';
SingerName.href = 'https://namu.wiki/w/%EA%B0%80%EC%88%98/%ED%95%9C%EA%B5%AD'

const randomNumber = Math.floor(Math.random() * musics.length)
const TodaysMusic = musics[randomNumber];


MusicName.innerText = `제목 : ${TodaysMusic.music}`;
SingerName.innerText = `가수 : ${TodaysMusic.singer}`;

MusicName.classList.add("MusicText");
SingerName.classList.add("MusicText-2");

// music play

const music_list = [
  'music_1.mp3',
  'music_2.mp3',
  'music_3.mp3',
  'music_4.mp3',
  'music_5.mp3'
];



const playMusicButton = document.querySelector("#playMusic audio");

const chosenMusic = music_list[randomNumber];
playMusicButton.volume = 0.3;

playMusicButton.src = `mp3/${chosenMusic}`;

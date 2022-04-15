import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail(){
  const { id } = useParams() //URL Routing에서 ID를 받아오는 역할
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
  };
  useEffect(() =>{ // async/await => 비동기 코드를 동기처럼 보이자!   
    getMovie()
  }, []
  );
  return <h1>Detail</h1>
}

export default Detail;
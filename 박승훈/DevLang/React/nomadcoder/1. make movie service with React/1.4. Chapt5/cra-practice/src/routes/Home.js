import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const response = await fetch(
			"https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5$sort_by=year"
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map((movie) => (
						<Movie
							// props를 이용해 component 내로 데이터 전달
							key={movie.id}
							title={movie.title}
							// coverImg로 component명 지정
							coverImg={movie.medium_cover_image}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;

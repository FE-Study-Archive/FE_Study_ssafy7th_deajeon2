import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// props를 이용해 부모 컴포넌트(App.js)로 부터 movie 정보를 받아옴
function Movie({ id, title, coverImg, summary, genres }) {
	return (
		<div>
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<img src={coverImg} alt={title} />
			<p>{summary}</p>
			{/* 장르는 array에 담겨 있으므로 map 함수로 component화 */}
			<ul>
				{genres.map((g) => (
					// key를 genre 그 자체로 넣어주는 방식
					<li key={g}>{g}</li>
				))}
			</ul>
			<br />
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	// string을 담은 array 형식
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

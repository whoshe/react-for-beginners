import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.moviePoster} src={coverImg} alt={title} />
      <div>
        <h2 className={styles.movieTitle}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movieYear}>{year}</h3>
      </div>
      <div></div>
      <div>
        <p className={styles.movieSummary}>
          {summary.length > 120 ? `${summary.slice(0, 120)}...` : summary}
        </p>
        <ul className={styles.movieGenres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;

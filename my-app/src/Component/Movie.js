import './Movie.css';

const Movie = (props) => {
    return (
        <div className="movie">
            <h1>{props.name}</h1>
            <p>{props.publishDate}</p>
        </div>
    )
}

export default Movie;
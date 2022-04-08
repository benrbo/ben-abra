import './MovieList.css';
import Movie from './Movie';

const MovieList = (props) => {
    const {title} = props;
    return (
        <div className="movieContainer">
            <h1>{title}</h1>
            <Movie name="The Secret Life of Pets" publishDate="24-6-2016" />
            <Movie name="Sing" publishDate="21-12-2016" />
            <Movie name="3222" publishDate="24-6-2016" />
        </div>
    )
}

export default MovieList;
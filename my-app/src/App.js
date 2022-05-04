import './App.css';
import MovieList from './Component/MovieList';
import Button from './Component/styled';

function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <MovieList title="the best movie"></MovieList>
    </div>
  );
}

export default App;

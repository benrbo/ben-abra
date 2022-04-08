import './App.css';
import Header from './Component/Header';
import PersonList from './Component/PersonList';
function App() {
  return (
    <div className="App">
        <Header />
        <PersonList title="my person" ></PersonList>
    </div>
  );
}

export default App;

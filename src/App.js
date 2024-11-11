import logo from './logo.svg';
import './App.css';
import TopNav from './Component/TopNav';
import CatNav from './Component/CatNav';
import MainComponent from './Component/MainComponent';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <CatNav/>
      <MainComponent/>
    </div>
  );
}

export default App;

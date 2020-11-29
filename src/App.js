import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

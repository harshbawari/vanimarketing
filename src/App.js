import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {LargestMultiply, TeamWeight} from './problemSolving.jsx'
import InputShortener from './inputAPI'

function App() {
  return (
    <div className="App">
      <LargestMultiply />
      <TeamWeight />
      <InputShortener />
    </div>
  );
}

export default App;

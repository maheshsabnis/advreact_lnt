import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
       Data from Parent: {props.msg}
    </div>
  );
}

export default App;

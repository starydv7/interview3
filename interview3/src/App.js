
import './App.css';
import Counter from './components/Counter';
import Props from './components/Props';
import EventHandler from './components/EventHandler';
// import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Counter />
      <Props />
      <EventHandler/>
      {/* <Inline/> */}
    </div>
  );
}

export default App;

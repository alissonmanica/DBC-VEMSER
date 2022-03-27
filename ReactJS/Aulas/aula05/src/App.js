import './App.css';
import Counter from './components/Counter';
import Mirror from './components/Mirror';

import CountProvider from './context/CountContext';

function App() {
  return (
    <div className="App">
      <CountProvider>
        <Counter />
        <hr />
        <Mirror />
      </CountProvider> 
    </div>
  );
}

export default App;

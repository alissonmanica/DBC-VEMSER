import './App.css';
import Form from './components/Form';
import ListProvider from './context/ListContext';

function App() {
  return (
    <div className="App">
      <h1>Trabalhadores</h1>
      <ListProvider>
        <Form /> 
      </ListProvider>
    </div>
  );
}

export default App;

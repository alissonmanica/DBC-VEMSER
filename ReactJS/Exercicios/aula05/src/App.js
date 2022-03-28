import style from './App.module.css';
import Form from './components/form/Form';
import ListProvider from './context/ListContext';

function App() {
  return (
    <div className={style.App}>
      <h1>Trabalhadores</h1>
      <ListProvider>
        <Form /> 
      </ListProvider>
    </div>
  );
}

export default App;

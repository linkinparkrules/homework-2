import logo from './logo.svg';
import './App.css';
import {AddExpenseButton, Expense} from './addBill'

function App() {
  return (
    <div className="App">
        <AddExpenseButton />
        <Expense />
    </div>
  );
}

export default App;

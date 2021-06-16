import { Header } from "./components/head";
import { Balance } from "./components/balance";
import { Expense } from "./components/expense";
import { Transaction } from "./components/transaction";
import { Form } from "./components/form";
import { Provider } from "./context/global";
import './css/app.css';

function App() {
  return (
    <Provider>
      <Header />      
      <div className = "container">
        <Balance />
        <Expense />
        <Transaction />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
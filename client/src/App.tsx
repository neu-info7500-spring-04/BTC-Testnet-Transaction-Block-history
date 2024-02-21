import './index.css';
import Header from './Header';
import TransactionHistory from './TransactionHistory';
import TransactionDetails from './TransactionDetails';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <TransactionDetails />
        {/* <TransactionHistory /> */}
      </div>
    </div>
  );
}

export default App;

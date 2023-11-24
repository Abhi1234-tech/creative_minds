import './App.css';
import Table from './components/Table';
import { FetchAPI } from './components/Context';

function App() {
  return (
    <div className="App">
      <FetchAPI>
        <Table />
      </FetchAPI>
    </div>
  );
}

export default App;

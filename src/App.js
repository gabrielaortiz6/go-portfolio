import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { darkPurple } from './colors';

const App = () => {
  return (
    <div className="App bg-color">
      <Layout />
    </div>
  );
};

export default App;

import './App.css';
import Header from './Header';
import Content from './Content';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

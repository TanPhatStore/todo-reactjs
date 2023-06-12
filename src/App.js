import './App.css';
import Header from './Header';
import Content from './Content';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react'
function App() {
  
  const [users, setUsers] = useState([])
  const [reload,  setReload] =  useState(false)
  useEffect (() => {
      fetch('https://todo-nodejs-psi.vercel.app/api/users')
          .then(res => res.json())
          .then(data => setUsers(data))
  },[reload])

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login reload={reload} setReload={setReload} />} />
          {(user != null && user.accessControl  == true) ? <Route path= '/home' element={<Content />} /> : <></>}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

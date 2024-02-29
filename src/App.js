import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './routes/Main'
import {} from 'react-bootstrap'
import Login from './routes/Login';
import Register from './routes/Register';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> }/>
      <Route path="/register" element={ <Register /> }/>
      <Route path="/main" element={ <Main /> }/>
    </Routes>
    </>
  );
}

export default App;

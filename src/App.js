import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './routes/Main'
import Sign from './routes/Login'
import {} from 'react-bootstrap'
import Login from './routes/Login';
import Register from './routes/Register';
import Assets from './Assets'
import Spent from './Spent'
import Service from './Service';

function App() {

  let navigate = useNavigate()

  return (
    <>
    {/* 라우팅 */}
    <Routes>
      {/* 로그인 기능(Main.js) 구현하기 */}
      <Route path="/" element={ <Login/> } />
      <Route path="/register" element={ <Register/> }/>
      <Route path="/main" element={
        <div>
          <Main/>
          <Assets/> 
          <Spent/>
          <Service/>
        </div>
        } />
      <Route path="*" element={ <div>없는페이지임</div> } />
    </Routes>
    </>
  );
}

export default App;

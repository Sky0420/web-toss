import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Main from './routes/Main'
import Sign from './routes/Sign'
import {} from 'react-bootstrap'

function App() {

  let navigate = useNavigate()

  return (
    <>
    {/* 라우팅 */}
    <Routes>
      {/* 로그인 기능(Main.js) 구현하기 */}
      <Route path="/" element={ <Sign/> } />
      <Route path="/main" element={ <Main/> } />
      <Route path="*" element={ <div>없는페이지임</div> } />
    </Routes>
    </>
  );
}

export default App;

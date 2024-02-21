import loginLogo from "./../images/logo/Toss_Logo_Primary.png";
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login-container">
            <div className="login-logo logo-animation">
                <img src={loginLogo} alt="" />
            </div>
            <div className="form-container">
                <form action="#">
                    <h1>환영합니다.</h1>

                    <div className="input-box">
                        <input type="text" placeholder="아이디" required/>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="비밀번호" required/>
                    </div>

                    <div className="remember">
                        <label><input type="checkbox" /></label>
                        <a href="#"> 아이디 기억하기</a>
                    </div>
                    <Link to="/register" className="router-link" onClick={()=>{

                    }}>
                        <div className="register">회원가입</div>
                    </Link>

                    <Link to="/main" className="router-link">
                        <button type="submit">로그인</button>
                    </Link>
                    

                    <Link to="/find" className="router-link">
                        <div className="forgot">
                            <p>아이디/비밀번호 찾기</p>
                        </div>
                    </Link>
                    
                </form>
            </div>
        </div>
    )
 
}

export default Login;
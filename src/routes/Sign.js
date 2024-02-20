import loginLogo from "./../images/logo/Toss_Logo_Primary.png";

function Sign() {
    return (
        <div className="login-container">
            <div className="login-logo">
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
                    <div className="register">회원가입</div>

                    <button type="submit">로그인</button>

                    <div className="forgot">
                        <p>아이디/비밀번호 찾기</p>
                    </div>
                </form>
            </div>
        </div>
    )
 
}

export default Sign;
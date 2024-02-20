function Register() {
    return (
        <div>
            <div className="form-container">
                <form action="#">
                    <h1>Toss 계정 만들기</h1>

                    <div className="input-box">
                        <input type="text" placeholder="이름(선택사항)"/>
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder="이메일" required/>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="아이디" required/>
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="비밀번호" required/>
                    </div>

                    <button type="submit">가입하기</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Register;
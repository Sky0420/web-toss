import styled from "styled-components";
import loginLogo from "./../images/logo/Toss_Logo_Primary.png";
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
        <Container>
            <Logo>
                <img src={loginLogo} alt="" />
            </Logo>
            <Content>
                <h4>환영합니다</h4>
                <input type="text" className="inputs" placeholder="아이디" required/>
                <input type="password" className="inputs" placeholder="비밀번호" required/>
                <div className="flexbox">
                    <input type="checkbox" id="rememberId" />
                    <label htmlFor="rememberId">아이디 기억하기</label>
                    <StyledLink to="/register">
                        <span>회원가입</span>
                    </StyledLink>
                </div>
                <StyledLinkLogin to="/main">
                    <button>로그인</button>
                </StyledLinkLogin>
                <span className="findIdPwd">아이디/비밀번호 찾기</span>
            </Content>
        </Container>
        </>
    )
 
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const Logo = styled.div`
    img {
        width: 450px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    background: #e9e9e9;
    width: 500px;
    height: 550px;

    h4 {
        font-size: 40px;
        margin-top: 64px;
    }

    .inputs {
        padding: 15px;
        border: none;
        border-radius: 15px;
        width: 80%;
        margin: 15px;
    }

    .inputs:focus {
        outline: 1px solid #4daaf8;
    }

    .flexbox {
        width: 76%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        bottom: 20px;
    }

    .flexbox label {
        position: relative;
        right: 85px;
    }

    button {
        width: 80%;
        border: none;
        background: #0064FF;
        color: white;
        padding: 13px;
        margin: 15px;
        border-radius: 15px;
        position: relative;
        bottom: 30px;
    }

    .findIdPwd {
        position: relative;
        bottom: 50px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const StyledLinkLogin = styled(Link)`
    width: 100%;
`

export default Login;
import styled from "styled-components";
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
        <Container>
            <Content>
                <h4>Toss에 가입하기</h4>
                <input type="text" placeholder="이름 (선택사항)"/>
                <div className="email">
                    <input type="text" placeholder="이메일"/>
                    <span>@</span>
                    <input type="text" placeholder="주소"/>
                </div>
                <input type="text" placeholder="아이디"/>
                <input type="password" placeholder="비밀번호"/>
                <input type="password" placeholder="비밀번호 확인"/>
                <input type="text" placeholder="주소 (선택사항)"/>
                <StyledLink to="/">
                    <button>다음</button>
                </StyledLink>
            </Content>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    background: #eff0f1;
    width: 500px;

    h4 {
        font-size: 32px;
        margin-top: 26px;
    }

    input {
        padding: 15px;
        border: none;
        border-radius: 15px;
        width: 80%;
        margin: 10px;
        margin-block: 15px;
        background: white;
    }

    input:focus {
        outline: 1px solid #4daaf8;
    }

    .email {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .email input {
        width: 38%;
    }

    button {
        border: none;
        background: #0064FF;
        color: white;
        padding: 13px;
        padding-inline: 184px;
        margin: 15px;
        border-radius: 15px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export default Register;
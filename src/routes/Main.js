import { Link } from 'react-router-dom';
import loginLogo from './../images/logo/Toss_Logo_Primary.png'
import profilePicture from './../images/profile/profile.png'
import styled from "styled-components";
import Assets from './Assets'
import Spent from './Spent'
import Service from './Service';
import Manage from './Manage';
import Menu from './Menu';

function Main() {
    return (
        <>
        <Header>
            <img src={loginLogo} alt="" />
            <StyledLink>
                <img src={profilePicture} alt="Profile picture" />
                <span>
                    홍길동님, 반갑습니다.
                </span>
            </StyledLink>
        </Header>

        <Content>
            <Assets />
            <Service />
            <Spent />
            <Manage />
            <Menu />
        </Content>

        </>
    )
}

const Header = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background: white;

    img {
        width: 120px;
    }
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color: inherit;
    padding-right: 20px;

    img {
        border-radius: 100px;
        margin-inline: 15px;
        width: 35px;
    }
`

const Content = styled.div`
    display: flex;
    margin: 30px;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 100vw;
    max-height: 100vh;
`

export default Main;
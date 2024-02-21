import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import loginLogo from './../images/logo/Toss_Logo_Primary.png'

function Main() {
    return (
        <>
        <Navbar className="bg-body-tertiary d-flex">
            <Container className="nav d-flex flex-fill">
                <Navbar.Brand to="/">
                    <img className="logo" src={loginLogo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex-fill">
                    <Nav className="me-auto">
                        <Link to="/" className="header-links">홈</Link>
                        <Link to="#" className="header-links">링크</Link>
                    </Nav>
                </Navbar.Collapse>
                안녕하세요, 홍길동님!
            </Container>
        </Navbar>
        </>
    )
}

export default Main;
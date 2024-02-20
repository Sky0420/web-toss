import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <>
        <Navbar className="bg-body-tertiary">
            <Container className="nav">
                <Navbar.Brand to="/">
                    <img className="logo" src="/images/logo/Toss_Logo_Primary.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="header-links">홈</Link>
                        <Link to="#" className="header-links">링크</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Main;
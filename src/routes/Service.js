import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Service() {
    return (
        <>
        <Container>
            <StyledLink>계좌개설</StyledLink>
            <StyledDivider />
            <StyledLink>카드발급</StyledLink>
            <StyledDivider />
            <StyledLink>대출받기</StyledLink>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    background: white;
    width: 350px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: 15px;
    padding-inline: 30px;
`

const StyledDivider = styled.div`
    border: 0;
    margin: auto;
    height: 35px;
    width: 1px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25));
`

export default Service;
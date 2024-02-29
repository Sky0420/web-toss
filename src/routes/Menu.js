import styled from "styled-components";

function Menu() {
    return (
        <>
        <Container>
            <h4>빠른 메뉴</h4>
            <StyledDivider />
            <div>
                <span>프로필 설정</span>
                <p>뱃지, 칭호 등으로 프로필을 꾸며보세요!</p>
            </div>
            <div>
                <span>신용등급 확인</span>
                <p>무료로, 빠르게 조회할 수 있습니다.</p>
            </div>
            <div>
                <span>대출한도</span>
                <p>신용등급에 따라 서류가 필요할 수도 있습니다.</p>
            </div>
            <div>
                <span>투자</span>
                <p>지금 투자할 수 있는 곳을 알아보세요.</p>
            </div>
            <div>
                <span>Toss Pro</span>
                <p>월 4,900원으로 더 유용한 Toss를 경험하세요!</p>
            </div>
        </Container>
        </>
    )
}

const Container = styled.div`
    background: white;
    border-radius: 15px;
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    h4 {
        padding: 30px;
    }

    div {
        padding: 30px;
    }
`

const StyledDivider = styled.hr`
    border: 0;
    margin: auto;
    height: 1px;
    width: 350px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
`

export default Menu;
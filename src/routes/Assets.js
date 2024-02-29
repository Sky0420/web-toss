import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faHouse, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


function Assets() {
    return (
        <>
        <Container>
            <Content>
                <FontAwesomeIcon icon={faBuildingColumns} className="fa-2x fa-fw" />
                <div className="detail">
                    <div>KB 국민은행 일반통장</div>
                    <div>62,315,713,264원</div>
                </div>
                <button>송금</button>
            </Content>
            <StyledDivider />
            <Content>
                <FontAwesomeIcon icon={faHouse} className="fa-2x fa-fw" />
                <div className="detail">
                    <div>부동산</div>
                    <div>5,615,124,782원</div>
                </div>
                <button>조회</button>
            </Content>
            <StyledDivider />
            <Content>
                <FontAwesomeIcon icon={faArrowTrendUp} className="fa-2x fa-fw" />
                <div className="detail">
                    <div>주식</div>
                    <div>-1,651,753,124원</div>
                </div>
                <button>조회</button>
            </Content>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 350px;
    border-radius: 15px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;

    .detail {
        padding: 20px;
        flex-grow: 1;
    }

    button {
        border: none;
        border-radius: 10px;
        padding: 10px;
        color: white;
        background: #3378f6;
    }
`

const StyledDivider = styled.hr`
    border: 0;
    margin: auto;
    height: 1px;
    width: 90%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.25));
`

export default Assets;
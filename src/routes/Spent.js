import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function Spent() {
    return (
        <>
        <Content>
            <div className="flexbox">
                <FontAwesomeIcon icon={faCreditCard} className="fa-2x fa-fw" />
                <div className="detail">
                    <span>이번 달 쓴 금액</span>
                    <h4>612,612,512원</h4>
                </div>
                <button>내역</button>
            </div>
            <div className="flexbox">
                <FontAwesomeIcon icon={faSackDollar} className="fa-2x fa-fw" />
                <div className="detail">
                    <span>이번 달 낼 카드값</span>
                    <h4>1,013,512,674원</h4>
                </div>
            </div>
        </Content>
        </>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 350px;

    .flexbox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        padding: 20px;

        button {
            border: none;
            border-radius: 10px;
            padding: 10px;
            color: white;
            background: #3378f6;
        }

        .detail {
            flex-grow: 1;
        }
    }
`

export default Spent;
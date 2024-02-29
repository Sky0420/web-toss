import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsProgress, faMagnifyingGlass, faMoneyBillWave,
    faHandHoldingDollar, faPiggyBank
} from '@fortawesome/free-solid-svg-icons'

function Manage() {
    return (
        <>
        <Container>
            <div className="flexbox">
                <div>
                    <span>내 자산 집중 관리</span>
                    <h4>투자, 은퇴, 세테크</h4>
                </div>
                <FontAwesomeIcon icon={faBarsProgress} className="fa-4x" />
            </div>
            <Content>
                <div className="content-flexbox">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="fa-2x fa-fw" />
                    <div className="detail">
                        <p>펀드 건강검진</p>
                        <span>금융주치의가 분석한 자산 현황</span>
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <StyledDivider />
                <div className="content-flexbox">
                    <FontAwesomeIcon icon={faHandHoldingDollar} className="fa-2x fa-fw" />
                    <div className="detail">
                        <p>은퇴 | 노후 준비</p>
                        <span>풍요롭고 여유있는 은퇴생활</span>
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <StyledDivider />
                <div className="content-flexbox">
                    <FontAwesomeIcon icon={faPiggyBank} className="fa-2x fa-fw" />
                    <div className="detail">
                        <p>남은 절세한도</p>
                        <span>세테크 현황 파악하고 절세혜택 받기</span>
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </Content>
        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 400px;
    align-items: center;
    border-radius: 15px;

    .flexbox {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        gap: 80px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 90%;
    border-radius: 15px;
    background: #e4e6e7;
    margin-bottom: 20px;

    .content-flexbox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin: 20px;
    }

    p {
        margin: 0;
    }

    .detail {
        flex-grow: 1;
    }
`

const StyledDivider = styled.hr`
    border: 0;
    margin: auto;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.25));
`

export default Manage;
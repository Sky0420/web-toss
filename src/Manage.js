import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsProgress, faMagnifyingGlass, faMoneyBillWave,
    faHandHoldingDollar, faPiggyBank
} from '@fortawesome/free-solid-svg-icons'

let Bold = styled.span`
    font-weight: bolder;
    font-size: 20px; 
`;

let ManageDivider = styled.span`
    border: 1px solid rgb(187, 187, 187);
    width: 400px;
    margin: auto;
`



function Manage() {
    return (
        <div className="container d-flex flex-column justify-content-around manage-wrapper">

            <div className="d-flex justify-content-around">
                <div className="p-3 pt-5">
                    내 자산 집중관리<br></br>
                    <Bold>투자, 은퇴, 세테크</Bold>
                </div>
                <div className="p-3 text-end pt-4">
                    <FontAwesomeIcon icon={faBarsProgress} className="fa-6x" />
                </div>
            </div>

            <div className="p-3 m-3 mb-4 d-flex flex-column gap-4 manage-container">
                
                <div className="p-2 d-flex justify-content-center align-items-center gap-4">
                    <div><FontAwesomeIcon icon={faMoneyBillWave} className="fa-2x" /></div>
                    <div className="flex-fill">
                        펀드 건강검진<br></br>
                        금융 주치의가 분석한 자산 현황
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>

                <ManageDivider/>

                <div className="p-2 d-flex justify-content-center align-items-center gap-4">
                    <div><FontAwesomeIcon icon={faHandHoldingDollar} className="fa-2x" /></div>
                    <div className="flex-fill">
                        은퇴 준비율<br></br>
                        은퇴 후 필요한 금액 미리 준비하기
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>

                <ManageDivider/>

                <div className="p-2 d-flex justify-content-center align-items-center gap-4">
                    <div><FontAwesomeIcon icon={faPiggyBank} className="fa-2x" /></div>
                    <div className="flex-fill">
                        남은 절세한도<br></br>
                        세테크 현황 파악하고 절세혜택 받기
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Manage;
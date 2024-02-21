import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

function Spent() {
    return (
        <>
        <div className="container">
            <div className="asset d-flex justify-content-center align-items-center gap-4">
                <FontAwesomeIcon icon={faCreditCard} className="fa-2x"/>
                <div className="details flex-fill">
                    <div className="asset-info">이번 달 쓴 금액</div>
                    <div className="asset-balance">95,124,765원</div>
                </div>
                <button className="transfer-btn">내역</button>
            </div>
            <div className="asset d-flex justify-content-center align-items-center gap-4">
                <FontAwesomeIcon icon={faPiggyBank} className="fa-2x"/>
                <div className="details flex-fill">
                    <div className="asset-info">다음 달 낼 카드값</div>
                    <div className="asset-balance">64,152,736원</div>
                </div>
                <button className="transfer-btn">조회</button>
            </div>
        </div>
        </>
    )
}

export default Spent;
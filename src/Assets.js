import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faHouse, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";


function Assets() {
    return (
        <>
        <div className="container">
            <div className="asset d-flex justify-content-center align-items-center gap-4">
                <FontAwesomeIcon icon={faBuildingColumns} className="fa-2x"/>
                <div className="details flex-fill">
                    <div className="asset-info">KB 통장</div>
                    <div className="asset-balance">4,549,234,102원</div>
                </div>
                <button className="transfer-btn">송금</button>
            </div>
            <div className="asset d-flex justify-content-center align-items-center gap-4">
                <FontAwesomeIcon icon={faHouse} className="fa-2x"/>
                <div className="details flex-fill">
                    <div className="asset-info">부동산 (추정)</div>
                    <div className="asset-balance">51,503,312,511원</div>
                </div>
                <button className="transfer-btn">조회</button>
            </div>
            <div className="asset d-flex justify-content-center align-items-center gap-4">
                <FontAwesomeIcon icon={faArrowTrendUp} className="fa-2x"/>
                <div className="details flex-fill">
                    <div className="asset-info">주식</div>
                    <div className="asset-balance">-132,145,312원</div>
                </div>
                <button className="transfer-btn">조회</button>
            </div>
        </div>
        </>
    )
}

export default Assets;
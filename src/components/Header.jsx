import { FaStar } from "react-icons/fa6";


function Header() {
  return (
    <>
        <header>
            <div className="header-container">
                <div className="header-text-wrap">
                    <h1 className="header-title">Product Review UI</h1>
                    <p className="header-text">How did we do?</p>
                    <p className="header-text">Let us know</p>

                    <div className="stars-wrap">
                        <div className="star">
                            <FaStar className="star" />
                        </div>
                        <div className="star">
                            <FaStar className="star" />
                        </div>
                        <div className="star">
                            <FaStar className="star" />
                        </div>
                        <div className="star">
                            <FaStar className="star" />
                        </div>
                        <div className="star">
                            <FaStar className="star" />
                        </div>
                    </div>

                    <button className="add-review-btn">Add Your Review</button>
                    

                </div>
                <div className="header-img"></div>
            </div>
        </header>
    </>
  )
}

export default Header
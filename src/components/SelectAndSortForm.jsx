
function SelectAndSortForm() {
  return (
    <div >
        <div className="select-sort-container">
            <div className="select-title-wrap">
                <p className="h3-select-title">Select a product and choose filter and sort method.</p>
            </div>
            {/* @ToDo: <form onSubmit={} > */}
            <form >
                <div className="form-content">
                    <div className="drop-downs-wrap">
                        <div className="dropdown">
                            <label htmlFor="productsInfo">Select a product</label>
                            <select name="" id="">
                                <option value="" >-- select one --</option>
                                <option value="cannon">Cannon EOS Rebel T8i DSLR (body only)</option>
                                <option value="ridge">Ridge Wallet</option>
                                <option value="standupdesk">Height Adjustable Stand Up Desk Converter</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <label htmlFor="">Filter ratings by...</label>
                            <select name="" id="">
                                <option value="" >-- select one --</option>
                                <option value="ascend">Highest to Lowest</option>
                                <option value="descend">Lowest to Highest</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <label htmlFor="">Sort by...</label>
                            <select name="" id="">
                                <option value="" >-- select one --</option>
                                <option value="5star">All 5 star reviews</option>
                                <option value="4star">All 4 star reviews</option>
                                <option value="3star">All 3 star reviews</option>
                                <option value="2star">All 2 star reviews</option>
                                <option value="1star">All 1 star reviews</option>
                            </select>
                        </div>
                    </div>

                    <div className="btn-wrap">
                        <button className="submitBtn">Submit</button>
                    </div>

                </div>
            </form>

        </div>
    </div>
  )
}

export default SelectAndSortForm
import { useState } from "react";
import CardList from "./shared/CardList";
import ProductsInfo from "../data/ProductsInfo.js";

function ProductsList() {
  const [productItem, setProductItem] = useState(ProductsInfo);


  return (
    <CardList>
      <div className="card-list">
        <div className="card-list-header">
          <p>{productItem[0].product}</p>
          <img className='product-thumbnail' src="src/assets/product-photos/cannon/cannon01.jpg" alt="" />
          <p>Avg. Rating: </p>
        </div>
          <p className='product-desc'>{productItem[0].description}</p>
        <div className="white-fade">
          <a className='see-more' href="#">+ See More</a>
        </div>
      </div>

      <div className="card-list">
        <div className="card-list-header">
          <p>{productItem[1].product}</p>
          <img className='product-thumbnail' src="src/assets/product-photos/standup-desk-converter/vivo-desk-01.jpg" alt="" />
          <p>Avg. Rating: </p>
        </div>
          <p className='product-desc'>{productItem[1].description}</p>
        <div className="white-fade">
          <a className='see-more' href="#">+ See More</a>
        </div>
      </div>

      <div className="card-list">
        <div className="card-list-header">
          <p>{productItem[2].product}</p>
          <img className='product-thumbnail' src="src/assets/product-photos/ridge-wallet/ridge02.webp" alt="" />
          <p>Avg. Rating: </p>
        </div>
          <p className='product-desc'>{productItem[2].description}</p>
        <div className="white-fade">
          <a className='see-more' href="#">+ See More</a>
        </div>
      </div>
    </CardList>
  )
}

export default ProductsList;
import ListCard from "./shared/ListCard";

function ProductItem() {
  return (
    <ListCard>
        <div className="card-list-header">
          <p>Cannon EOS Rebel T8i DSLR (body only)</p>
          <img className='product-thumbnail' src="src/assets/product-photos/cannon/cannon01.jpg" alt="" />
          <p>Avg. Rating: 4.8</p>
        </div>
        <p className='product-desc'>A lightweight and easy-to-use DSLR camera that makes the perfect addition for first-time users, or for those looking for an affordable upgrade. Equipped with a 24. 1 Megapixel CMOS (APS-C) sensor, DIGIC 8 image processor and an ISO range of 100-25600 expandable to 51200*), the EOS Rebel T8i is our most advanced EOS Rebel yet, delivering high-quality performance that kicks your photos and videos up a notch. Whether you’re capturing photos of friends or family, or snapping fast-moving subjects like pets or athletes, you’ll ccurately and quickly remain locked on your subject with the camera’s 45-point all cross-type AF system**, Face and Eye Detection AF and high-speed continuous shooting of up to 7 frames per second. For vloggers or social media users , the EOS Rebel T8i offers 4K 4p video capability and vertical video support, making it easy to capture high-quality videos that can be uploaded and shared with the built-in Wi-Fi*** and Bluetooth^ technology. You’ll have a must-have tool, no matter your skill level, for bringing your photos and videos to life.</p>
      <div className="white-fade">
        <a className='see-more' href="#">+ See More</a>
      </div>
    </ListCard>
  )
}

export default ProductItem
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} = props;
  const location = useLocation();
  //console.log(location);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
    <div className={`${location.pathname==="/store" ? `gr-${grid}`: "col-4"}`} >
        <Link to={"/"} className='product-card position-relative'>
          <div className='wistlist-icon position-absolute'>
            <Link to={"/"}><img src='images/wish.svg' alt='wishlist'/></Link>
          </div>
            <div className='product-image'>
              <img src='/images/watch.jpg' className='img-fluid' alt='product'/>
              <img src='/images/watch.jpg' className='img-fluid' alt='product'/>
            </div>
              <div className='product-details'>
                  <h6 className='brand'>Havels</h6>
                  <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                  </h5>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                   <p className={`description ${grid===12 ? "d-block" : "d-none" }`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className='price'>$100.00</p>
              </div>
              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to={"/"}><img src='images/prodcompare.svg' alt='addcart'/></Link>
                  <Link to={"/"}><img src='images/view.svg' alt='addcart'/></Link>
                  <Link to={"/"}><img src='images/add-cart.svg' alt='addcart'/></Link>
                </div>
              </div>
            
        </Link>
    </div>

    <div className={`${location.pathname==="/store" ? `gr-${grid}`: "col-4"}`} >
        <Link to={"/"} className='product-card position-relative'>
          <div className='wistlist-icon position-absolute'>
            <Link to={"/"}><img src='images/wish.svg' alt='wishlist'/></Link>
          </div>
            <div className='product-image'>
              <img src='/images/watch.jpg' className='img-fluid' alt='product'/>
              <img src='/images/watch.jpg' className='img-fluid' alt='product'/>
            </div>
              <div className='product-details'>
                  <h6 className='brand'>Havels</h6>
                  <h5 className='product-title'>
                    Kids headphones bulk 10 pack multi colored for students
                  </h5>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className={`description ${grid===12 ? "d-block" : "d-none" }`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                  <p className='price'>$100.00</p>
              </div>
              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  <Link to={"/"}><img src='images/prodcompare.svg' alt='addcart'/></Link>
                  <Link to={"/"}><img src='images/view.svg' alt='addcart'/></Link>
                  <Link to={"/"}><img src='images/add-cart.svg' alt='addcart'/></Link>
                </div>
              </div>
            
        </Link>
    </div>
    
    </>
  )
}

export default ProductCard
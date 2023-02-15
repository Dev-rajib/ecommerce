import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const OurStore = () => {

    const [grid, setGrid] = useState(4);
  // alert(grid);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

  return (
    <>
     <Meta title="Our Store" />
     <Breadcrumb title="Our Store"    />
     <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <div className='filter-title'>Shop By Category</div>
                        <div>
                            <ul className='ps-0'>
                                <li>Watch</li>
                                <li>TV</li>
                                <li>Camera</li>
                                <li>Laptop</li>
                            </ul>
                        </div>
                    </div>
                        <div className='filter-card mb-3'>
                            <div className='filter-title'>Filter by </div>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                            </div>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox'  value="" id=""/>
                                    <label className='form-check-label' htmlFor="">In Stock (1)</label>
                                </div> 
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value="" id=""/>
                                    <label className='form-check-label' htmlFor="">Out of Stock (0)</label>
                                </div>    
                            </div>
                            <div>
                                <h5 className='sub-title'>Price</h5>
                            </div> 
                            <div className='d-flex align-items-center gap-10'>
                                <div className="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="From"/>
                                    <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="to"/>
                                    <label htmlFor="floatingInput">To</label>
                                </div>
                            </div>
                            <div>
                                <h5 className='sub-title'>Colors</h5>
                            </div>
                            <div>
                                <ul className='colors ps-0'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className='sub-title'>Size</h5>
                            </div>

                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox'  value="" id="color-1"/>
                                <label className='form-check-label' htmlFor="color-1">S (2)</label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox'  value="" id="color-2"/>
                                <label className='form-check-label' htmlFor="color-2">M (2)</label>
                            </div>

                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox'  value="" id="color-3"/>
                                <label className='form-check-label' htmlFor="color-3">L (2)</label>
                            </div>

                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox'  value="" id="color-4"/>
                                <label className='form-check-label' htmlFor="color-4">XL (2)</label>
                            </div>

                            <div className='form-check'>
                                <input className='form-check-input' type='checkbox'  value="" id="color-5"/>
                                <label className='form-check-label' htmlFor="color-5">XXL (2)</label>
                            </div> 

                        </div>
                    <div className='filter-card mb-3'>
                        <div className='filter-title'>Product Tags</div>
                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Tablet</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                        </div>
                        </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Random Product</h3>
                        <div className='random-products d-flex'>
                            <div className='w-25'>
                                <img src='images/watch.jpg' className='img-fluid' alt='watch' />
                            </div>
                            <div className='w-75'>
                                <div>
                                    <h6>Kids Headphone bluk 10 pack multi colored for students </h6>
                                    <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                    />
                                    <p><b>$ 300</b></p>
                                </div>
                            </div>
                        </div>

                        <div className='random-products d-flex'>
                            <div className='w-25'>
                                <img src='images/headphone.jpg' className='img-fluid' alt='watch' />
                            </div>
                            <div className='w-75'>
                                <div>
                                    <h6>Kids Headphone bluk 10 pack multi colored for students </h6>
                                    <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                    />
                                    <p><b>$ 100</b></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-9'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='mb-0'>Sort&nbsp;By:</p>
                            <select name="" className='form-control from-select' id=''>
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected>Best Selling</option>
                                <option value="title-ascending" selected>Alphabetically, A-Z</option>
                                <option value="title-descending" selected>Alphabetically, Z-A</option>
                                <option value="price-ascending" selected>Price , Low to High</option>
                                <option value="price-descending" selected>Price , High to Low</option>
                                <option value="created-ascending" selected>Date , Old to New</option>
                                <option value="created-descending" selected>Date , new to Old</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                            <p className='totalproducts mb-0'>21 Products</p>
                            <div className='d-flex gap-10 align-items-center grid'>
                                <img onClick={()=>{setGrid(3)}} src='/images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                                <img onClick={()=>{setGrid(4)}} src='/images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                                <img onClick={()=>{setGrid(6)}} src='/images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                                <img onClick={()=>{setGrid(12)}} src='/images/gr.svg' className='d-block img-fluid' alt='grid'/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='products-list pb-5'>
                        <div className='d-flex gap-15 flex-wrap'>
                        <ProductCard grid={grid} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default OurStore

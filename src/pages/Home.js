import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpacialProduct from '../components/SpacialProduct';

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row p-3'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src='/images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHANGED FOR PROS.</h4>
                <h5>IPad s13+Pro.</h5>
                <p>From Rs.90000 or Rs. 3200/mo.</p>
                <Link className='button' to={"/"}>Buy Now</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative '>
              <img src='/images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>BEST OFFER</h4>
                <h5>IPad s13+Pro.</h5>
                <p>From Rs.90000 or Rs. 3200/mo.</p>
              </div>
            </div>

            <div className='small-banner position-relative '>
              <img src='/images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>BEST SAKE.</h4>
                <h5>IPad s13+Pro.</h5>
                <p>From Rs.90000 or Rs. 3200/mo.</p>
              </div>
            </div>

            <div className='small-banner position-relative '>
              <img src='/images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>NEW arrivel</h4>
                <h5>IPad s13+Pro.</h5>
                <p>From Rs.90000 or Rs. 3200/mo.</p>
              </div>
            </div>

            <div className='small-banner position-relative'>
              <img src='/images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>new style</h4>
                <h5>IPad s13+Pro.</h5>
                <p>From Rs.90000 or Rs. 3200/mo.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              <div className="d-flex align-items-center gap-15">
                <img src='/images/service.png' alt='service'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all order over rs 200</p>
                </div>

              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='/images/service-02.png' alt='service'/>
                <div>
                <h6>Daily Surprice Offer</h6>
                  <p className="mb-0">Save up to 25% off</p>
                </div>

              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='/images/service-03.png' alt='service'/>
                <div>
                <h6>Support 24x7</h6>
                  <p className="mb-0">Shop with an export</p>
                </div>

              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='/images/service-04.png' alt='service'/>
                <div>
                <h6>Affordable Prices </h6>
                  <p className="mb-0">Get Factory direct Price</p>
                </div>

              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='/images/service-05.png' alt='service'/>
                <div >
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payments</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex flex-wrap  justify-content-between wrap-grid align-items-center'>
              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Smart Head Phone</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/acc.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Laptop</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/laptop.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/tv.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/camera.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Smart Head Phone</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/acc.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Laptop</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/laptop.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/tv.jpg' alt='camera'/>
              </div>

              <div className='d-flex align-items-center gap-15'>
                <div>
                  <h6>Camera</h6>
                  <p>10 items</p>
                </div>
                <img src='/images/camera.jpg' alt='camera'/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className='famous-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/tab.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62/mo for 24 mo *</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/tab.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62/mo for 24 mo *</p>
              </div>
            </div>
          </div>
          
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/tab.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62/mo for 24 mo *</p>
              </div>
            </div>
          </div>

          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='/images/tab.jpg' className='img-fluid' alt='famous'/>
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From $399 or $16.62/mo for 24 mo *</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='spacial-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Spacial Products</h3>
          </div>
        </div>
        <div className='row '>
          <SpacialProduct/>
          <SpacialProduct/>
          <SpacialProduct/>
          <SpacialProduct/>
          <SpacialProduct/>
          <SpacialProduct/>
        </div>
      </div>
    </section>

    <scetion className="marque-wrapper py-5">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
              <div className="mx-4 w-25"><img src='images/brand-01.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-02.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-03.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-04.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-05.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-06.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-07.png' alt='brand'/></div>
              <div className="mx-4 w-25"><img src='images/brand-08.png' alt='brand'/></div>
            </Marquee>
            </div>
          </div>
        </div>
      </div>

    </scetion>


    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Letest Blogs</h3>
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          <div className='col-3'>
            <BlogCard />
          </div>
          
        </div>
      </div>
    </section>

    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Product</h3>
          </div>
        </div>
        <div className='row'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
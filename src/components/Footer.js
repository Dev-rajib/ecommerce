import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'/>
                <h2 className='mb-0 text-white'>Sign Up for newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group ">
                <input type="text" className="form-control py-1" 
                placeholder="Your Email Address" 
                aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                    </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white'>Contact Us</h4>
              <div className='text-white fs-6'>
                <address>5/163,Jatin Das Nagar ,<br/> Belgharia,<br/> Kolkata-700056</address>
                <a href='tel:+91 9874918772' className='text-white mt-3 d-block mb-2'>+91 9874918772 </a>
                <a href='mailto:rajibsahadeveloper@gmail.com' className='text-white mt-3 d-block mb-2'>rajibsahadeveloper@gmail.com </a>
                <div className='social-icons d-flex align-items-center gap-30'>
                  <a href="/" className='text-white fs-5'>
                    <BsLinkedin/>
                  </a>
                  <a href="/" className='text-white fs-5'>
                    <BsGithub/>
                  </a>
                  <a href="/" className='text-white fs-5'>
                    <BsYoutube/>
                  </a>
                  <a href="/" className='text-white fs-5'>
                    <BsInstagram/>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={"/"}  className="text-white py2 mb-1">Privacy Policy</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Refund Policy</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Shipping Policy</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Terms & Condition</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={"/"}  className="text-white py2 mb-1">About Us</Link>
                <Link to={"/"}  className="text-white py2 mb-1">FAQ</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Contact</Link>
               </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={"/"}  className="text-white py2 mb-1">Laptop</Link>
                <Link to={"/"}  className="text-white py2 mb-1">HeadPhone</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Tablets</Link>
                <Link to={"/"}  className="text-white py2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered By Reeyaaz</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

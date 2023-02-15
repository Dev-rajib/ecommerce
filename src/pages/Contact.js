import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta';
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";

const Contact = () => {
  return (
    <>
    <Meta title="Contact" />
    <Breadcrumb title="Contact" />
    <div className='contact-wrapper contact-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.90111119811!2d88.39421781541927!3d22.657475335558868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7742070a95%3A0x2b774bdcbcb876f9!2sReeyaaz!5e0!3m2!1sen!2sin!4v1676011156788!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              className='border-0 w-100'
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='content-inner-wrapper d-flex justify-content-between'>
                <div><h3 className='content-title mb-4'>Contact</h3>
                <div >
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type="text" className='form-control' placeholder='Eame'/>
                    </div>
                    <div>
                      <input type="text" className='form-control' placeholder='Mobile'/>
                    </div>
                    <textarea name='comment' className='w-100 form-control' id='' placeholder='Comment' cols="30" rows="10"></textarea>
                    <div className='button border-0'>Submit</div>
                  </form>
                </div>
                </div>
                <div><h3 className='content-title'>Get in touch with Us</h3>
                  <div className='contactAdress'>
                    <ul className='ps-1 mt-2'>
                      <li><AiOutlineHome/>  <span className='addressname'>5/163, Jatin Das Nagar , Belgharia , Kolkata-56</span></li>
                      <li><BiPhoneCall/>  <span className='addressname'>9874918772</span></li>
                      <li><AiOutlineMail/>  <span className='addressname'>rajib.apd@gmail.com</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
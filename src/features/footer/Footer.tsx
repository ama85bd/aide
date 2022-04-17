import React from 'react';
import './Footer.css';
import phoneImg from '../photos/phoneimg.png';
import googlePlay from '../photos/Google Play - eng.png';
import appStore from '../photos/App Store - eng.png';
import footershopicon from '../photos/icons/footershopicon.png';
import footerposicon from '../photos/icons/footerposicon.png';
import footererpicon from '../photos/icons/footererpicon.png';
import store from '../photos/visitPhysicalStore.png';
import { Col, Row } from 'reactstrap';

const Footer = () => {
  return (
    <div
      className=' footer-main '
      style={{ color: ' #0C0C0C', background: '#F6F8FB', width: '100%' }}
    >
      <Row>
        <Col md={5}>
          <div className='flex gap-5 ' style={{ marginTop: '2rem' }}>
            <div>
              <div>
                <img
                  className=' w-11 transition duration-500 ease-in-out  transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer'
                  src={footershopicon}
                  alt=''
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className=' w-11 transition duration-500 ease-in-out  transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer'
                  src={footerposicon}
                  alt=''
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className=' w-11 transition duration-500 ease-in-out  transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer'
                  src={footererpicon}
                  alt=''
                />
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={2} style={{ marginRight: '1.5rem' }}>
              <img className=' w-16 ' src={phoneImg} alt='' />
            </Col>
            <Col md={9} style={{ marginTop: '1.5rem' }}>
              <h1
                className=' font-bold'
                style={{
                  color: '#676767',
                  fontSize: '1.5rem',
                  marginBottom: '-.3rem',
                }}
              >
                Download our App
              </h1>
              <div className=' flex gap-2 '>
                <div className=' mt-3 '>
                  <img
                    height='34'
                    width='120'
                    className=' w-28 transition duration-500 ease-in  transform hover:-translate-y-0.5 hover:scale-90 cursor-pointer'
                    src={googlePlay}
                    alt=''
                  />
                </div>
                <div className=' mt-3 '>
                  <img
                    height='34'
                    width='120'
                    className='w-28 transition duration-500 ease-in  transform hover:-translate-y-0.5 hover:scale-90 cursor-pointer'
                    src={appStore}
                    alt=''
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} style={{ marginTop: '1.5rem' }}>
          <div className=' ml-16'>
            <h1
              className=' font-bold'
              style={{
                color: '#676767',
                fontSize: '1.5rem',
                marginBottom: '-.3rem',
              }}
            >
              You're very close to us
            </h1>
            <div>
              <img
                height='40'
                className=' w-48 mt-3 transition duration-500 ease-in  transform hover:-translate-y-0.5 hover:scale-90 cursor-pointer'
                src={store}
                alt=''
              />
            </div>
          </div>
        </Col>
      </Row>
      <div
        className=' grid grid-cols-4 mx-3  pb-3'
        style={{ borderBottom: '1px solid #E2EFFF' }}
      >
        {/* <div className='flex gap-5 col-span-2 md:ml-12'>
          <div>
            <div>
              <img
                className=' w-11 transition duration-500 ease-in-out  transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer'
                src={footershopicon}
                alt=''
              />
            </div>
          </div>
          <div>
            <div>
              <img
                className=' w-11 transition duration-500 ease-in-out  transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer'
                src={footerposicon}
                alt=''
              />
            </div>
          </div>
          <div>
            <div>
              <img
                className=' w-11 transition duration-500 ease-in-out  transform hover:-translate-y-0.5 hover:scale-110 cursor-pointer'
                src={footererpicon}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className=' ml-10'>
          <div className=' grid grid-cols-4 gap-1'>
            <div className=' col-span-1'>
              <img className=' w-16 ' src={phoneImg} alt='' />
            </div>
            <div className=' col-span-3'>
              <h1 className=' font-bold' style={{ color: '#676767' }}>
                Download our App
              </h1>
              <div className=' flex gap-2 '>
                <div className=' mt-3 '>
                  <img
                    className=' w-28 transition duration-500 ease-in  transform hover:-translate-y-0.5 hover:scale-90 cursor-pointer'
                    src={googlePlay}
                    alt=''
                  />
                </div>
                <div className=' mt-3 '>
                  <img
                    className='w-28 transition duration-500 ease-in  transform hover:-translate-y-0.5 hover:scale-90 cursor-pointer'
                    src={appStore}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' ml-16'>
          <h1 className=' font-bold' style={{ color: '#676767' }}>
            You're very close to us
          </h1>
          <div>
            <img
              className=' w-48 mt-3 transition duration-500 ease-in  transform hover:-translate-y-0.5 hover:scale-90 cursor-pointer'
              src={store}
              alt=''
            />
          </div>
        </div> */}
      </div>
      <div
        className=' grid grid-cols-1 md:grid-cols-5 ml-12  py-3   overflow-x-hidden'
        style={{ borderBottom: '1px solid #E2EFFF' }}
      >
        {/* Footer div1  */}
        <div className=' col-span-2'>
          <div>
            <h1 className=' font-bold text-xl' style={{ color: '#009999' }}>
              Become A Proud Owner of A aide Store
            </h1>
            <h3 className=' text-xl font-bold mt-4'>Sign up for news</h3>
            <p className=' text-sm mt-4 '>
              Keep up to date with the latest product launches <br /> and news.
              Find out more about our brands and <br /> get special promo codes.
            </p>
          </div>
          <div>
            <form action='' className=' mt-8'>
              <input
                type='email'
                placeholder='Your e-mail address'
                className=' py-3 px-2 w-3/5 rounded-lg border-2 border-blue-100 hover:border-blue-300'
              />{' '}
              <br />
              {/* <input type="submit" value="Sign up for newsletter" className=' py-3 w-3/5 custom-btn btn-3  ' /> */}
              <div className='frame mt-4'>
                <button className=' custom-footer_signupbtn footer_signupbtn  '>
                  {' '}
                  <span>Sign up for newsletter</span>{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Footer div2  */}
        <div>
          <div className=' text-sm'>
            <ul>
              <li className=' text-xl font-bold mb-5'> How to buy</li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Payment methods
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Order and pick up
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Order with delivery
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Shopping over the phone
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Returns{' '}
              </li>
            </ul>
          </div>
        </div>
        {/* Footer div3  */}
        <div>
          <div className=' text-sm'>
            <ul>
              <li className=' text-xl font-bold mb-5 '> Help</li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Contact
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Online Help
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Our Commitments
              </li>
            </ul>
          </div>
        </div>
        {/* Footer div4  */}
        <div>
          <div className=' text-sm'>
            <ul>
              <li className=' text-xl font-bold mb-5'> About</li>
              <li className='font-medium mt-3  transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                About us
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Press Office
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                For suppliers
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Regulations
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Privacy Policy
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Cookies
              </li>
              <li className=' font-medium mt-3 transition-all ease-in-out    duration-700 transform hover:-translate-y-0.5 cursor-pointer'>
                Personal Data Request
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className=' flex justify-between items-center mx-12  '
        style={{ color: '#676767' }}
      >
        <div>
          <h1 className=' font-semibold italic text-sm'>
            © 2021-{new Date().getFullYear()} aide Business Solution and its
            affiliates
          </h1>
        </div>
        <div className=' flex gap-3 justify-around items-center '>
          <h1 className=' font-bold text-base text-gray-400 blink_me'>
            JOIN US ON
          </h1>
          <div className='flex justify-evenly gap-5 align-middle mt-5 text-center'>
            <div>
              <i className='footer_icon text-white bg-blue-800 text-2xl fab fa-facebook-f cursor-pointer'></i>
              <p className=' footer_icon_text'>Facebook</p>
            </div>
            <div>
              <i className=' footer_icon text-2xl  text-center text-white  bg-blue-400  fab fa-twitter cursor-pointer'></i>
              <p className=' footer_icon_text'>Twitter</p>
            </div>
            <div>
              <i className='instagram_icon  text-white text-2xl fab fa-instagram cursor-pointer '></i>
              <p className=' footer_icon_text'>Instagram</p>
            </div>
            <div>
              <i className=' footer_icon text-2xl text-white bg-blue-500 fab fa-linkedin-in cursor-pointer'></i>
              <p className=' footer_icon_text '>Linkedin</p>
            </div>
            <div>
              <i className='footer_icon text-2xl text-white bg-red-600 fab fa-youtube cursor-pointer'></i>
              <p className=' footer_icon_text'>YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

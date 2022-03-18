import React, { useEffect, useState } from 'react';
import { Navbar } from 'reactstrap';
import Product from '../api/product';
import { trackPromise } from 'react-promise-tracker';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UseComponentVisible from './test';

function TopSearchBar() {
  const [remainingLifeData, setRemainingLifeData] = useState([] as any[]);

  console.log('product', remainingLifeData);

  useEffect(() => {
    //call API to get remaining life data
    const getRemainingLifeData = async () => {
      await Product.getProductCategoryMenu({}).then((e) => {
        setRemainingLifeData(e.OBJ);
      });
    };

    trackPromise(getRemainingLifeData());
  }, []);
  return (
    <>
      <div className=' topsearch'>
        <div className='row'>
          <div className='col-1-of-4-topserch topsearch__logobox'>
            <img
              src='../assets/aide-logo.jpeg'
              alt='Logo'
              className='topsearch__logo'
            />
            <p className='topsearch__logo-text'>
              <span className='topsearch__logo-Header'>aide</span>
              &nbsp; Enjoy Peach in Shoping
            </p>
          </div>
          <div className='col-2-of-4 topsearch__mid'>
            <form action='#' className='topsearch__form'>
              <div className='topsearch__formgroup'>
                <input
                  type='text'
                  className='topsearch__forminput'
                  placeholder='Search your products (Example: Mustard Oil, Sorishar Tel, সরিষার
                  তেল)'
                  id='search'
                />
                <label htmlFor='search' className='topsearch__formlabel'>
                  <FontAwesomeIcon icon={faSearch} />
                </label>
              </div>
            </form>
          </div>
          <div className='col-1-of-4-topserch topsearch__right'>
            <div className='topsearch__signinBtn'>
              <FontAwesomeIcon icon={faBell} />
              &nbsp;
              <a href='#' className='btn topsearch--signinbtn'>
                Sign In
              </a>
            </div>
            <div className='topsearch__signinIcon'>
              &nbsp;
              <FontAwesomeIcon icon={faUserCircle} />
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className='topsearch'>
    //   {/* <Navbar className='navbar-expand-lg fixed-top bg-primary topsearch--card topsearch--navbar'> */}
    //   <div className='topsearch__left'>
    //     <div className='topsearch__logo'>
    //       <h2>Test</h2>
    //     </div>
    //   </div>
    //   <div className='topsearch__right'></div>
    //   {/* </Navbar> */}
    // </div>
  );
}

export default TopSearchBar;

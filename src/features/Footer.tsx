/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function FooterPage() {
  return (
    /*
    BEM -> Bolck Element Modifier
    here  
    1. header is a Bolck
    2. header__logo-box so __logo-box is an element
    3. heading-primary--main so --main is a modifier
    */
    <div>
      <footer className='footer'>
        <div className='footer__logo-box'>
          <picture className='footer__logo'>
            <source
              srcSet='../assets/logo-green-small-1x.png 1x, ../assets/logo-green-small-2x.png 2x'
              media='(max-width: 37.5em)'
            />
            <img
              srcSet='../assets/logo-green-1x.png 1x, ../assets/logo-green-2x.png 2x'
              alt='Full logo'
            />
          </picture>
        </div>
        <div className='row'>
          <div className='col-1-of-2'>
            <div className='footer__navigation'>
              <ul className='footer__list'>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    company
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    COntact
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    carreres
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Privacy policy
                  </a>
                </li>
                <li className='footer__item'>
                  <a href='#' className='footer__link'>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-1-of-2'>
            <p className='footer__copyright'>
              Built my{' '}
              <a href='#' className='footer__link'>
                Asif
              </a>
              for learning purpose
              <a href='#' className='footer__link'>
                Advanced css and sass.
              </a>
              . Copyright &copy; by Asif Mohammad Ashique
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;

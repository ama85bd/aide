import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from 'reactstrap';
import Product from '../api/product';
import mydata from '../api/auth';
import { trackPromise } from 'react-promise-tracker';
import { faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auth from '../api/auth';
import qs from 'qs';
import { IAuthToken, IGeneralUser } from '../models/baseModel';
import { RootStoreContext } from '../stores/rootStore';
import { toJS } from 'mobx';
import { Link } from 'react-router-dom';

function TopSearchBar() {
  return (
    <div className=' topsearch'>
      <div className='topsearch__logobox'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <img
            src='../assets/aide-logo.jpeg'
            alt='Logo'
            className='topsearch__logo'
          />

          <p className='topsearch__logo-text'>
            <span className='topsearch__logo-Header'>aide</span>
            &nbsp; Enjoy Peach in Shoping
          </p>
        </Link>
      </div>
      <div className=' topsearch__mid'>
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
      <div className=' topsearch__right'>
        <div className='topsearch__signinBtn'>
          <FontAwesomeIcon icon={faBell} />
          &nbsp;
          <a href='#' className='btnAide topsearch--signinbtn'>
            Sign In
          </a>
        </div>
        <div className='topsearch__signinIcon'>
          &nbsp;
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </div>
    </div>
  );
}

export default TopSearchBar;

import React, { Fragment } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import {
  IoAppsOutline,
  IoHeartOutline,
  IoCalendarOutline,
} from 'react-icons/io5';

interface ISingleBrand {
  color?: any;
  title?: any;
  subtitle?: any;
  brandId?: any;
  handleCategoryClose?: any;
  logo?: any;
  handleRemoveFavoriteBrand?: any;
  handleCategoryExpand?: any;
}

function SingleBrand({
  color,
  title,
  subtitle,
  brandId,
  handleCategoryClose,
  logo,
  handleRemoveFavoriteBrand,
  handleCategoryExpand,
}: ISingleBrand) {
  return (
    <Fragment>
      <div
        className='single_brand h-20'
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logo} alt='' width={100} />

        <div className='brand_info ml-3'>
          <Link
            to={`/brand/${
              title ? title.split(' ').join('-') : title
            }/${brandId}`}
            onClick={handleCategoryExpand}
          >
            <div className='brand_title'>
              <h3>{title}</h3>
              <h1>{subtitle}</h1>
            </div>
          </Link>
          <div
            className='love_react'
            // style={{
            //     boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            // }}
          >
            <button onClick={() => handleRemoveFavoriteBrand(brandId)}>
              <IoAppsOutline className='text-gray-400' />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SingleBrand;

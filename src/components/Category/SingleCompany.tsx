import React from 'react';
import './Category.css';
import { IoFunnelOutline, IoReorderFourOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function SingleCompany({
  logo,
  color,
  title,
  subtitle,
  companyId,
  IsFavorite,
  handleCategoryClose,
  handleCategoryExpand,
}: any) {
  // const dispatch = useDispatch();
  return (
    <div
      className='single_brand'
      style={{
        cursor: 'pointer',
      }}
    >
      <img src={logo} alt='' className=' w-20 h-20' />

      <div className='brand_info ml-3'>
        <Link
          to={`/brand/${
            title ? title.split(' ').join('-') : title
          }/${companyId}`}
          onClick={handleCategoryExpand}
        >
          <div className='brand_title'>
            <h3>{title}</h3>
            <h1>{subtitle}</h1>
          </div>
        </Link>
        {IsFavorite && (
          <div
            className='love_react'
            style={{
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            <IoReorderFourOutline
            // onClick={() => {
            //     dispatch(removeFavoriteCompany(companyId));
            //     console.log('Remove company clicked');
            // }}
            >
              <IoFunnelOutline style={{ fill: color }} />
            </IoReorderFourOutline>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleCompany;

import React from 'react';
import { IoFunnelOutline, IoReorderFourOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

function SingleCompany({
  logo,
  color,
  compId,
  title,
  subtitle,
  companyId,
  IsFavorite,
  brandList,
  handleCategoryClose,
  handleCategoryExpand,
  handleRemoveFavoriteBrand,
}: any) {
  console.log('brandList', brandList);
  return (
    <div
      className='categoryList__singleBrand'
      style={{
        cursor: 'pointer',
        height: '9.5rem',
      }}
    >
      <img
        src={logo}
        alt=''
        style={{ height: '5.6rem', width: '6rem', paddingTop: '.6rem' }}
      />

      <div className='categoryList__brandInfo'>
        <Link
          to={`/brand/${title ? title.split(' ').join('-') : title}/${compId}`}
          onClick={handleCategoryExpand}
        >
          <div className='categoryList__brandTitle'>
            <h3>{title}</h3>
            <div
              style={{ marginLeft: '-0.4rem' }}
              className='categoryList__brandList'
            >
              <h1>
                <ul id='brandListText'>
                  {brandList.slice(0, 5).map((x: any) => {
                    return (
                      <li className='categoryList__brandListText'>
                        {' '}
                        &nbsp;{x.BrandName}
                      </li>
                    );
                  })}
                  {brandList.length > 0 ? (
                    <li className='categoryList__brandListText'>
                      <button>&nbsp;See All</button>
                    </li>
                  ) : (
                    ''
                  )}
                </ul>
              </h1>
            </div>
          </div>
        </Link>
        <div className='categoryList__favorite'>
          <button onClick={() => handleRemoveFavoriteBrand(compId)}>
            {IsFavorite ? (
              <IoHeart fill='gold' />
            ) : (
              <IoHeartOutline className='categoryList__favoriteIcon' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCompany;

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

interface ISingleBrand {
  color?: any;
  title?: any;
  subtitle?: any;
  brandId?: any;
  handleCategoryClose?: any;
  logo?: any;
  handleRemoveFavoriteBrand?: any;
  handleCategoryExpand?: any;
  IsFavorite?: any;
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
  IsFavorite,
}: ISingleBrand) {
  return (
    <Fragment>
      <div
        className='categoryList__singleBrand h-7'
        style={{
          cursor: 'pointer',
        }}
      >
        <img src={logo} alt='' width={100} />

        <div className='categoryList__brandInfo ml-3'>
          <Link
            to={`/brand/${
              title ? title.split(' ').join('-') : title
            }/${brandId}`}
            onClick={handleCategoryExpand}
          >
            <div className='categoryList__brandTitle'>
              <h3>{title}</h3>
              <h1>{subtitle}</h1>
            </div>
          </Link>
          <div className='categoryList__favorite'>
            <button onClick={() => handleRemoveFavoriteBrand(brandId)}>
              {IsFavorite ? (
                <IoHeart fill='gold' />
              ) : (
                <IoHeartOutline className='categoryList__favoriteIcon' />
              )}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SingleBrand;

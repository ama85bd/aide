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
  handleCategoryClose,
  handleCategoryExpand,
  handleRemoveFavoriteBrand,
}: any) {
  // const dispatch = useDispatch();
  return (
    <div
      className='categoryList__singleBrand'
      style={{
        cursor: 'pointer',
      }}
    >
      <img src={logo} alt='' className=' w-22 h-7' />

      <div className='categoryList__brandInfo ml-3'>
        <Link
          to={`/brand/${
            title ? title.split(' ').join('-') : title
          }/${companyId}`}
          onClick={handleCategoryExpand}
        >
          <div className='categoryList__brandTitle'>
            <h3>{title}</h3>
            <h1>{subtitle}</h1>
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

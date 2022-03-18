import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';

const SubCategoryOne = ({
  setOpenDropRightTwo,
  marginRightOne,
  firstChildCategories,
  setSelectedFirstChildCatId,
  setSelectedFirstChildCatName,
  selectedFirstChildCatId,
  handleCategoryExpand,
  openDropRightTwo,
}: // handleSubCategoryOne
any) => {
  const [fixedColor, setFixedColor] = useState('');

  // const colorFixed = (id) => {
  //     console.log(id);
  //     setFixedColor(id)
  // }
  return (
    <div className={`sidebar_details_body mx-1 mr-0  ${marginRightOne} `}>
      <div className='sidebar_details_content_wrapper '>
        <ul
          className='sidebar_list_container  '
          style={{ height: '100vh', width: '17rem' }}
        >
          {firstChildCategories?.length > 0 &&
            firstChildCategories.map((category: any) => {
              return (
                <>
                  <li
                    className={
                      fixedColor === category.Id && openDropRightTwo
                        ? 'category__color'
                        : 'category__color__normal'
                    }
                    onClick={() => {
                      setOpenDropRightTwo(!openDropRightTwo);
                      setSelectedFirstChildCatId(category.Id);
                      setSelectedFirstChildCatName(category.CatName);
                      // colorFixed(category.Id)
                      // handleSubCategoryOne()
                    }}
                  >
                    {category.HasChild ? (
                      <div
                        className='inner__div'
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <p>{category.CatName}</p>
                        {selectedFirstChildCatId === category.Id &&
                        openDropRightTwo ? (
                          <IoArrowBackOutline />
                        ) : (
                          <IoArrowForward />
                        )}
                      </div>
                    ) : (
                      <Link
                        to={`/category/${
                          category.CatName
                            ? category.CatName.split(' ').join('-')
                            : category.CatName
                        }/${category.Id}`}
                      >
                        <button onClick={handleCategoryExpand}>
                          {category.CatName}
                        </button>
                      </Link>
                    )}
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SubCategoryOne;

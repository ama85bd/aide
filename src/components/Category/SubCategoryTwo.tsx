import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';

const SubCategorytwo = ({
  setOpenDropRightThree,
  marginRightTwo,
  secondChildCategories,
  setSelectedSecondChildCatId,
  setSelectedSecondChildCatName,
  selectedSecondChildCatId,
  handleCategoryExpand,
  openDropRightThree,
}: any) => {
  const [fixedColor, setFixedColor] = useState('');

  const colorFixed = (id: any) => {
    console.log(id);
    setFixedColor(id);
  };
  // const p = firstChildCategories.length > 0 ? 'block': 'hidden'
  return (
    <div className={`sidebar_details_body mx-1 mr-0 ${marginRightTwo} `}>
      <div className='sidebar_details_content_wrapper'>
        <div className='category_list_wrapper'>
          <ul
            className='sidebar_list_container   '
            style={{ height: '100vh', width: '17rem' }}
          >
            {secondChildCategories?.map((category: any) => {
              return (
                <>
                  <li
                    className={
                      fixedColor === category.Id && openDropRightThree
                        ? 'category__color'
                        : 'category__color__normal'
                    }
                    onClick={() => {
                      setOpenDropRightThree(!openDropRightThree);
                      setSelectedSecondChildCatId(category.Id);
                      setSelectedSecondChildCatName(category.CatName);
                      colorFixed(category.Id);
                      // handleSubCategoryTwo()
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
                        {selectedSecondChildCatId === category.Id &&
                        openDropRightThree ? (
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
    </div>
  );
};

export default SubCategorytwo;

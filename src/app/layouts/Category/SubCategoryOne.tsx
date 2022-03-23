import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoCaretForwardSharp, IoCaretBackSharp } from 'react-icons/io5';

const SubCategoryOne = ({
  setOpenDropRightTwo,
  marginRightOne,
  firstChildCategories,
  setSelectedFirstChildCatId,
  setSelectedFirstChildCatName,
  selectedFirstChildCatId,
  handleCategoryExpand,
  openDropRightTwo,
  showDisplay,
  setShowDisplayTwo,
  setShowDisplayThree,
}: // handleSubCategoryOne
any) => {
  const [fixedColor, setFixedColor] = useState('');

  const colorFixed = (id: any) => {
    // console.log(id);
    setFixedColor(id);
  };

  return (
    <div
      className={`sidebar_details_body mx-1 mr-0  ${marginRightOne}`}
      style={{ display: `${showDisplay}` }}
    >
      <div className='categoryList__wrapper '>
        <ul
          className='categoryList__listContainer  '
          // style={{ height: '100vh' }}
        >
          {firstChildCategories?.length > 0 &&
            firstChildCategories.map((category: any) => {
              return (
                <>
                  <Link
                    key={category.Id}
                    to={`/category/${
                      category.CatName
                        ? category.CatName.split(' ').join('-')
                        : category.CatName
                    }/${category.Id}`}
                    onMouseOver={() => {
                      setOpenDropRightTwo(!openDropRightTwo);
                      setSelectedFirstChildCatId(category.Id);
                      setSelectedFirstChildCatName(category.CatName);
                      colorFixed(category.Id);
                      setShowDisplayTwo('inherit');
                      setShowDisplayThree('none');
                      // handleSubCategoryOne()
                    }}
                  >
                    <li
                      className={
                        fixedColor === category.Id && openDropRightTwo
                          ? 'categoryList__color'
                          : 'categoryList__colorNormal'
                      }
                      // onMouseOver={() => {
                      //   setOpenDropRightTwo(!openDropRightTwo);
                      //   setSelectedFirstChildCatId(category.Id);
                      //   setSelectedFirstChildCatName(category.CatName);
                      //   // colorFixed(category.Id)
                      //   setShowDisplayTwo('flex');
                      //   // handleSubCategoryOne()
                      // }}
                    >
                      {category.HasChild ? (
                        <div
                          className='categoryList__innerDiv'
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <p
                            style={{
                              width: '90%',
                              height: '100%',
                              marginBottom: 0,
                            }}
                          >
                            {category.CatName}
                          </p>

                          {selectedFirstChildCatId === category.Id &&
                          openDropRightTwo ? (
                            <IoCaretBackSharp />
                          ) : (
                            <IoCaretForwardSharp />
                          )}
                        </div>
                      ) : (
                        <button onClick={handleCategoryExpand}>
                          {category.CatName}
                        </button>
                      )}
                    </li>
                  </Link>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default SubCategoryOne;

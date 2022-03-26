import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCaretForwardSharp, IoCaretBackSharp } from 'react-icons/io5';

const SubCategorytwo = ({
  setOpenDropRightThree,
  marginRightTwo,
  secondChildCategories,
  setSelectedSecondChildCatId,
  setSelectedSecondChildCatName,
  selectedSecondChildCatId,
  handleCategoryExpand,
  openDropRightThree,
  setShowDisplayThree,
  showDisplayTwo,
  setAllCategories,
  setShowDisplayTwo,
  setShowDisplay,
}: any) => {
  const [fixedColor, setFixedColor] = useState('');

  const colorFixed = (id: any) => {
    // console.log(id);
    setFixedColor(id);
  };
  // const p = firstChildCategories.length > 0 ? 'block': 'hidden'
  return (
    <div
      className={`sidebar_details_body mx-1 mr-0 ${marginRightTwo} `}
      style={{ display: `${showDisplayTwo}` }}
    >
      <div className='sidebar_details_content_wrapper'>
        <div className='categoryList__wrapper'>
          <ul className='categoryList__container   ' style={{ paddingLeft: 0 }}>
            {secondChildCategories?.map((category: any) => {
              return (
                <>
                  <Link
                    to={`/category/${
                      category.CatName
                        ? category.CatName.split(' ').join('-')
                        : category.CatName
                    }/${category.Id}`}
                    // onClick={setAllCategories('')}
                  >
                    <li
                      className={
                        fixedColor === category.Id && openDropRightThree
                          ? 'categoryList__color'
                          : 'categoryList__colorNormal'
                      }
                      onMouseOver={() => {
                        setOpenDropRightThree(!openDropRightThree);
                        setSelectedSecondChildCatId(category.Id);
                        setSelectedSecondChildCatName(category.CatName);
                        colorFixed(category.Id);
                        setShowDisplayThree('inherit');
                        // handleSubCategoryTwo()
                      }}
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
                          {selectedSecondChildCatId === category.Id &&
                          openDropRightThree ? (
                            <IoCaretBackSharp />
                          ) : (
                            <IoCaretForwardSharp />
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            handleCategoryExpand();
                            setShowDisplay('none');
                            setShowDisplayTwo('none');
                            setShowDisplayThree('none');
                          }}
                        >
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
    </div>
  );
};

export default SubCategorytwo;

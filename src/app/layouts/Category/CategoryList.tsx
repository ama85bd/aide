import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CategorySkeleton } from '../../customs/Skeleton';

import { IoCaretForwardSharp, IoCaretBackSharp } from 'react-icons/io5';

interface ICategoryList {
  setOpenDropRightOne?: any;
  selectedParentCatId?: any;
  setSelectedParentCatId?: any;
  parentCategories?: any;
  setSelectedParentCatName?: any;
  categoryTitle?: any;
  setCategoryTitle?: any;
  allCategoriesLoading?: any;
  openDropRightOne?: any;
  handleCategoryExpand?: any;
  isCategorySelected?: any;
  setIsCategorySelected?: any;
  firstChildCategories?: any;
  setShowDisplay?: any;
  setShowDisplayTwo?: any;
}

function CategoryList({
  setOpenDropRightOne,
  selectedParentCatId,
  setSelectedParentCatId,
  parentCategories,
  setSelectedParentCatName,
  categoryTitle,
  setCategoryTitle,
  allCategoriesLoading,
  openDropRightOne,
  handleCategoryExpand,
  isCategorySelected,
  setIsCategorySelected,
  firstChildCategories,
  setShowDisplay,
  setShowDisplayTwo,
}: ICategoryList) {
  const [fixedColor, setFixedColor] = useState('');
  const colorFixed = (id: any) => {
    // console.log('ID', id);
    setFixedColor(id);
  };

  return (
    <div className='categoryList__wrapper'>
      <form className='categoryBar__searchbar'>
        <input
          className='categoryBar__inputSearch pl-5'
          type='text'
          placeholder='Search'
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
        />
      </form>

      <ul key={parentCategories.Id} className='categoryList__listContainer '>
        {parentCategories &&
          parentCategories.map((category: any) => {
            return (
              <>
                <Link
                  key={category.Id}
                  to={`/category/${
                    category.CatName
                      ? category.CatName.split(' ').join('-')
                      : category.CatName
                  }/${category.Id}`}
                  onClick={handleCategoryExpand}
                  onMouseOver={() => {
                    setOpenDropRightOne(!openDropRightOne);
                    setSelectedParentCatId(category.Id);
                    setSelectedParentCatName(category.CatName);
                    setIsCategorySelected(!isCategorySelected);
                    colorFixed(category.Id);
                    setShowDisplay('inherit');
                    setShowDisplayTwo('none');
                  }}
                  className={
                    fixedColor === category.Id && openDropRightOne
                      ? 'categoryList__color'
                      : 'categoryList__colorNormal'
                  }
                >
                  <li

                  // onMouseOver={() => {
                  //   setOpenDropRightOne(!openDropRightOne);
                  //   setSelectedParentCatId(category.Id);
                  //   setSelectedParentCatName(category.CatName);
                  //   setIsCategorySelected(!isCategorySelected);
                  //   colorFixed(category.Id);
                  //   setShowDisplay('flex');
                  // }}

                  // onMouseLeave={() => {
                  //   setOpenDropRightOne(false);
                  //   setSelectedParentCatId(null);
                  //   setSelectedParentCatName('');
                  //   setIsCategorySelected(false);
                  //   colorFixed(null);
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
                        {selectedParentCatId === category.Id &&
                        openDropRightOne ? (
                          <IoCaretBackSharp />
                        ) : (
                          <IoCaretForwardSharp />
                        )}
                      </div>
                    ) : (
                      <div
                        className='categoryList__innerDiv'
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <button onClick={handleCategoryExpand}>
                          {category.CatName}
                        </button>
                      </div>
                    )}
                  </li>
                </Link>
              </>
            );
          })}
        {/* {allCategoriesLoading &&
          [...Array(20)].map((el, index) => <CategorySkeleton key={el} />)} */}
      </ul>
    </div>
  );
}

export default CategoryList;

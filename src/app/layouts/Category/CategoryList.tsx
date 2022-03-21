import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CategorySkeleton } from '../../customs/Skeleton';

import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';

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
}: ICategoryList) {
  const [fixedColor, setFixedColor] = useState('');
  const colorFixed = (id: any) => {
    console.log('ID', id);
    setFixedColor(id);
  };
  console.log('fixedColor', fixedColor);
  console.log(parentCategories);

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

      <ul
        key={parentCategories.Id}
        className='categoryList__listContainer full_height  '
      >
        {parentCategories &&
          parentCategories.map((category: any) => {
            return (
              <>
                <li
                  className={
                    fixedColor === category.Id && openDropRightOne
                      ? 'categoryList__color'
                      : 'categoryList__colorNormal'
                  }
                  onClick={() => {
                    setOpenDropRightOne(!openDropRightOne);
                    setSelectedParentCatId(category.Id);
                    setSelectedParentCatName(category.CatName);
                    setIsCategorySelected(!isCategorySelected);
                    colorFixed(category.Id);
                  }}
                >
                  {category && category.HasChild ? (
                    <div
                      className='categoryList__innerDiv'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <p>{category.CatName}</p>
                      {selectedParentCatId === category.Id &&
                      openDropRightOne ? (
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
        {/* {allCategoriesLoading &&
          [...Array(20)].map((el, index) => <CategorySkeleton key={el} />)} */}
      </ul>
    </div>
  );
}

export default CategoryList;

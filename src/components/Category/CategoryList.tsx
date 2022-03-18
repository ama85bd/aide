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
}: ICategoryList) {
  const [fixedColor, setFixedColor] = useState('');

  // const colorFixed = (id) => {
  //     console.log(id);
  //     setFixedColor(id)
  // }
  // console.log(fixedColor);

  return (
    <div className='category_list_wrapper'>
      <form className='sidebar_searchbar'>
        <input
          className='sidebar_input_search pl-5'
          type='text'
          placeholder='Search'
          value={categoryTitle}
          onChange={(e) => setCategoryTitle(e.target.value)}
        />
      </form>

      <ul className='sidebar_list_container full_height  '>
        {/* <form
                    className="sidebar_searchbar"
                >
                    <input
                        className='sidebar_input_search pl-5'
                        type="text"
                        placeholder='Search'
                        value={categoryTitle}
                        onChange={(e) => setCategoryTitle(e.target.value)}
                    />
                </form> */}
        {/* {
                    parentCategories &&
                    parentCategories.map((category) => {

                        return (
                            <>


                                <li
                                    className={fixedColor === category.Id && openDropRightOne ? 'category__color' : 'category__color__normal'}
                                    onClick={() => {
                                        setOpenDropRightOne(!openDropRightOne);
                                        setSelectedParentCatId(category.Id);
                                        setSelectedParentCatName(category.CatName);
                                        setIsCategorySelected(!isCategorySelected)
                                        colorFixed(category.Id)

                                    }}
                                >
                                    {
                                        category.HasChild ? (
                                            <div
                                                className='inner__div'
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <p>
                                                    {category.CatName}
                                                </p>
                                                {
                                                    selectedParentCatId === category.Id && openDropRightOne ? <IoArrowBackOutline /> : <IoArrowForward />
                                                }
                                            </div>) : (
                                            <Link
                                                to={`/category/${category.CatName ? category.CatName.split(' ').join('-') : category.CatName}/${category.Id}`}
                                            >
                                                <button onClick={handleCategoryExpand}>
                                                    {category.CatName}
                                                </button>
                                            </Link>)
                                    }
                                </li>
                            </>
                        )
                    })} */}
        {allCategoriesLoading &&
          [...Array(20)].map((el, index) => <CategorySkeleton key={el} />)}
      </ul>
    </div>
  );
}

export default CategoryList;

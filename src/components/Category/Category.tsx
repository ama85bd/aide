/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// import history from '../../../helpers/history';
import leftIcon from '../../../photos/Chevron.png';
import BrandList from './BrandList';
import CategoryList from './CategoryList';
import CompanyList from './CompanyList';
import './Category.css';
import SubCategoryOne from './SubCategoryOne';
import SubCategoryTwo from './SubCategoryTwo';
import SubCategoryThree from './SubCategoryThree';
import _ from 'lodash';
// import { getAllCategories } from '../../../services/categoryServices';
import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';

const Category = ({
  categoryExpand,
  handleCategoryExpand,
  categoryRef,
}: any) => {
  const [selecter, setSelecter] = useState('Category');
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedParentCatId, setSelectedParentCatId] = useState(null);
  const [selectedParentCatName, setSelectedParentCatName] = useState('');
  const [selectedFirstChildCatId, setSelectedFirstChildCatId] = useState(null);
  const [selectedFirstChildCatName, setSelectedFirstChildCatName] =
    useState('');
  const [selectedSecondChildCatId, setSelectedSecondChildCatId] =
    useState(null);
  const [selectedSecondChildCatName, setSelectedSecondChildCatName] =
    useState('');
  const [categoryTitle, setCategoryTitle] = useState('');
  const [openDropRightOne, setOpenDropRightOne] = useState(false);
  const [openDropRightTwo, setOpenDropRightTwo] = useState(false);
  const [openDropRightThree, setOpenDropRightThree] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [allCategoriesLoading, setAllCategoriesLoading] = useState(true);
  const [allCategoriesError, setAllCategoriesError] = useState(null);

  const getcats = async () => {
    // setAllCategoriesLoading(true);
    // try {
    //     const res = await getAllCategories();
    //     setAllCategories(res.data.OBJ);
    //     setAllCategoriesLoading(false);
    // } catch (error) {
    //     setAllCategories(false);
    //     const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
    //     setAllCategoriesError(errorMessage);
    // }
  };
  // console.log(allCategories)

  useEffect(() => {
    getcats();
  }, []);

  // const parentCategories = allCategories && allCategories.length > 0 && allCategories.filter(
  //     (catItem) => catItem.ParentCatId === 0
  // );

  // const categories = categoryTitle ? parentCategories.filter(
  //     (catItem) => catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
  // ) : parentCategories;

  // const firstChildCategories = allCategories.length > 0 && openDropRightOne && allCategories.filter(
  //     (catItem) => catItem.ParentCatId === selectedParentCatId
  // );

  // const firstChildCatItems = categoryTitle ? firstChildCategories.filter(
  //     (catItem) => catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
  // ) : firstChildCategories;

  // const secondChildCategories = openDropRightOne && allCategories.length > 0 && allCategories.filter(
  //     (catItem) => catItem.ParentCatId === selectedFirstChildCatId
  // );

  // const secondChildCatItems = categoryTitle ? secondChildCategories.filter(
  //     (catItem) => catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
  // ) : secondChildCategories;

  // const thirdChildCategories = openDropRightOne && allCategories.length > 0 && allCategories.filter(
  //     (catItem) => catItem.ParentCatId === selectedSecondChildCatId
  // );

  // const thirdChildCatItems = categoryTitle ? thirdChildCategories.filter(
  //     (catItem) => catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
  // ) : thirdChildCategories;

  const handleSelector = (category: any) => {
    if (category === 'Brand') {
      setSelecter('Brand');
    } else if (category === 'Company') {
      setSelecter('Company');
    } else {
      setSelecter('Category');
    }
    setOpenDropRightOne(false);
    setOpenDropRightTwo(false);
    setOpenDropRightThree(false);
  };

  const handleSubCategoryOne = () => {
    if (openDropRightThree && openDropRightTwo) {
      setOpenDropRightOne(false);
      setOpenDropRightTwo(false);
      setOpenDropRightThree(false);
    } else if (openDropRightTwo) {
      setOpenDropRightOne(false);
      setOpenDropRightTwo(false);
    } else {
      setOpenDropRightOne(false);
    }
  };
  const handleSubCategoryTwo = () => {
    if (openDropRightThree && openDropRightOne) {
      setOpenDropRightOne(false);
      setOpenDropRightTwo(false);
      setOpenDropRightThree(false);
    } else {
      setOpenDropRightTwo(false);
    }
  };

  // if (firstChildCatItems?.length === 0) {
  //     setOpenDropRightOne(false)
  //     setOpenDropRightTwo(false)
  //     setOpenDropRightThree(false)
  // }

  const margin =
    openDropRightOne || openDropRightTwo || openDropRightThree ? 'mr-0' : '';
  const width =
    openDropRightOne || openDropRightTwo || openDropRightThree ? 'w-1/2' : '';
  const marginRightOne = openDropRightOne && 'mr-4';
  const marginRightTwo = openDropRightTwo && ' mr-4 -ml-3';
  const marginRightThree = openDropRightThree && ' mr-4 -ml-3';
  const p = 'mr-4';
  // const p = firstChildCatItems?.length === 0 ? 'mr-4' : ''

  return (
    <>
      <div
        className={
          categoryExpand
            ? 'animate__animated animate__slideInLeft animate__faster sidebar_details_container  '
            : 'animate__animated animate__slideOutLeft animate__faster sidebar_details_container_out'
        }
        ref={categoryRef}
      >
        <div className='sidebar_details_header flex '>
          <div className={`sidebar_header_title ${width}`}>
            <div className='arrow__div' onClick={() => handleCategoryExpand()}>
              <IoArrowBackOutline className='arrow' />
            </div>
            <p className='title_header'> Category</p>
          </div>
          {
            // openDropRightOne &&
            // firstChildCatItems.length > 0 &&
            <div className={`sidebar_header_title ml-0 ${width}`}>
              <div className='arrow__div' onClick={handleSubCategoryOne}>
                <IoArrowBackOutline className='arrow' />
              </div>

              <p className='title_header'>{selectedParentCatName}</p>
            </div>
          }
          {
            // openDropRightTwo &&
            // secondChildCatItems.length > 0 && firstChildCatItems.length > 0 &&
            <div className={`sidebar_header_title ml-0 ${width}`}>
              <div className='arrow__div' onClick={handleSubCategoryTwo}>
                <IoArrowBackOutline className='arrow' />
              </div>

              <p className='title_header'>{selectedFirstChildCatName}</p>
            </div>
          }
          {
            // openDropRightThree &&
            // thirdChildCatItems.length > 0 && firstChildCatItems.length > 0 &&
            <div className={`sidebar_header_title ml-0 ${width}`}>
              <div
                className='arrow__div'
                onClick={() => setOpenDropRightThree(false)}
              >
                <IoArrowBackOutline className='arrow' />
              </div>
              <p className='title_header'>{selectedSecondChildCatName}</p>
            </div>
          }
        </div>

        <div className=' flex '>
          <div className={`sidebar_details_body ${p} ${margin} `}>
            <div className='sidebar_item_selector'>
              <a
                href=''
                className={`mysidebar_button ${
                  selecter === 'Category' ? 'selected_button' : ' '
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelector('Category');
                }}
              >
                Category
              </a>
              <a
                href=''
                className={`mysidebar_button ${
                  selecter === 'Brand' ? 'selected_button' : ' '
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelector('Brand');
                }}
              >
                Brand
              </a>
              <a
                href=''
                className={`mysidebar_button ${
                  selecter === 'Company' ? 'selected_button' : ' '
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelector('Company');
                }}
              >
                Company
              </a>
            </div>
            <div className='sidebar_details_content_wrapper'>
              {selecter === 'Category' ? (
                <div>
                  <CategoryList
                    setOpenDropRightOne={setOpenDropRightOne}
                    selectedParentCatId={selectedParentCatId}
                    setSelectedParentCatId={setSelectedParentCatId}
                    // parentCategories={categories}
                    setSelectedParentCatName={setSelectedParentCatName}
                    // firstChildCategories={firstChildCatItems}
                    categoryTitle={categoryTitle}
                    setCategoryTitle={setCategoryTitle}
                    openDropRightOne={openDropRightOne}
                    allCategoriesLoading={allCategoriesLoading}
                    handleCategoryExpand={handleCategoryExpand}
                    isCategorySelected={isCategorySelected}
                    setIsCategorySelected={setIsCategorySelected}
                  />
                </div>
              ) : selecter === 'Brand' ? (
                <BrandList handleCategoryExpand={handleCategoryExpand} />
              ) : (
                <CompanyList handleCategoryExpand={handleCategoryExpand} />
              )}
            </div>
          </div>

          {
            // openDropRightOne &&
            // firstChildCatItems?.length > 0 &&
            // <SubCategoryOne
            //   setOpenDropRightTwo={setOpenDropRightTwo}
            //   openDropRightTwo={openDropRightTwo}
            //   marginRightOne={marginRightOne}
            //   // firstChildCategories={firstChildCatItems}
            //   setSelectedFirstChildCatId={setSelectedFirstChildCatId}
            //   setSelectedFirstChildCatName={setSelectedFirstChildCatName}
            //   // secondChildCategories={secondChildCatItems}
            //   selectedFirstChildCatId={selectedFirstChildCatId}
            //   handleCategoryExpand={handleCategoryExpand}
            //   // handleSubCategoryOne={handleSubCategoryOne}
            // />
          }

          {
            // openDropRightTwo &&
            // secondChildCatItems?.length > 0 && firstChildCatItems?.length > 0 &&
            // <SubCategoryTwo
            //   setOpenDropRightThree={setOpenDropRightThree}
            //   marginRightTwo={marginRightTwo}
            //   // secondChildCategories={secondChildCatItems}
            //   setSelectedSecondChildCatId={setSelectedSecondChildCatId}
            //   setSelectedSecondChildCatName={setSelectedSecondChildCatName}
            //   // thirdChildCategories={thirdChildCatItems}
            //   selectedSecondChildCatId={selectedSecondChildCatId}
            //   openDropRightThree={openDropRightThree}
            //   handleCategoryExpand={handleCategoryExpand}
            //   // handleSubCategoryTwo={handleSubCategoryTwo}
            // />
          }

          {
            // openDropRightThree &&
            // thirdChildCatItems?.length > 0 && firstChildCatItems?.length > 0 &&
            // <SubCategoryThree
            //   marginRightThree={marginRightThree}
            //   // thirdChildCategories={thirdChildCatItems}
            //   handleCategoryExpand={handleCategoryExpand}
            // />
          }
        </div>
      </div>
    </>
  );
};

export default Category;

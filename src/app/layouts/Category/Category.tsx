/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// import './Category.css';
import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';
import { trackPromise } from 'react-promise-tracker';
import Product from '../../api/product';
import CategoryList from './CategoryList';
import SubCategoryOne from './SubCategoryOne';
import qs from 'qs';

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
  const [allCategories, setAllCategories] = useState<any>([]);
  const [allCategoriesLoading, setAllCategoriesLoading] = useState(true);
  const [allCategoriesError, setAllCategoriesError] = useState(null);

  const cusId: any = {
    CustomerId: 1,
  };
  const [allBrand, setBrand] = useState<any>([]);
  console.log('allBrand', allBrand);

  const parentCategories =
    allCategories &&
    allCategories.length > 0 &&
    allCategories.filter((catItem: any) => catItem.ParentCatId === 0);

  const categories = categoryTitle
    ? parentCategories.filter((catItem: any) =>
        catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
      )
    : parentCategories;

  const firstChildCategories =
    allCategories.length > 0 &&
    openDropRightOne &&
    allCategories.filter(
      (catItem: any) => catItem.ParentCatId === selectedParentCatId
    );

  const firstChildCatItems = categoryTitle
    ? firstChildCategories.filter((catItem: any) =>
        catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
      )
    : firstChildCategories;

  const secondChildCategories =
    openDropRightOne &&
    allCategories.length > 0 &&
    allCategories.filter(
      (catItem: any) => catItem.ParentCatId === selectedFirstChildCatId
    );

  const secondChildCatItems = categoryTitle
    ? secondChildCategories.filter((catItem: any) =>
        catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
      )
    : secondChildCategories;

  const thirdChildCategories =
    openDropRightOne &&
    allCategories.length > 0 &&
    allCategories.filter(
      (catItem: any) => catItem.ParentCatId === selectedSecondChildCatId
    );

  const thirdChildCatItems = categoryTitle
    ? thirdChildCategories.filter((catItem: any) =>
        catItem.CatName.toLowerCase().includes(categoryTitle.toLowerCase())
      )
    : thirdChildCategories;

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

  useEffect(() => {
    const getAllCat = async () => {
      setAllCategoriesLoading(true);
      await Product.getAllCategory({}).then((e) => {
        setAllCategories(e.OBJ);
      });
      setAllCategoriesLoading(false);
    };
    const getAllsetBrand = async () => {
      // setAllCategoriesLoading(true);
      await Product.getAllBrand({}).then((e) => {
        setBrand(e.OBJ);
      });
      // await Product.getAllBrand(qs.stringify(cusId)).then((e) => {
      //   setBrand(e.OBJ);
      // });
      // setAllCategoriesLoading(false);
    };

    trackPromise(getAllsetBrand());
    trackPromise(getAllCat());
  }, []);

  const margin =
    openDropRightOne || openDropRightTwo || openDropRightThree ? 'mr-0' : '';
  const width =
    openDropRightOne || openDropRightTwo || openDropRightThree ? 'w-1/2' : '';
  const marginRightOne = openDropRightOne && 'mr-4';
  const marginRightTwo = openDropRightTwo && ' mr-4 -ml-3';
  const marginRightThree = openDropRightThree && ' mr-4 -ml-3';
  const p = firstChildCatItems?.length === 0 ? 'mr-4' : '';
  return (
    <>
      <div
        className={
          categoryExpand
            ? 'sidebarDrawer__container  '
            : 'sidebarDrawer__container--out'
        }
        ref={categoryRef}
      >
        <div className='flex '>
          <div className={`sidebarDrawer__title  ${width} `}>
            <div
              className='sidebarDrawer__arrowDiv'
              onClick={() => handleCategoryExpand()}
            >
              <IoArrowBackOutline className='sidebarDrawer--arrow' />
            </div>
            <p className='sidebarDrawer__titleHeader'> Category</p>
          </div>
          {openDropRightOne && firstChildCatItems.length > 0 && (
            <div className={`sidebarDrawer__title ml-0 ${width}`}>
              <div
                className='sidebarDrawer__arrowDiv'
                onClick={handleSubCategoryOne}
              >
                <IoArrowBackOutline className='sidebarDrawer--arrow' />
              </div>

              <p className='sidebarDrawer__titleHeader'>
                {selectedParentCatName}
              </p>
            </div>
          )}
          {openDropRightTwo &&
            secondChildCatItems.length > 0 &&
            firstChildCatItems.length > 0 && (
              <div className={`sidebarDrawer__title ml-0 ${width}`}>
                <div
                  className='sidebarDrawer__arrowDiv'
                  onClick={handleSubCategoryTwo}
                >
                  <IoArrowBackOutline className='sidebarDrawer--arrow' />
                </div>

                <p className='sidebarDrawer__titleHeader'>
                  {selectedFirstChildCatName}
                </p>
              </div>
            )}
          {openDropRightThree &&
            thirdChildCatItems.length > 0 &&
            firstChildCatItems.length > 0 && (
              <div className={`sidebarDrawer__title ml-0 ${width}`}>
                <div
                  className='sidebarDrawer__arrowDiv'
                  onClick={() => setOpenDropRightThree(false)}
                >
                  <IoArrowBackOutline className='sidebarDrawer--arrow' />
                </div>
                <p className='sidebarDrawer__titleHeader'>
                  {selectedSecondChildCatName}
                </p>
              </div>
            )}
        </div>

        <div className=' flex '>
          <div className={`sidebarDrawer__body `}>
            <div className='sidebarDrawer__itemSelector'>
              <a
                href=''
                className={`sidebarDrawer__sidebarButton ${
                  selecter === 'Category'
                    ? 'sidebarDrawer__selectedButton'
                    : ' '
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
                className={`sidebarDrawer__sidebarButton ${
                  selecter === 'Brand' ? 'sidebarDrawer__selectedButton' : ' '
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
                className={`sidebarDrawer__sidebarButton ${
                  selecter === 'Company' ? 'sidebarDrawer__selectedButton' : ' '
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelector('Company');
                }}
              >
                Company
              </a>
            </div>
            <div className='sidebarDrawer__contentWrapper'>
              {selecter === 'Category' ? (
                <div>
                  <CategoryList
                    setOpenDropRightOne={setOpenDropRightOne}
                    selectedParentCatId={selectedParentCatId}
                    setSelectedParentCatId={setSelectedParentCatId}
                    parentCategories={categories}
                    setSelectedParentCatName={setSelectedParentCatName}
                    firstChildCategories={firstChildCatItems}
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
                ''
              ) : (
                // <BrandList handleCategoryExpand={handleCategoryExpand} />
                ''
                // <CompanyList handleCategoryExpand={handleCategoryExpand} />
              )}
            </div>
          </div>

          {openDropRightOne && firstChildCatItems?.length > 0 && (
            <SubCategoryOne
              setOpenDropRightTwo={setOpenDropRightTwo}
              openDropRightTwo={openDropRightTwo}
              marginRightOne={marginRightOne}
              firstChildCategories={firstChildCatItems}
              setSelectedFirstChildCatId={setSelectedFirstChildCatId}
              setSelectedFirstChildCatName={setSelectedFirstChildCatName}
              secondChildCategories={secondChildCatItems}
              selectedFirstChildCatId={selectedFirstChildCatId}
              handleCategoryExpand={handleCategoryExpand}
              // handleSubCategoryOne={handleSubCategoryOne}
            />
          )}

          {
            // openDropRightTwo &&
            // secondChildCatItems?.length > 0 && firstChildCatItems?.length > 0 &&
            // <SubCategoryTwo
            //   setOpenDropRightThree={setOpenDropRightThree}
            //   marginRightTwo={marginRightTwo}
            //   secondChildCategories={secondChildCatItems}
            //   setSelectedSecondChildCatId={setSelectedSecondChildCatId}
            //   setSelectedSecondChildCatName={setSelectedSecondChildCatName}
            //   thirdChildCategories={thirdChildCatItems}
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
            //   thirdChildCategories={thirdChildCatItems}
            //   handleCategoryExpand={handleCategoryExpand}
            // />
          }
        </div>
      </div>
    </>
  );
};

export default Category;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// import './Category.css';
import _ from 'lodash';
import { IoArrowForward, IoArrowBackOutline } from 'react-icons/io5';

const Category = ({
  categoryExpand,
  handleCategoryExpand,
  categoryRef,
}: any) => {
  const [selecter, setSelecter] = useState('Category');

  const handleSelector = (category: any) => {
    if (category === 'Brand') {
      setSelecter('Brand');
    } else if (category === 'Company') {
      setSelecter('Company');
    } else {
      setSelecter('Category');
    }
  };

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
          <div className={`sidebarDrawer__title `}>
            <div
              className='sidebarDrawer__arrowDiv'
              onClick={() => handleCategoryExpand()}
            >
              <IoArrowBackOutline className='sidebarDrawer--arrow' />
            </div>
            <p className='sidebarDrawer__titleHeader'> Category</p>
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

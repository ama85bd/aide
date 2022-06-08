import React from 'react';
import { Link } from 'react-router-dom';

const SubCategoryThree = ({
  marginRightThree,
  thirdChildCategories,
  handleCategoryExpand,
  showDisplayThree,
  setShowDisplay,
  setShowDisplayTwo,
  setShowDisplayThree,
}: any) => {
  return (
    <div
      className={`sidebar_details_body mx-1 mr-0  ${marginRightThree}  `}
      style={{ display: `${showDisplayThree}` }}
    >
      <div className='sidebar_details_content_wrapper'>
        <div className='categoryList__wrapper'>
          <ul className='categoryList__container  ' style={{ paddingLeft: 0 }}>
            {thirdChildCategories?.length > 0 &&
              thirdChildCategories.map((category: any) => {
                return (
                  <>
                    <Link
                      to={`/category/${
                        category.CatName
                          ? category.CatName.split(' ').join('-')
                          : category.CatName
                      }/${category.Id}`}
                    >
                      <li className=' categoryList__colorNormal'>
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

export default SubCategoryThree;

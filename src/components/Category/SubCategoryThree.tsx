import React from 'react';
import { Link } from 'react-router-dom';

const SubCategoryThree = ({
  marginRightThree,
  thirdChildCategories,
  handleCategoryExpand,
}: any) => {
  // const listAllCategory = useSelector((state) => state.listAllCategory)
  // const allCategories = listAllCategory.allCategories
  return (
    <div className={`sidebar_details_body mx-1 mr-0  ${marginRightThree}  `}>
      <div className='sidebar_details_content_wrapper'>
        <div className='category_list_wrapper'>
          <ul
            className='sidebar_list_container  '
            style={{ height: '100vh', width: '17rem' }}
          >
            {thirdChildCategories?.length > 0 &&
              thirdChildCategories.map((category: any) => {
                return (
                  <>
                    <li className=' category__color__normal'>
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

export default SubCategoryThree;

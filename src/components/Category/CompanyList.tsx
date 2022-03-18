import React, { useEffect, useState } from 'react';
import SingleCompany from './SingleCompany';
// import { WEBSITE } from '../../../constants/productConstant'
// import { getCompanies } from '../../../services/companyServices';
import { CompanySkeleton } from '../../customs/Skeleton';

function CompanyList({ handleCategoryExpand }: any) {
  const [companyTitle, setCompanyTitle] = useState('');
  const [allCompany, setAllCompanies] = useState(null);
  const [loading, setLoading] = useState(true);

  const getcoms = async () => {
    // const res = await getCompanies()
    // setLoading(true)
    // if (res.data.IsSuccess) {
    //   setAllCompanies(res.data)
    //   setLoading(false)
    // }
  };

  useEffect(() => {
    getcoms();
  }, []);

  //   const companies = allCompany && companyTitle ? allCompany.OBJ.filter(
  //     (company) => company.CompanyName.toLowerCase().includes(companyTitle.toLowerCase())) : allCompany ? allCompany.OBJ : [];
  return (
    <div className='category_list_wrapper'>
      <form className='sidebar_searchbar'>
        <input
          className='sidebar_input_search pl-5'
          type='text'
          placeholder='Search'
          value={companyTitle}
          onChange={(e) => setCompanyTitle(e.target.value)}
        />
      </form>
      <ul className='sidebar_list_container full_height'>
        <div className='brand_container'>
          {/* {companies && companies.map((company) => {
            return */}
          <SingleCompany
            color='white'
            //   key={company.id}
            //   logo={company.logo}
            //   title={company.CompanyName}
            //   subtitle={company.slug}
            //   IsFavorite={company.IsFavorite}
            handleCategoryExpand={handleCategoryExpand}
          />

          {/* })} */}
          {loading && [...Array(10)].map((el, index) => <CompanySkeleton />)}
        </div>
      </ul>
    </div>
  );
}

export default CompanyList;

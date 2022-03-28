import React, { useEffect, useState } from 'react';
import SingleCompany from './SingleCompany';
import qs from 'qs';
import Product from '../../api/product';
import { trackPromise } from 'react-promise-tracker';
import LoadingBox from '../../common/LoadingBox';

function CompanyList({ handleCategoryExpand }: any) {
  const [companyTitle, setCompanyTitle] = useState('');
  const [allCompany, setAllCompanies] = useState<any>(null);
  console.log('allCompany', allCompany);
  const [loading, setLoading] = useState(true);
  //   const companyId = window.localStorage.getItem('company_id');
  //   const compId: any = {
  //     Id: companyId ? companyId : 0,
  //   };
  const clientId = window.localStorage.getItem('client_id');
  const cusId: any = {
    CustomerId: clientId ? clientId : 0,
  };
  const handleRemoveFavoriteBrand = (e: any) => {
    return null;
  };

  const getAllCompany = async () => {
    setLoading(true);
    const res = await Product.getAllCompany(qs.stringify(cusId));

    if (res.IsSuccess) {
      setAllCompanies(res.OBJ);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllCompany();
  }, []);

  const companies =
    allCompany && companyTitle
      ? allCompany.filter((company: any) =>
          company.CompanyName.toLowerCase().includes(companyTitle.toLowerCase())
        )
      : allCompany;
  return (
    <div className='categoryList__wrapper'>
      <form className='categoryBar__searchbar'>
        <input
          className='categoryBar__inputSearch pl-5'
          type='text'
          placeholder='Search'
          value={companyTitle}
          onChange={(e) => setCompanyTitle(e.target.value)}
        />
      </form>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <ul className='categoryList__listContainer full_height'>
          <div className='categoryList__brandContainer'>
            {companies &&
              companies.map((company: any) => {
                return (
                  <SingleCompany
                    color='white'
                    key={company.Id}
                    compId={company.Id}
                    logo={company.logo}
                    title={company.CompanyName}
                    subtitle={company.slug}
                    brandList={company.BrandList}
                    IsFavorite={company.IsFavorite}
                    handleCategoryExpand={handleCategoryExpand}
                    handleRemoveFavoriteBrand={handleRemoveFavoriteBrand}
                  />
                );
              })}
          </div>
        </ul>
      )}
    </div>
  );
}

export default CompanyList;

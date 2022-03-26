import React, { useEffect, useState } from 'react';
import SingleCompany from './SingleCompany';
import qs from 'qs';
import Product from '../../api/product';
import { trackPromise } from 'react-promise-tracker';

function CompanyList({ handleCategoryExpand }: any) {
  const [companyTitle, setCompanyTitle] = useState('');
  const [allCompany, setAllCompanies] = useState<any>(null);
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
  useEffect(() => {
    const getAllsetBrand = async () => {
      setLoading(true);
      await Product.getAllBrand(qs.stringify(cusId)).then((e) => {
        setAllCompanies(e.OBJ);
      });
      setLoading(false);
    };

    trackPromise(getAllsetBrand());
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
      <ul className='categoryList__listContainer full_height'>
        <div className='categoryList__brandContainer'>
          {companies &&
            companies.map((company: any) => {
              return (
                <SingleCompany
                  color='white'
                  key={company.id}
                  compId={company.id}
                  logo={company.logo}
                  title={company.CompanyName}
                  subtitle={company.slug}
                  IsFavorite={company.IsFavorite}
                  handleCategoryExpand={handleCategoryExpand}
                  handleRemoveFavoriteBrand={handleRemoveFavoriteBrand}
                />
              );
            })}
        </div>
      </ul>
    </div>
  );
}

export default CompanyList;

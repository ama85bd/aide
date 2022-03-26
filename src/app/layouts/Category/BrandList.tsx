import React, { useEffect, useState } from 'react';
import Product from '../../api/product';
import SingleBrand from './SingleBrand';
import qs from 'qs';
import { trackPromise } from 'react-promise-tracker';

interface IBrandList {
  handleCategoryClose?: any;
  handleCategoryExpand?: any;
}

function BrandList({ handleCategoryClose, handleCategoryExpand }: IBrandList) {
  const [brandTitle, setBrandTitle] = useState('');
  const [loading, setLoading] = useState(true);

  const [allBrands, setAllBrands] = useState<any>(null);
  const clientId = window.localStorage.getItem('client_id');
  const cusId: any = {
    CustomerId: clientId ? clientId : 0,
  };

  const handleRemoveFavoriteBrand = (e: any) => {
    return null;
  };

  const brands =
    brandTitle && allBrands
      ? allBrands?.filter((brand: any) =>
          brand.BrandName.toLowerCase().includes(brandTitle.toLowerCase())
        )
      : allBrands;

  useEffect(() => {
    const getAllsetBrand = async () => {
      setLoading(true);
      await Product.getAllBrand(qs.stringify(cusId)).then((e) => {
        setAllBrands(e.OBJ);
      });
      setLoading(false);
    };

    trackPromise(getAllsetBrand());
  }, []);

  return (
    <div className=' categoryList__wrapper'>
      <form className='categoryBar__searchbar'>
        <input
          className='categoryBar__inputSearch pl-5'
          type='text'
          placeholder='Search'
          value={brandTitle}
          onChange={(e) => setBrandTitle(e.target.value)}
        />
      </form>

      <ul className='categoryList__listContainer full_height'>
        <div className='categoryList__brandContainer'>
          {brands &&
            brands.map((brand: any) => {
              return (
                <SingleBrand
                  color='white'
                  logo={brand.logo}
                  title={brand.BrandName}
                  brandId={brand.Id}
                  subtitle={brand.subtitle}
                  handleCategoryClose={handleCategoryClose}
                  handleCategoryExpand={handleCategoryExpand}
                  IsFavorite={brand.IsFavorite}
                  handleRemoveFavoriteBrand={handleRemoveFavoriteBrand}
                />
              );
            })}
        </div>
      </ul>
    </div>
  );
}

export default BrandList;

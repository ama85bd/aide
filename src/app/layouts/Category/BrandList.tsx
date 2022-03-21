import React, { useEffect, useState } from 'react';
// import SingleBrand from './SingleBrand';
// import { getBrands } from '../../../services/brandServices';
// import { BrandSkeleton } from '../../customs/Skeleton';

interface IBrandList {
  handleCategoryClose?: any;
  handleCategoryExpand?: any;
}

function BrandList({ handleCategoryClose, handleCategoryExpand }: IBrandList) {
  const [brandTitle, setBrandTitle] = useState('');
  const [loading, setLoading] = useState(true);

  const [allBrands, setAllBrands] = useState(null);

  //   const getbrds = async () => {
  //     const res = await getBrands(false)
  //     setLoading(true)
  //     if (res.data.IsSuccess) {
  //       setAllBrands(res.data)
  //       setLoading(false)
  //     }
  //   };

  //   useEffect(() => {
  //     getbrds();
  //   }, []);

  //   const brands = brandTitle && allBrands ? allBrands?.OBJ.filter(
  //     (brand) => brand.BrandName.toLowerCase().includes(brandTitle.toLowerCase())) : allBrands ? allBrands.OBJ : [];
  return (
    <div className=' category_list_wrapper'>
      <form className='sidebar_searchbar'>
        <input
          className='sidebar_input_search pl-5'
          type='text'
          placeholder='Search'
          value={brandTitle}
          onChange={(e) => setBrandTitle(e.target.value)}
        />
      </form>

      <ul className='sidebar_list_container full_height'>
        <div className='brand_container'>
          {
            // brands &&
            // brands.map((brand) => {
            //   return
            // <SingleBrand
            //   color='white'
            //   // logo={brand.logo}
            //   // title={brand.BrandName}
            //   // brandId={brand.Id}
            //   // subtitle={brand.subtitle}
            //   handleCategoryClose={handleCategoryClose}
            //   handleCategoryExpand={handleCategoryExpand}
            //   // IsFavorite={brand.IsFavorite}
            // />
            // })
          }
          {/* {loading && [...Array(10)].map((el, index) => <BrandSkeleton />)} */}
        </div>
      </ul>
    </div>
  );
}

export default BrandList;

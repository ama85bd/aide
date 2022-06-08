import React, { useEffect, useState } from 'react';
import './product.css';
import ProductCart from './ProductCart';
const ProductContainer = ({
  product,
  type,
  favorite,
  setFavorite,
  setOpenRemoveSnackbar,
  gridViewNumber,
}: any) => {
  return (
    <>
      <div className='ml-2 flex flex-wrap mt-3'>
        {/* Product Cart */}
        {product && (
          <ProductCart
            product={product}
            type={type}
            key={product.Id}
            // cartQuantity={cartQuantity}
            favorite={favorite}
            gridViewNumber={gridViewNumber}
            setFavorite={setFavorite}
            setOpenRemoveSnackbar={setOpenRemoveSnackbar}
          />
        )}
      </div>
    </>
  );
};

export default React.memo(ProductContainer);

import React from 'react';
import { Col } from 'reactstrap';
import ProductContainer from './ProductContainer';

function ProductLists({ loading, gridViewNumber, homeProducts }: any) {
  return (
    <>
      {gridViewNumber === 5 ? (
        <div className='row row-cols-5 g-3 '>
          {homeProducts &&
            homeProducts.map((product: any) => {
              return (
                <div className='col '>
                  <ProductContainer
                    key={product.Id}
                    product={product}
                    loading={loading}
                    // favorite={favoriteProduct}
                    // setFavorite={setFavoriteProduct}
                  />
                </div>
              );
            })}
        </div>
      ) : gridViewNumber === 4 ? (
        <>
          {homeProducts &&
            homeProducts.map((product: any) => {
              return (
                <Col md={4} lg={3} xl={3}>
                  <ProductContainer
                    key={product.Id}
                    product={product}
                    loading={loading}
                    // favorite={favoriteProduct}
                    // setFavorite={setFavoriteProduct}
                  />
                </Col>
              );
            })}
        </>
      ) : (
        <>
          {homeProducts &&
            homeProducts.map((product: any) => {
              return (
                <Col md={4} lg={2} xl={2}>
                  <ProductContainer
                    key={product.Id}
                    product={product}
                    loading={loading}
                    // favorite={favoriteProduct}
                    // setFavorite={setFavoriteProduct}
                  />
                </Col>
              );
            })}
        </>
      )}
    </>
  );
}

export default ProductLists;

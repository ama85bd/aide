/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Row } from 'reactstrap';
import LoadingBox from '../../app/common/LoadingBox';
import ProductLists from './ProductLists';

function AllProducts({ gridViewNumber, loading, allHomeProducts }: any) {
  return (
    <div className='allproducts__mainbody' style={{ marginBottom: '1rem' }}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : gridViewNumber === 5 ? (
        <ProductLists
          gridViewNumber={gridViewNumber}
          homeProducts={allHomeProducts}
          loading={loading}
        />
      ) : (
        <Row>
          <Col md={12}>
            <Row className='g-3'>
              <ProductLists
                gridViewNumber={gridViewNumber}
                homeProducts={allHomeProducts}
                loading={loading}
              />
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AllProducts;

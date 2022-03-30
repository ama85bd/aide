import React, { useState } from 'react';
import { IoRemoveSharp } from 'react-icons/io5';
import { Col, Row } from 'reactstrap';

function AllProducts() {
  // get grid view number
  const [gridViewNumber, setGridViewNumber] = useState<number>(6);
  console.log('gridViewNumber', gridViewNumber);
  return (
    <div className='allproducts__mainbody'>
      <div className='allproducts__viewselect'>
        <select
          name='viewselect'
          id='viewselect'
          onChange={(e) => {
            setGridViewNumber(Number(e.target.value));
          }}
        >
          <option key={4} value='4'>
            4
          </option>
          <option key={5} value='5'>
            5
          </option>
          <option selected key={6} value='6'>
            6
          </option>
        </select>
      </div>
      <Row>
        {gridViewNumber === 5 ? (
          <div className='container-fluid'>
            <div className='row row-cols-5 g-2'>
              <div className='col'>
                <div
                  style={{
                    height: '385px',
                    width: '100%',
                    backgroundColor: 'red',
                  }}
                ></div>
              </div>
              <div className='col'>
                <div
                  style={{
                    height: '385px',
                    width: '100%',
                    backgroundColor: 'yellow',
                  }}
                ></div>
              </div>
              <div className='col'>
                <div
                  style={{
                    height: '385px',
                    width: '100%',
                    backgroundColor: 'grey',
                  }}
                ></div>
              </div>
              <div className='col'>
                <div
                  style={{
                    height: '385px',
                    width: '100%',
                    backgroundColor: 'blue',
                  }}
                ></div>
              </div>
              <div className='col'>
                <div
                  style={{
                    height: '385px',
                    width: '100%',
                    backgroundColor: 'orange',
                  }}
                ></div>
              </div>
            </div>
          </div>
        ) : gridViewNumber === 4 ? (
          <Col md={12}>
            <Row className='g-2'>
              <Col md={4} lg={3} xl={3}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'cyan',
                  }}
                ></div>
              </Col>
              <Col md={4} lg={3} xl={3}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'yellow',
                  }}
                ></div>
              </Col>
              <Col md={4} lg={3} xl={3}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'grey',
                  }}
                ></div>
              </Col>
              <Col md={4} lg={3} xl={3}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'blue',
                  }}
                ></div>
              </Col>
            </Row>
          </Col>
        ) : (
          <Col md={12}>
            <Row className='g-2'>
              <Col lg={2}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'red',
                  }}
                ></div>
              </Col>
              <Col lg={2}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'yellow',
                  }}
                ></div>
              </Col>
              <Col lg={2}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'grey',
                  }}
                ></div>
              </Col>
              <Col lg={2}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'blue',
                  }}
                ></div>
              </Col>
              <Col lg={2}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'orange',
                  }}
                ></div>
              </Col>
              <Col lg={2}>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    backgroundColor: 'black',
                  }}
                ></div>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default AllProducts;

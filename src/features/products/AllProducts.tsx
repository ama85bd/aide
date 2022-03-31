/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { IoRemoveSharp, IoRepeatOutline } from 'react-icons/io5';
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import { faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AllProducts() {
  // get grid view number
  const [gridViewNumber, setGridViewNumber] = useState<number>(6);
  console.log('gridViewNumber', gridViewNumber);
  const [dropdownGridViewOpen, setDropdownGridViewOpen] = useState(false);
  const toggleDropdownGridView = () =>
    setDropdownGridViewOpen(!dropdownGridViewOpen);
  return (
    <div className='allproducts__mainbody'>
      <div className='allproducts__views'>
        <div className='allproducts__viewsbar'></div>
        {/* <IoRepeatOutline
          style={{ fontSize: '2rem', transform: 'rotate(90deg)' }}
        /> */}
        <div className='allproducts__viewselect'>
          <h2 className='allproducts__viewheading'>Number of Column Per Row</h2>
          {/* <Row>
          <Col md={12}> */}
          <Dropdown
            isOpen={dropdownGridViewOpen}
            toggle={toggleDropdownGridView}
            title={gridViewNumber.toString()}
            style={{ padding: '0px 0 2px 5px' }}
          >
            <DropdownToggle
              // caret
              color='primary'
              outline
              className='dropdown-company'
              size={'xs'}
            >
              <span>
                {gridViewNumber === 4
                  ? 'Four'
                  : gridViewNumber === 5
                  ? 'Five'
                  : 'Six'}
              </span>
            </DropdownToggle>
            <DropdownMenu left>
              <DropdownItem
                className={gridViewNumber === 4 ? 'active' : ''}
                onClick={() => setGridViewNumber(4)}
              >
                Four
              </DropdownItem>
              <DropdownItem
                className={gridViewNumber === 5 ? 'active' : ''}
                onClick={() => setGridViewNumber(5)}
              >
                Five
              </DropdownItem>
              <DropdownItem
                className={gridViewNumber === 6 ? 'active' : ''}
                onClick={() => setGridViewNumber(6)}
              >
                Six
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* </Col>
        </Row> */}
          {/* <div className='custom-select'>
          <select
            name='viewselect'
            id='viewselect'
            onChange={(e) => {
              setGridViewNumber(Number(e.target.value));
            }}
            // className='allproducts__dropdownview'
            // title='Select'
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
          <span className='custom-arrow'></span>
        </div> */}
        </div>
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

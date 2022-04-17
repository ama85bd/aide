import React, { useEffect, useMemo, useState } from 'react';
import AllProducts from '../products/AllProducts';
import FeatureSlider from '../slideCarousel/FeatureSlider';
import SlideCarousel from '../slideCarousel/SlideCarousel';
import TopCategory from '../slideCarousel/TopCategory';
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import Product from '../../app/api/product';
import qs from 'qs';
import ShopByBrand from '../slideCarousel/ShopByBrand';
import ShopByCompany from '../slideCarousel/ShopByCompany';
import Footer from '../footer/Footer';

function HomePage() {
  // get grid view number
  const [gridViewNumber, setGridViewNumber] = useState<number>(5);
  const [dropdownGridViewOpen, setDropdownGridViewOpen] = useState(false);
  const [lazyLoaderPage, setLazyLoaderPage] = useState<number>(67);
  // console.log('gridViewNumber', gridViewNumber);
  // console.log('lazyLoaderPage', lazyLoaderPage);
  const [allHomeProducts, setAllHomeProducts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const toggleDropdownGridView = () =>
    setDropdownGridViewOpen(!dropdownGridViewOpen);

  const clientId = window.localStorage.getItem('client_id');
  const cusId: any = {
    CustomerId: clientId ? clientId : 0,
  };

  const getallHomeProducts = async () => {
    setLoading(true);
    const res = await Product.getProductsForHomePage(qs.stringify(cusId));

    if (res.IsSuccess) {
      setAllHomeProducts(res);
      setLoading(false);
    }
  };

  useMemo(() => {
    getallHomeProducts();
  }, []);
  // useEffect(() => {
  //   getallHomeProducts();
  // }, []);

  return (
    <>
      <SlideCarousel />
      <FeatureSlider />
      <TopCategory />

      <div className='productpage sticky'>
        <div className='allproducts__views'>
          <div className='allproducts__viewsbar'></div>
          {/* <IoRepeatOutline
          style={{ fontSize: '2rem', transform: 'rotate(90deg)' }}
        /> */}
          <div className='allproducts__viewselect'>
            <h2 className='allproducts__viewheading'>
              Number of Column Per Row
            </h2>
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
                  onClick={() => {
                    setGridViewNumber(4);
                    setLazyLoaderPage(62);
                  }}
                >
                  Four
                </DropdownItem>
                <DropdownItem
                  className={gridViewNumber === 5 ? 'active' : ''}
                  onClick={() => {
                    setGridViewNumber(5);
                    setLazyLoaderPage(67);
                  }}
                >
                  Five
                </DropdownItem>
                <DropdownItem
                  className={gridViewNumber === 6 ? 'active' : ''}
                  onClick={() => {
                    setGridViewNumber(6);
                    setLazyLoaderPage(62);
                  }}
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
      </div>
      <div className='stickyProduct'>
        <section>
          <AllProducts
            gridViewNumber={gridViewNumber}
            loading={loading}
            allHomeProducts={
              allHomeProducts &&
              allHomeProducts.OBJ.slice(0, gridViewNumber === 5 ? 25 : 24)
            }
          />
        </section>
        <section>
          <ShopByBrand />
        </section>
        <section>
          <AllProducts
            gridViewNumber={gridViewNumber}
            loading={loading}
            allHomeProducts={
              allHomeProducts &&
              allHomeProducts.OBJ.slice(
                gridViewNumber === 5 ? 26 : 25,
                gridViewNumber === 5 ? 51 : 49
              )
            }
          />
        </section>
        <section>
          <ShopByCompany />
        </section>
        <section>
          <AllProducts
            gridViewNumber={gridViewNumber}
            loading={loading}
            allHomeProducts={
              allHomeProducts &&
              allHomeProducts.OBJ.slice(
                gridViewNumber === 5 ? 52 : 50,
                lazyLoaderPage
              )
            }
          />
          {allHomeProducts && lazyLoaderPage < allHomeProducts.OBJ.length && (
            <>
              <div className=' flex justify-center my-2'>
                <button
                  className=' custom-loadbtn'
                  onClick={() => {
                    if (lazyLoaderPage + 10 > allHomeProducts.OBJ.length) {
                      setLazyLoaderPage(allHomeProducts.OBJ.length);
                    } else {
                      setLazyLoaderPage(
                        gridViewNumber === 5
                          ? lazyLoaderPage + 15
                          : lazyLoaderPage + 12
                      );
                    }
                  }}
                >
                  Load More
                </button>
              </div>
            </>
          )}
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default HomePage;

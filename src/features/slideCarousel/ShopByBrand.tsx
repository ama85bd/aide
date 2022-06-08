import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import Product from '../../app/api/product';
import qs from 'qs';
import { trackPromise } from 'react-promise-tracker';
import { Link } from 'react-router-dom';
import LoadingBox from '../../app/common/LoadingBox';
import { IoHeartOutline } from 'react-icons/io5';

function ShopByBrand() {
  const sliderRef = useRef<Slider>(null);
  const [allBrands, setAllBrands] = useState<any>(null);
  // console.log('allTopCategory', allTopCategory);
  const [loading, setLoading] = useState<boolean>(false);
  const clientId = window.localStorage.getItem('client_id');
  const cusId: any = {
    CustomerId: clientId ? clientId : 0,
  };

  const getAllBrands = async () => {
    setLoading(true);
    const res = await Product.getAllBrand(qs.stringify(cusId));

    if (res.IsSuccess) {
      setAllBrands(res.OBJ);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBrands();
  }, []);

  var settings = {
    dots: true,
    // centerMode: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    // slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const settings = {
  //   // className: 'center',
  //   // centerMode: true,
  //   infinite: true,
  //   // centerPadding: '60px',
  //   slidesToShow: 4,
  //   speed: 500,
  //   rows: 1,
  //   // slidesPerRow: 1,
  //   autoplay: true,
  // };

  useEffect(() => {}, []);
  return (
    <div className='shopbyBrand__mainBOdy'>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <div className='shopbyBrand__secondary'>
          <div className='shopbyBrand__top'>
            <div className='shopbyBrand__left'>
              <h2 className='shopbyBrand__heading'>Shop By Brand</h2>
            </div>
            <div className='shopbyBrand__right'>
              <button>
                <div className='shopbyBrand__right--buttonSeeAll'>See All</div>
              </button>
              <div className='shopbyBrand__right--nextPreButton'>
                <IoChevronBackSharp
                  className='shopbyBrand__right--arrowButton'
                  onClick={() => sliderRef?.current?.slickPrev()}
                />
                <IoChevronForwardSharp
                  className='shopbyBrand__right--arrowButton buttons'
                  onClick={() => sliderRef?.current?.slickNext()}
                />
              </div>
            </div>
          </div>
          <div className='shopbyBrand__bottom'>
            <Slider
              ref={sliderRef}
              slidesToShow={allBrands?.length > 6 ? 6 : allBrands?.length}
              {...settings}
              customPaging={(i) => (
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    top: '-10px',
                    opacity: 0,
                    outline: 'none',
                  }}
                >
                  {i}
                </div>
              )}
            >
              {allBrands?.map((item: any) =>
                item.logo.slice(-3) === 'ebp' ||
                item.logo.slice(-3) === 'png' ||
                item.logo.slice(-3) === 'jpg' ? (
                  <div key={item.Id}>
                    <Link
                      to={`/category/${
                        item.BrandName
                          ? item.BrandName.split(' ').join('-')
                          : item.BrandName
                      }/${item.Id}`}
                      className=''
                    >
                      <div className='shopbyBrand__shopbyBrandSlider '>
                        <div className='flex justify-center'>
                          <img
                            style={{
                              width: '11rem',
                              height: '10rem',
                              objectFit: 'contain',
                              outline: 'none',
                              borderRadius: 5,
                            }}
                            src={item.logo}
                            // alt={item.LargeIcon.slice(-4)}
                            alt={item.BrandName}
                          />

                          {/* <h3
                          className='topcategory__catname'
                          style={{ textAlign: 'center' }}
                        >
                          {' '}
                          {item.BrandName}{' '}
                        </h3> */}
                        </div>
                        <div className='shopbyBrand__favourite-buttom-div'>
                          <button id='Tooltipfavourite'>
                            <IoHeartOutline
                              className='favourite-buttom'
                              style={{
                                // marginTop: '-.5rem',
                                // marginLeft: '.3rem',
                                // marginBottom: '-.5rem',
                                fontSize: '2.2rem',
                              }}
                            />
                          </button>
                        </div>
                        <hr style={{ borderTopWidth: '2px', color: 'grey' }} />
                        <h3 className='shopbyBrand__brandName'>
                          {' '}
                          {item.BrandName}{' '}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ) : null
              )}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}
export default ShopByBrand;

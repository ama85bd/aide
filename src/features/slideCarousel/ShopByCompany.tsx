import React, { useEffect, useMemo, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import Product from '../../app/api/product';
import qs from 'qs';
import { trackPromise } from 'react-promise-tracker';
import { Link } from 'react-router-dom';
import LoadingBox from '../../app/common/LoadingBox';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';

function ShopByCompany() {
  const sliderRef = useRef<Slider>(null);
  const [allCompany, setAllCompanies] = useState<any>(null);
  // console.log('allTopCategory', allTopCategory);
  const [loading, setLoading] = useState<boolean>(false);
  const clientId = window.localStorage.getItem('client_id');
  const cusId: any = {
    CustomerId: clientId ? clientId : 0,
  };

  const getAllCompany = async () => {
    setLoading(true);
    const res = await Product.getAllCompany(qs.stringify(cusId));

    if (res.IsSuccess) {
      setAllCompanies(res.OBJ);
      setLoading(false);
    }
  };
  useMemo(() => {
    getAllCompany();
  }, []);

  var settings = {
    dots: true,
    // centerMode: true,
    infinite: true,
    speed: 500,
    // variableWidth: true,
    autoplay: true,
    // slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
    <div className='shopbyCompany__mainBOdy'>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <div className='shopbyCompany__secondary'>
          <div className='shopbyCompany__top'>
            <div className='shopbyCompany__left'>
              <h2 className='shopbyCompany__heading'>Shop By Company</h2>
            </div>
            <div className='shopbyCompany__right'>
              <button>
                <div className='shopbyCompany__right--buttonSeeAll'>
                  See All
                </div>
              </button>
              <div className='shopbyCompany__right--nextPreButton'>
                <IoChevronBackSharp
                  className='shopbyCompany__right--arrowButton'
                  onClick={() => sliderRef?.current?.slickPrev()}
                />
                <IoChevronForwardSharp
                  className='shopbyCompany__right--arrowButton buttons'
                  onClick={() => sliderRef?.current?.slickNext()}
                />
              </div>
            </div>
          </div>
          <div className='shopbyCompany__bottom'>
            <Slider
              ref={sliderRef}
              slidesToShow={allCompany?.length > 4 ? 4 : allCompany?.length}
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
              {allCompany?.map((item: any) =>
                item.logo.slice(-3) === 'ebp' ||
                item.logo.slice(-3) === 'png' ||
                item.logo.slice(-3) === 'jpg' ? (
                  <div key={item.Id}>
                    <Link
                      to={`/category/${
                        item.CompanyName
                          ? item.CompanyName.split(' ').join('-')
                          : item.CompanyName
                      }/${item.Id}`}
                      // style={{
                      //   background: '#ffffff',
                      //   border: '1px solid #f0f0f0',
                      //   cursor: 'pointer',
                      // }}
                      className=''
                    >
                      <div
                        className='categoryList__singleBrand'
                        style={{
                          cursor: 'pointer',
                          height: '9.5rem',
                        }}
                      >
                        <img
                          src={item.logo}
                          alt=''
                          style={{
                            height: '8rem',
                            width: '12rem',
                            paddingTop: '.3rem',
                          }}
                        />

                        <div className='categoryList__brandInfo'>
                          <Link
                            to={`/brand/${
                              item.CompanyName
                                ? item.CompanyName.split(' ').join('-')
                                : item.CompanyName
                            }/${item.Id}`}
                          >
                            <div className='categoryList__brandTitle'>
                              <h3>{item.CompanyName}</h3>
                              <div
                                style={{ marginLeft: '-0.4rem' }}
                                className='categoryList__brandList'
                              >
                                <h1>
                                  <ul id='brandListText'>
                                    {item.BrandList.slice(0, 5).map(
                                      (x: any) => {
                                        return (
                                          <li className='categoryList__brandListText'>
                                            {' '}
                                            &nbsp;
                                            <span className='underline-decoration'>
                                              {x.BrandName}
                                            </span>
                                          </li>
                                        );
                                      }
                                    )}
                                    {item.BrandList.length > 0 ? (
                                      <li className='categoryList__brandListText '>
                                        <button>
                                          &nbsp;
                                          <span className='underline-decoration'>
                                            See All
                                          </span>
                                        </button>
                                      </li>
                                    ) : (
                                      ''
                                    )}
                                  </ul>
                                </h1>
                              </div>
                            </div>
                          </Link>
                          <div className='categoryList__shopbyComfavorite'>
                            <button>
                              {item.IsFavorite ? (
                                <IoHeart fill='gold' />
                              ) : (
                                <IoHeartOutline className='categoryList__shopbyComfavoriteIcon' />
                              )}
                            </button>
                          </div>
                        </div>
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
export default ShopByCompany;

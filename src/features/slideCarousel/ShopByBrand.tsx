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

function ShopByBrand() {
  const sliderRef = useRef<Slider>(null);
  const [allBrands, setAllBrands] = useState<any>(null);
  console.log('allBrands', allBrands);
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
          slidesToShow: 7,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 5,
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
    <div className='topcategory__mainBOdy'>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : (
        <div className='topcategory__secondary'>
          <div className='topcategory__top'>
            <div className='topcategory__left'>
              <h2 className='topcategory__heading'>Shop By Brand</h2>
            </div>
            <div className='topcategory__right'>
              <button>
                <div className='topcategory__right--buttonSeeAll'>See All</div>
              </button>
              <div className='topcategory__right--nextPreButton'>
                <IoChevronBackSharp
                  className='topcategory__right--arrowButton'
                  onClick={() => sliderRef?.current?.slickPrev()}
                />
                <IoChevronForwardSharp
                  className='topcategory__right--arrowButton buttons'
                  onClick={() => sliderRef?.current?.slickNext()}
                />
              </div>
            </div>
          </div>
          <div className='topcategory__bottom'>
            <Slider
              ref={sliderRef}
              slidesToShow={allBrands?.length > 5 ? 5 : allBrands?.length}
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
                      // style={{
                      //   background: '#ffffff',
                      //   border: '1px solid #f0f0f0',
                      //   cursor: 'pointer',
                      // }}
                      className=''
                    >
                      <div className='topcategory__topcategorySlider'>
                        <img
                          style={{
                            width: '100%',
                            maxHeight: '11rem',
                            objectFit: 'none',
                            outline: 'none',
                            borderRadius: 5,
                            boxShadow: '0px 4px 8px grb(0 0 0/(25%)',
                          }}
                          src={item.logo}
                          // alt={item.LargeIcon.slice(-4)}
                          alt={item.BrandName}
                        />
                        <h3
                          className='topcategory__catname'
                          style={{ textAlign: 'center' }}
                        >
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
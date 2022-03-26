import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import offer1 from '../images/offer1.png';
import offer2 from '../images/offer2.png';
import offer3 from '../images/offer3.png';

export const featureSliderItems = [
  {
    id: 1,
    title: 'Title 1',
    image: offer2,
  },

  {
    id: 2,
    title: 'Title 2',
    image: offer1,
  },

  {
    id: 3,
    title: 'Title 3',
    image: offer3,
  },

  {
    id: 4,
    title: 'Title 4',
    image: offer1,
  },

  {
    id: 5,
    title: 'Title 5',
    image: offer3,
  },
  {
    id: 6,
    title: 'Title 6',
    image: offer2,
  },

  {
    id: 7,
    title: 'Title 7',
    image: offer1,
  },

  {
    id: 8,
    title: 'Title 8',
    image: offer3,
  },

  {
    id: 9,
    title: 'Title 9',
    image: offer2,
  },

  {
    id: 10,
    title: 'Title 10',
    image: offer1,
  },
];

function FeatureSlider() {
  const sliderRef = useRef<Slider>(null);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
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
          slidesToScroll: 1,
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
    <div className='cardSlide__mainBOdy'>
      <div className='cardSlide__secondary'>
        <div className='cardSlide__top'>
          <div className='cardSlide__left'>
            <h2 className='cardSlide__heading'>Special Features</h2>
          </div>
          <div className='cardSlide__right'>
            <div className='cardSlide__right--buttonSeeAll'>
              <button>See All</button>
            </div>
            <div className='cardSlide__right--nextPreButton'>
              <IoChevronBackSharp
                className='cardSlide__right--arrowButton'
                onClick={() => sliderRef?.current?.slickPrev()}
              />
              <IoChevronForwardSharp
                className='cardSlide__right--arrowButton buttons'
                onClick={() => sliderRef?.current?.slickNext()}
              />
            </div>
          </div>
        </div>
        <div className='cardSlide__bottom'>
          <Slider
            ref={sliderRef}
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
            {featureSliderItems.map((item) => (
              <div
                style={{
                  width: 500,
                  objectFit: 'contain',
                  borderRadius: 10,
                  outline: 'none',
                }}
                className='featurerSliderImg px-2'
              >
                <img
                  style={{
                    width: 500,
                    objectFit: 'none',
                    outline: 'none',
                    borderRadius: 10,
                    boxShadow: '0px 4px 8px grb(0 0 0/(25%)',
                  }}
                  src={item.image}
                  alt={item.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>

    // <div style={{ width: '99.7%', background: '#F4F4F4' }}>
    //   <h2>Multiple Rows</h2>
    //   <Slider {...settings}>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>1</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>2</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>3</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>4</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>5</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>6</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>7</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>8</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>9</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>10</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>11</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>12</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>13</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>14</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>15</h3>
    //     </div>
    //     <div>
    //       <h3 style={{ background: 'red', marginRight: '2px' }}>16</h3>
    //     </div>
    //   </Slider>
    // </div>
  );
}
export default FeatureSlider;

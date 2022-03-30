import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import offer1 from '../images/of3.jpg';
import offer2 from '../images/of3.jpg';
import offer3 from '../images/of3.jpg';

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
    dots: false,
    centerMode: false,
    // centerPadding: '10px',
    infinite: true,
    speed: 500,
    variableWidth: true,
    // adaptiveHeight: true,
    // arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
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
    <div className='cardSlide__mainBOdy'>
      <div className='cardSlide__secondary'>
        <div className='cardSlide__top'>
          <div className='cardSlide__left'>
            <h2 className='cardSlide__heading'>Special Features</h2>
          </div>
          <div className='cardSlide__right'>
            <button>
              <div className='cardSlide__right--buttonSeeAll'>See All</div>
            </button>
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
            className='style'
            // slidesToShow={
            //   featureSliderItems.length > 4 ? 4 : featureSliderItems.length
            // }

            {...settings}
            // customPaging={(i) => (
            //   <div
            //     style={{
            //       position: 'absolute',
            //       width: '100%',
            //       top: '-10px',
            //       opacity: 0,
            //       outline: 'none',
            //     }}
            //   >
            //     {i}
            //   </div>
            // )}
          >
            {featureSliderItems.map((item) => (
              <div key={item.id}>
                <div className='cardSlide__featurerSlider'>
                  <img
                    style={{
                      width: '100%',
                      maxHeight: '30rem',
                      // minHeight: '40rem',
                      objectFit: 'cover',
                      outline: 'none',
                      borderRadius: 8,
                      boxShadow: '0px 4px 8px grb(0 0 0/(25%)',
                    }}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default FeatureSlider;

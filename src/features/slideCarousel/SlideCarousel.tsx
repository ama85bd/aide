import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function SlideCarousel() {
  return (
    <div className='mainSlider__body'>
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src='https://i.ibb.co/yqgcCZQ/Rectangle-542.png' />
          <div className='legend mainSlider__slideText'>
            <div className='landing_slider_description  text-start mt-16  -mr-12  opacity-70 relative  pl-6  '>
              <h1 className='landing_slider_heading '>
                Wellcome to{' '}
                <span className='landing_slider_heading_span '>aide </span>
              </h1>
              <h4 className='landing_slider_heading2'>
                ENJOY PEACE IN SHOPPING
              </h4>
              <p className=' mt-10 pb-3 landing_slider_heading3 pr-3'>
                Whether you're looking for a place for shopping. We are here to
                guide you about the details you need to check in advance.
              </p>
            </div>
            <div className='legend add-location'>
              <div>
                <h1 className='add-location__text '>
                  Select Your Location for the Best Shopping Experiences and
                  stay in tune with what's happening in your area
                </h1>
              </div>
              <div className='addLocation-btn'>
                <button>Add Location</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src='https://i.ibb.co/yqgcCZQ/Rectangle-542.png' />
          {/* <div className='legend mainSlider__slideText'>test text</div> */}
        </div>
        <div>
          <img src='https://i.ibb.co/yqgcCZQ/Rectangle-542.png' />
          {/* <div className='legend mainSlider__slideText'>test text</div> */}
        </div>
      </Carousel>
    </div>
    // <Carousel showArrows autoPlay showThumbs={false}>
    //   <div></div>
    //   <img src='https://i.ibb.co/yqgcCZQ/Rectangle-542.png' alt='imgName' />
    // </Carousel>
  );
}
export default SlideCarousel;

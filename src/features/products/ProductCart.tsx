import React, { useEffect, useState, useRef } from 'react';
// import _ from "lodash";
import { Link } from 'react-router-dom';
import Rating from '../../app/common/Rating';
import CartHoverContainer from './CartHoverContainer';
import SideHoverIcons from './SideHoverIcons';
const ProductCart = ({
  product,
  type,
  cartQuantity,
  favorite,
  setFavorite,
  setOpenRemoveSnackbar,
  scheduleShoppingListLoading,
  customerScheduleShoppingList,
  scheduleShoppingListError,
  gridViewNumber,
}: any) => {
  // const dispatch = useDispatch();
  const [addToCartClick, setAddToCartClick] = useState(false);
  const [openOrderReminderModal, setOpenOrderReminderModal] = useState(false);
  const [rating, setRating] = useState(2.5);
  const [item, setItem] = useState('');
  const [divActive, setDivActive] = useState('');
  const [cartBtn, setCartBtn] = useState('');
  const [closeBtn, setCloseBtn] = useState(true);
  const [menu, setMenu] = useState(false);
  const [schedule, setSchedule] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const details__content = addToCartClick ? '' : 'details__content';
  const hoverOff = menu ? 'hidden' : '';
  const imgHoverOff = menu ? '' : 'imgBox';
  const menuColor = menu ? 'text-blue-500' : 'text-gray-400';
  const imgAnim = product.PrimaryImg;

  function handleClickOutside(event: any) {
    if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
      setCloseBtn(!closeBtn);
      setDivActive('');
    }
  }

  document.addEventListener('mousedown', handleClickOutside);

  return (
    <>
      {!schedule ? (
        <div
          className={gridViewNumber === 4 ? 'productCardGrid4' : 'productCard '}
          id={`product${product.Id}`}
        >
          <div className='box'>
            {product.SpecialPrice === 0 ? null : (
              <p
                className=' absolute top-2 left-2 text-white font-bold  px-2 py-1 rounded-md z-10'
                style={{ backgroundColor: ' #07B6B6', fontSize: 11 }}
              >
                22% Off
              </p>
            )}

            <Link
              to={`/product/${
                product.ProductName
                  ? product.ProductName.split(' ').join('-')
                  : product.ProductName
              }/${product.Id}`}
              className='text-blue-500 text-sm'
            >
              <div
                className={`${imgHoverOff} padd-4 m-2  bg-white flex justify-center`}
                style={
                  gridViewNumber === 4
                    ? { height: '70%', width: '100%', transition: 'all 1s' }
                    : { height: '65%', width: '100%', transition: 'all 1s' }
                }
              >
                <img src={product.PrimaryImg} alt='' className='h-full' />
              </div>
            </Link>
            {!menu ? (
              <div
                className={`${details__content} py-1 flex flex-col`}
                style={{ transition: 'all .5s' }}
              >
                <p className=' px-3 text-center text-sm font-bold-500 text-black'>
                  {' '}
                  {product.ProductName}{' '}
                </p>
                <div
                  style={{ rotate: '180deg' }}
                  className='flex justify-center z-0'
                ></div>
                <div className=' flex justify-center items-center '>
                  <span className=' text-lg font-bold text-green-700 mr-2'>
                    ৳ {product.SellPrice}{' '}
                  </span>
                  {product.MSRP === 0 ? null : (
                    <span className='text-sm mr-2 line-through'>৳560</span>
                  )}
                  {/* <span className='  text-green-700 mr-2'>22% off</span> */}
                </div>
                <div className='flex justify-center'>
                  <span className=' text-blue-500 text-sm font-bold mr-3'>
                    Deal of the Day
                  </span>
                  <span className='text-sm text-gray-700 font-bold'>
                    6:10:47
                  </span>
                </div>
                {/* <hr className=' mb-1 mt-2 bg-gray-500'/> */}
              </div>
            ) : (
              <div className='h-2/5 flex flex-col items-center justify-center'>
                <button
                  className='menu w-52 py-2 px-1 flex justify-center items-center rounded-md bg-gray-100 mb-1'
                  onClick={() => setSchedule(true)}
                >
                  {/* <DateRangeOutlinedIcon style={{ width: 20 }} /> */}
                  <p className='ml-2'>Add to Schedule Shopping</p>
                </button>
                <button className='menu w-52 py-2 px-1 flex justify-center items-center rounded-md bg-gray-100'>
                  {/* <CardGiftcardOutlinedIcon style={{ width: 20 }} /> */}
                  <p className='ml-2  '>Add to Gift Cart</p>
                </button>
              </div>
            )}
            <div className={`${hoverOff}`}>
              {!addToCartClick && (
                <CartHoverContainer
                  product={product}
                  setAddToCartClick={setAddToCartClick}
                  type={type}
                  gridViewNumber={gridViewNumber}
                  //  addToCart={addToCart}
                />
              )}
            </div>
            <div className={`${hoverOff}`}>
              {!addToCartClick && (
                <SideHoverIcons
                  product={product}
                  setAddToCartClick={setAddToCartClick}
                  type={type}
                  //  addToCart={addToCart}
                />
              )}
            </div>
          </div>
          <div className=' bg-white'>
            {/* {divActive === `product${product.Id}` && cartQuantity === 1 && AddToCartAnimation(imgAnim, cartBtn, item)

                    } */}
          </div>
          <div className=''>
            {!addToCartClick ? (
              ''
            ) : (
              <div className='flex justify-between items-center pt-2 pr-1 pl-3'>
                <div className='flex flex-col justify-center  '>
                  <p className='' style={{ fontSize: '9px' }}>
                    Order total
                  </p>
                  <p className=''>
                    ৳
                    {product.SellPrice * cartQuantity
                      ? product.SellPrice * cartQuantity
                      : product.SellPrice}
                  </p>
                </div>
                <div className='flex items-center'>
                  {closeBtn ? (
                    <div
                      className=' flex rounded-md p-1'
                      ref={wrapperRef}
                      style={{ background: ' #07B6B6' }}
                    >
                      <button
                        className=' rounded-md text-white w-7'
                        style={{
                          border: '.8px solid rgba(255, 255, 255, 0.623)',
                        }}
                      >
                        -
                      </button>
                      <p
                        className='flex justify-center  text-white w-10'
                        style={{ width: '' }}
                      >
                        <span>{cartQuantity}</span>
                        {/* / {product.SellPrice ? product.SellPrice : "90"} */}
                      </p>
                      <button
                        className=' rounded-md text-white w-7'
                        style={{
                          border: '.8px solid rgba(255, 255, 255, 0.623)',
                        }}

                        // onClick={() =>
                        //     dispatch(updateCartItem(product.Id, INCREASE))}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className='w-8 h-8 rounded-md m-0 '
                      onClick={(e) => setCloseBtn(!closeBtn)}
                      style={{
                        background: '#07B6B6',
                        color: 'white',
                      }}
                    >
                      <span>{cartQuantity}</span>
                    </button>
                  )}
                  <button onClick={() => setMenu(!menu)}>
                    {/* <MoreVertOutlinedIcon className={`${menuColor} cursor-pointer  m-0 p-0`} /> */}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='productCard '></div>
      )}
    </>
  );
};

export default React.memo(ProductCart);

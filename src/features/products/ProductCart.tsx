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

  // const successMessage = useSelector(state => state.favouriteProducts.successMessage);
  // const checkoutDetails = useSelector(state => state.checkout.checkoutDetails);

  function handleClickOutside(event: any) {
    if (wrapperRef.current && !wrapperRef.current?.contains(event.target)) {
      setCloseBtn(!closeBtn);
      setDivActive('');
    }
  }

  // const handleAddToFavourite = () => {
  //     dispatch(addToFavouriteProduct(product.Id));
  //     setFavorite(!favorite);
  // }

  // const handleRemoveFavoriteProduct = () => {
  //     dispatch(removeFavoriteProduct(product.Id));
  //     setFavorite(!favorite);
  //     setOpenRemoveSnackbar(true);
  // }

  document.addEventListener('mousedown', handleClickOutside);

  // const addToCart = (id) => {
  //     setItem(document.getElementById(id).getBoundingClientRect());
  //     setDivActive(id)
  // }

  // const handleClick = (e) => {
  //     e.preventDefault();
  //     if (_.isEmpty(checkoutDetails) === false) {
  //         dispatch(handleTheClickEvent(OPEN_ORDER_REMINDER_MODAL));
  //     }
  //     if (_.isEmpty(checkoutDetails) === true) {
  //         setAddToCartClick(true)
  //         dispatch(addItemToCart(product))
  //         addToCart(`product${product.Id}`)
  //     }
  // }

  // useEffect(() => {
  //     setCartBtn(document.getElementById('my-shopping').getBoundingClientRect())
  // }, []);

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
            {/* {!favorite ?
                        <button className=' absolute top-1 right-2 text-gray-400  w-9 h-9  z-10'
                            onClick={() => handleRemoveFavoriteProduct(product.Id)}
                        >
                            <FavoriteOutlinedIcon style={{ fill: "#EDA464" }} />
                        </button> :
                        <button className=' absolute top-1 right-2 text-gray-400 w-9 h-9 rounded-full hover:bg-gray-100  z-10'
                            onClick={handleAddToFavourite}
                        >
                            <FavoriteBorderOutlinedIcon />
                        </button>
                    } */}
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
                >
                  {/* <Rating
                    rating={rating}
                    numReviews={product.numReviews}
                  ></Rating> */}

                  {/* <Rating
                                    value={product.ApprovedRatingAvg}
                                    precision={1}
                                    readOnly
                                    size="small"
                                /> */}
                </div>
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
              // <div className='flex justify-between items-center pt-2 pr-1 pl-3'>
              //   <div className='flex flex-col justify-center  '>
              //     <div className='flex items-center'>
              //       <div>
              //         <IoLocation
              //           style={{
              //             marginTop: '.5rem',
              //             marginLeft: '.3rem',
              //             marginBottom: '1.1rem',
              //             fontSize: '1.6rem',
              //           }}
              //         />
              //       </div>
              //       <p className='text-xs ml-1 mb-1 text-black'>
              //         Possible Delivery on{' '}
              //       </p>
              //       {/* <p className='text-xs ml-1 '>Sign in to know </p>
              //                   <p className='text-xs ml-1 '>Confirm your delivery location </p> */}
              //     </div>
              //     <div className='flex items-center'>
              //       <div>
              //         <FontAwesomeIcon
              //           icon={faTruck}
              //           style={{
              //             // marginTop: '.1rem',
              //             marginLeft: '.3rem',
              //             marginBottom: '.5rem',
              //             fontSize: '1.4rem',
              //           }}
              //         />
              //       </div>
              //       <p className='text-xs mb-1 ml-1 text-black'>24-48 hours </p>
              //       {/* <p className='text-xs mb-1 ml-1'>Exact delivery time </p>
              //                   <p className='text-xs mb-1 ml-1'>To get exact delivery time </p> */}
              //     </div>
              //   </div>
              //   <div className='flex items-center justify-end'>
              //     <button
              //       type='button'
              //       className=' text-gray-400 cart_add rounded-full m-0 p-2'
              //       // onClick={(e) => handleClick(e)}
              //     >
              //       <IoCartOutline
              //         className=' '
              //         style={{
              //           marginTop: '.5rem',
              //           marginBottom: '.5rem',
              //           fontSize: '2.6rem',
              //           width: '3.7rem',
              //         }}
              //       />
              //     </button>
              //     <button onClick={() => setMenu(!menu)}>
              //       <IoEllipsisVertical
              //         style={{
              //           marginTop: '.5rem',
              //           // marginLeft: '.1rem',
              //           marginRight: '1rem',
              //           marginBottom: '1.1rem',
              //           fontSize: '1.8rem',
              //         }}
              //         className={`${menuColor} cursor-pointer  m-0 p-0`}
              //       />
              //     </button>
              //   </div>
              // </div>
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
                        // onClick={() => {
                        //     if (cartQuantity > 0) {
                        //         dispatch(updateCartItem(product.Id, DECREASE))

                        //     }
                        //     if (cartQuantity < 2) {

                        //         setAddToCartClick(false)
                        //         setCloseBtn(closeBtn)
                        //         dispatch(removeItemFromCart(product.Id))
                        //     }

                        // }}
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
        <div className='productCard '>
          {/* <ProductShedule
                        setMenu={setMenu}
                        setSchedule={setSchedule}
                        productId={product}
                        scheduleShoppingListLoading={scheduleShoppingListLoading}
                        customerScheduleShoppingList={customerScheduleShoppingList}
                        scheduleShoppingListError={scheduleShoppingListError}
                    /> */}
        </div>
      )}
    </>
  );
};

export default React.memo(ProductCart);

import { Link } from 'react-router-dom';
import React from 'react';
import shoppingSchedule from '../../../photos/shping-schedule-list.png';
import { IoLocation, IoCartOutline, IoEllipsisVertical } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const CartHoverContainer = ({
  product,
  setAddToCartClick,
  addToCart,
  type,
}: any) => {
  // const dispatch = useDispatch()
  // const cartItem = useSelector(state => state.cartReducer.cartItem)

  // const productDetails = useSelector((state) => state.productDetails)

  // const productInfo = productDetails.productInfo

  // const productCartIndex = findInArray(cartItem, product.Id, 'Id')

  // const cartQuantity = cartItem[productCartIndex]?.cartQuantity

  // const img = `${WEBSITE}${product.PrimaryImg}`
  // console.log(img);

  let availableIn = new Array();
  let availableVariant = new Array();
  availableIn = product.AvailableOptions.split(',');
  availableVariant = product.AvailableVariant.split(',');

  return (
    <div className='box__items' style={{ transition: 'all 1s' }}>
      <div className=' '>
        <div className='py-1 h-2/3 w-full '>
          <div className='leading-relaxed tracking-normal px-2 flex flex-col items-start '>
            <div className='  leading-tight'>
              <p className='text_size text-left  text-black font-bold  '>
                Product of:
                <Link
                  to={`/product/${
                    product.ProductName
                      ? product.ProductName.split(' ').join('-')
                      : product.ProductName
                  }/${product.Id}`}
                >
                  <span className='text_size text-gray-700 font-normal  ml-1 hover-text-blue'>
                    {product.CompanyName}
                  </span>
                </Link>
              </p>
            </div>
            <div className=' '>
              <p className='text_size  text-black  font-bold'>
                Brand:
                <Link
                  to={`/brand/${
                    product.BrandName
                      ? product.BrandName.split(' ').join('-')
                      : product.BrandName
                  }/${product.BrandId}`}
                >
                  <span className='text_size text-gray-700 font-normal  ml-1 hover-text-blue'>
                    {product.BrandName}
                  </span>
                </Link>
              </p>
            </div>
            <div className=' flex justify-start'>
              <span className='text_size  text-black  font-bold mr-1 '>
                Ideal for:&nbsp;
              </span>
              <Link to={'/'}>
                <span className='text_size text-gray-700 font-bold hover-text-blue'>
                  {product.IdealFor}
                </span>
              </Link>
            </div>
            <div className=' flex justify-start'>
              <p className='text_size text-black font-bold mr-1'>
                Available in:{' '}
                <ul id='listlinkelement'>
                  {availableIn.map((x: any) => {
                    return (
                      <li className='listlinksingle'>
                        <Link to={'/'}>
                          <span className='text_size  text-gray-700 font-normal '>
                            &nbsp;
                            <span className='underline-decoration'>
                              {x.trim()}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {/* {product.AvailableOptions} */}
              </p>
            </div>
            <div className=' flex justify-start'>
              <p className='text_size text-black font-bold mr-1'>
                Variant:{' '}
                <ul id='listlinkelement'>
                  {availableVariant.map((x: any) => {
                    return (
                      <li className='listlinksingle'>
                        <Link to={'/'}>
                          <span className='text_size  text-gray-700 font-normal '>
                            &nbsp;
                            <span className='underline-decoration'>
                              {x.trim()}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </p>
            </div>
          </div>
          <div className='py-1 flex justify-center'>
            <Link
              to={`/product/${
                product.ProductName
                  ? product.ProductName.split(' ').join('-')
                  : product.ProductName
              }/${product.Id}`}
              className='text-blue-500 text-sm hover-text-aide'
              style={{ fontSize: 12, fontWeight: 'bold' }}
            >
              View Full Details{' '}
            </Link>
          </div>

          {/* <div className='flex justify-around mt-1'>
                        <div className=' flex items-center justify-between w-48 rounded-md px-3' style={{ backgroundColor: ' #07B6B6' }}>
                            <span className='text-xs font-bold'>৳{product.SellPrice} </span>
                            <button className='text-xs font-bold'
                                onClick={() => {
                                    setAddToCartClick(true)
                                    dispatch(addItemToCart(product))
                                    addToCart(img)
                                }}>ADD TO CART</button>
                        </div>
                        <button className='flex items-center'>
                            <img src={shoppingSchedule} alt="" />
                        </button>
                    </div> */}
        </div>
      </div>
      {/* <div style={{ position: 'relative' }}> */}
      <div className='flex justify-between items-center pt-2 pr-1 pl-3 bottom-items'>
        <div className='flex flex-col justify-center  '>
          <div className='flex items-center'>
            <div>
              <IoLocation
                style={{
                  marginTop: '.5rem',
                  marginLeft: '.3rem',
                  marginBottom: '1.1rem',
                  fontSize: '1.6rem',
                }}
              />
            </div>
            <p className='text-xs ml-1 mb-1 text-black'>
              Possible Delivery on{' '}
            </p>
            {/* <p className='text-xs ml-1 '>Sign in to know </p>
                                <p className='text-xs ml-1 '>Confirm your delivery location </p> */}
          </div>
          <div className='flex items-center'>
            <div>
              <FontAwesomeIcon
                icon={faTruck}
                style={{
                  // marginTop: '.1rem',
                  marginLeft: '.3rem',
                  marginBottom: '.5rem',
                  fontSize: '1.4rem',
                }}
              />
            </div>
            <p className='text-xs mb-1 ml-1 text-black'>24-48 hours </p>
            {/* <p className='text-xs mb-1 ml-1'>Exact delivery time </p>
                                <p className='text-xs mb-1 ml-1'>To get exact delivery time </p> */}
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <button
            type='button'
            className=' text-gray-400 cart_add rounded-full  p-2'
            // onClick={(e) => handleClick(e)}
          >
            <IoCartOutline
              className=' '
              style={{
                marginTop: '.1rem',
                marginBottom: '.5rem',
                marginRight: '.5rem',
                fontSize: '2.6rem',
                width: '2.5rem',
                height: '2.3rem',
              }}
            />
          </button>
          {/* <button>
            <IoEllipsisVertical
              style={{
                marginTop: '.5rem',
                // marginLeft: '.1rem',
                marginRight: '1rem',
                marginBottom: '1.1rem',
                fontSize: '1.8rem',
                color: '#07b6b6',
              }}
              // className={`${menuColor} cursor-pointer  m-0 p-0`}
            />
          </button> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartHoverContainer;

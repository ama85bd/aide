import { Link } from 'react-router-dom';
import React from 'react';
import shoppingSchedule from '../../../photos/shping-schedule-list.png';

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
                  <span className='text_size text-gray-700 font-normal  ml-1 hover:text-blue-600'>
                    {product.ProductName}
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
                  <span className='text_size text-gray-700 font-normal  ml-1 hover:text-blue-600'>
                    {product.BrandName}
                  </span>
                </Link>
              </p>
            </div>
            <div className=' flex justify-start'>
              <span className='text_size  text-black  font-bold mr-1'>
                Ideal for:{' '}
              </span>
              <span className='text_size text-gray-700 font-normal'>
                {product.IdealFor}
              </span>
            </div>
            <div className=' flex justify-start'>
              <p className='text_size  text-black font-bold mr-1'>
                Available in:
                <span className='text_size ml-1 text-gray-700 font-normal '>
                  {product.AvailableOptions}
                </span>
              </p>
            </div>
            <div className=' flex justify-start'>
              <p className='text_size text-black font-bold mr-1'>
                {' '}
                Variant:
                <span className='text_size  ml-1 text-gray-700 font-normal'>
                  {product.AvailableVariant}
                </span>
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
              className='text-blue-500 text-sm'
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
    </div>
  );
};

export default CartHoverContainer;

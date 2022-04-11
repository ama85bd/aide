import React, { useEffect, useState } from 'react';
import './product.css';
import ProductCart from './ProductCart';
const ProductContainer = ({
  product,
  type,
  favorite,
  setFavorite,
  setOpenRemoveSnackbar,
  gridViewNumber,
}: any) => {
  // const user = getUserInfo();
  // const userId = user?.Id;
  // const [ scheduleShoppingListLoading, setScheduleShoppingListLoading ] = useState(true);
  // const [ customerScheduleShoppingList, setCustomerScheduleShoppingList ] = useState([]);
  // const [ scheduleShoppingListError, setScheduleShoppingListError ] = useState(null);
  // const cartItem = useSelector(state => state.cartReducer.cartItem)
  // const productDetails = useSelector((state) => state.productDetails)
  // const productInfo = productDetails.productInfo
  // const productCartIndex = findInArray(cartItem, product?.Id, 'Id')
  // const cartQuantity = cartItem[productCartIndex]?.cartQuantity

  // const fetchCustomerShoppingList = async () => {
  //     const myData = {
  //         CustomerId: userId
  //     }
  //     try {
  //         setScheduleShoppingListLoading(true);
  //         const res = await getMyShoppingList(myData);

  //         setCustomerScheduleShoppingList(res.data.OBJ);
  //         setScheduleShoppingListLoading(false);
  //     } catch (error) {
  //         setScheduleShoppingListLoading(false);
  //         const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;
  //         setScheduleShoppingListError(errorMessage);
  //     }
  // }

  // useEffect(() => {
  //     fetchCustomerShoppingList();
  // }, []);

  return (
    <>
      <div className='ml-2 flex flex-wrap mt-3'>
        {/* Product Cart */}
        {product && (
          <ProductCart
            product={product}
            type={type}
            key={product.Id}
            // cartQuantity={cartQuantity}
            favorite={favorite}
            gridViewNumber={gridViewNumber}
            setFavorite={setFavorite}
            setOpenRemoveSnackbar={setOpenRemoveSnackbar}
            // scheduleShoppingListLoading={scheduleShoppingListLoading}
            // customerScheduleShoppingList={customerScheduleShoppingList}
            // scheduleShoppingListError={scheduleShoppingListError}
          />
        )}
      </div>
    </>
  );
};

export default React.memo(ProductContainer);

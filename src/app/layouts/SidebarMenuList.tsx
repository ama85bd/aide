import React from 'react';
import './SidebarMenuList.css';
import {
  IoFunnelOutline,
  IoReorderFourOutline,
  IoCogOutline,
  IoBagHandleOutline,
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoAppsOutline,
  IoHeartOutline,
  IoCalendarOutline,
} from 'react-icons/io5';

interface ISidebarMenuList {
  handleCategoryExpand?: any;
  handleFilterExpand?: any;
  handleOfferZoneExpand?: any;
  handleShoppingBagExpand?: any;
  handleContactUsExpand?: any;
  handleLiveChatExpand?: any;
  handleMoreServiceExpand?: any;
  handleMyFavoriteExpand?: any;
  handleScheduleShoppingExpand?: any;
  handleProfileExpand?: any;
  menuActive?: any;
  sidebarRef?: any;
}

const SidebarMenuList = ({
  handleCategoryExpand,
  handleFilterExpand,
  handleOfferZoneExpand,
  handleShoppingBagExpand,
  handleContactUsExpand,
  handleLiveChatExpand,
  handleMoreServiceExpand,
  handleMyFavoriteExpand,
  handleScheduleShoppingExpand,
  handleProfileExpand,
  menuActive,
  sidebarRef,
}: ISidebarMenuList) => {
  return (
    <div className='sidebar ' ref={sidebarRef}>
      <button
        className={
          menuActive === 'category'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleCategoryExpand}
      >
        <IoReorderFourOutline
          className={
            menuActive === 'category' ? 'menuBar_item_inner_active' : ' icon '
          }
        />
        {/* <SortIcon className={menuActive === 'category' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'category'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          Category
        </span>
      </button>

      <button
        className={
          menuActive === 'filter'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleFilterExpand}
      >
        {/* <FilterAltOutlinedIcon className={menuActive === 'filter' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'filter'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          Filter
        </span>
      </button>

      <button
        className={
          menuActive === 'offer'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleOfferZoneExpand}
      >
        <i
          className={
            menuActive === 'offer'
              ? 'fas fa-bullhorn text-sm  menuBar_item_inner_active'
              : 'fas fa-bullhorn icon'
          }
        ></i>
        <span
          className={
            menuActive === 'offer' ? 'menuBar_item_inner_active' : ' icon_title'
          }
        >
          Offer Zone
        </span>
      </button>

      <button
        id='my-shopping'
        className={
          menuActive === 'shopping'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleShoppingBagExpand}
      >
        {/* {cartItem.length > 0 ?
                    <> <div class="cart_menu_item">
                        <p class={menuActive=== 'shopping' ?" text-white font-bold text-xs menuBar_item_inner_active":"order_count"}>
                            Items:{cartItem.length}
                        </p>
                        <p class={menuActive=== 'shopping' ?"text-white font-bold text-xs menuBar_item_inner_active":"order_amount"}>
                            ৳{calculateTotalOrderAmount(cartItem)}
                        </p>
                    </div>
                    </> :
                    <><ShoppingBagOutlinedIcon className={menuActive === 'shopping' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'shopping'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          Shopping Bag
        </span>
        {/* </>} */}
      </button>

      <button
        className={
          menuActive === 'contact'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleContactUsExpand}
      >
        {/* <WifiCalling3OutlinedIcon className={menuActive === 'contact' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'contact'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          Contact Now
        </span>
      </button>

      <button
        className={
          menuActive === 'chat'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleLiveChatExpand}
      >
        <i
          className={
            menuActive === 'chat'
              ? 'far fa-comment-dots text-xl  menuBar_item_inner_active'
              : 'far fa-comment-dots icon'
          }
        ></i>
        <span
          className={
            menuActive === 'chat' ? 'menuBar_item_inner_active' : ' icon_title'
          }
        >
          Live Chat
        </span>
      </button>

      <button
        className={
          menuActive === 'service'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleMoreServiceExpand}
      >
        {/* <GridViewOutlinedIcon className={menuActive === 'service' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'service'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          More Services
        </span>
      </button>
      {}
      <button
        className={
          menuActive === 'favorite'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleMyFavoriteExpand}
      >
        {/* <FavoriteBorderOutlinedIcon className={menuActive === 'favorite' ? "menuBar_item_inner_active" :" icon "}/> */}
        <span
          className={
            menuActive === 'favorite'
              ? 'menuBar_item_inner_active mx-1'
              : ' icon_title mx-1'
          }
        >
          My Favorite
        </span>
      </button>

      <button
        className={
          menuActive === 'schedule'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleScheduleShoppingExpand}
      >
        {/* <DateRangeOutlinedIcon className={menuActive === 'schedule' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'schedule'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          Schedule Shopping
        </span>
      </button>

      <button
        className={
          menuActive === 'profile'
            ? 'menuBar_item menuBar_item_active'
            : ' menuBar_item '
        }
        onClick={handleProfileExpand}
      >
        {/* <AccountBoxOutlinedIcon className={menuActive === 'profile' ? "menuBar_item_inner_active" : " icon "} /> */}
        <span
          className={
            menuActive === 'profile'
              ? 'menuBar_item_inner_active'
              : ' icon_title'
          }
        >
          Profile
        </span>
      </button>
    </div>
  );
};

export default SidebarMenuList;

import React, { useEffect, useState } from 'react';
import {
  faList,
  faFilterCircleDollar,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

function SideBarMenuList({
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
}: ISidebarMenuList) {
  //   // //modal controller
  //   const [modal, setModal] = useState(false);
  //   const toggle = () => {
  //     setModal(!modal);
  //   };
  //   // //click add new call back
  //   const onClickAddNew = () => {
  //     setModal(true);
  //   };

  return (
    <div className='sidebar__mainbox' ref={sidebarRef}>
      <button
        className={
          menuActive === 'category'
            ? 'sidebar--iconbtn  sidebar--iconbtn--active '
            : ' sidebar--iconbtn '
        }
        onClick={handleCategoryExpand}
      >
        {/* <div
            className={
              menuActive === 'category'
                ? 'sidebar__box  sidebar__box--active'
                : ' sidebar__box  '
            }
          > */}
        <IoReorderFourOutline className='sidebar__icon' />

        {/* <FontAwesomeIcon className='sidebar__icon' icon={faList} /> */}
        <p className='sidebar__text'>Category</p>
        {/* </div> */}
      </button>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoFunnelOutline
            style={{ marginTop: '.5rem', marginBottom: '.2rem' }}
            className='sidebar__icon'
          />

          <p className='sidebar__text'>Filter</p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoCogOutline
            style={{ fontSize: '3.3rem' }}
            className='sidebar__icon'
          />

          <p className='sidebar__text'>Offer Zone</p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoBagHandleOutline className='sidebar__icon' />
          <p className='sidebar__text'>Shopping</p>
          <p className='sidebar__text' style={{ marginTop: '-5px' }}>
            Bag
          </p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoCallOutline className='sidebar__icon' />

          <p className='sidebar__text'>Contact Us</p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoChatbubbleEllipsesOutline className='sidebar__icon' />

          <p className='sidebar__text'>Live Chat</p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoAppsOutline
            style={{ fontSize: '2.5rem' }}
            className='sidebar__icon'
          />
          <p className='sidebar__text'>More</p>
          <p className='sidebar__text' style={{ marginTop: '-5px' }}>
            Services
          </p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoHeartOutline
            style={{ fontSize: '2.7rem', marginBottom: '-.3rem' }}
            className='sidebar__icon'
          />
          <p className='sidebar__text'>My</p>
          <p className='sidebar__text' style={{ marginTop: '-5px' }}>
            Favourite
          </p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <IoCalendarOutline className='sidebar__icon' />

          <p className='sidebar__text'>Schedule</p>
          <p className='sidebar__text' style={{ marginTop: '-5px' }}>
            Shopping
          </p>
        </div>
      </a>
      <a href='#' className='sidebar--iconbtn'>
        <div className='sidebar__box'>
          <FontAwesomeIcon
            style={{ marginTop: '.5rem' }}
            className='sidebar__icon'
            icon={faIdCard}
          />

          <p className='sidebar__text'>Profile</p>
        </div>
      </a>
    </div>
  );
}

export default SideBarMenuList;

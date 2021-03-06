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
import { Card, CardBody, Collapse, Modal } from 'reactstrap';
import TopSearchBar from './TopSearchBar';

function SideBar() {
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
    <div className='sidebar'>
      <div className='sidebar__expand'></div>
      <div className='sidebar__mainbox'>
        <a className='sidebar--iconbtn'>
          <div className='sidebar__box  '>
            <IoReorderFourOutline className='sidebar__icon' />

            {/* <FontAwesomeIcon className='sidebar__icon' icon={faList} /> */}
            <p className='sidebar__text'>Category</p>
          </div>
        </a>
        <a href='#' className='sidebar--iconbtn'>
          <div className='sidebar__box'>
            <IoFunnelOutline className='sidebar__icon' />

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
              style={{ fontSize: '3.3rem' }}
              className='sidebar__icon'
            />

            <p className='sidebar__text'>My Favourite</p>
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
    </div>
  );
}

export default SideBar;

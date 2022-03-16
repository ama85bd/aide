import React, { useEffect, useState } from 'react';
import {
  faList,
  faFilterCircleDollar,
} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoFunnelOutline, IoReorderFourOutline } from 'react-icons/io5';

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__box'>
        <IoReorderFourOutline className='sidebar__icon' />

        {/* <FontAwesomeIcon className='sidebar__icon' icon={faList} /> */}
        <p className='sidebar__text'>Category</p>
      </div>
      <div className='sidebar__box'>
        <IoFunnelOutline className='sidebar__icon' />

        <p className='sidebar__text'>Filter</p>
      </div>
    </div>
  );
}

export default SideBar;

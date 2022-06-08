import { Link } from 'react-router-dom';
import React from 'react';
import shoppingSchedule from '../../../photos/shping-schedule-list.png';
import { IoLocation, IoCartOutline, IoEllipsisVertical } from 'react-icons/io5';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import {
  IoHeartOutline,
  IoHeart,
  IoCalendarOutline,
  IoGiftOutline,
} from 'react-icons/io5';
import { Button, Tooltip } from 'reactstrap';

const SideHoverIcons = ({
  product,
  setAddToCartClick,
  addToCart,
  type,
}: any) => {
  let availableIn = new Array();
  let availableVariant = new Array();
  availableIn = product.AvailableOptions.split(',');
  availableVariant = product.AvailableVariant.split(',');
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [tooltipOpenSchedule, setTooltipOpenSchedule] = React.useState(false);
  const [tooltipOpenGiftCart, setTooltipOpenGiftCart] = React.useState(false);

  return (
    <div className='sidehovericons__items' style={{ transition: 'all 1s' }}>
      <div className='flex justify-between items-center pt-2 pr-1 pl-3'>
        <div className='flex flex-col justify-center  '>
          <div className='flex items-center'>
            <button id='Tooltipfavourite'>
              <IoHeartOutline
                className='favourite-buttom'
                style={{
                  marginTop: '.5rem',
                  marginLeft: '.3rem',
                  marginBottom: '.5rem',
                  fontSize: '1.8rem',
                }}
              />
            </button>
            <Tooltip
              className='favourite-buttom-tooltip'
              isOpen={tooltipOpen}
              placement='left'
              target='Tooltipfavourite'
              toggle={() => {
                setTooltipOpen(!tooltipOpen);
              }}
            >
              Add Favourite
            </Tooltip>
          </div>
          <div className='flex items-center'>
            <button id='TooltipSchedule'>
              <IoCalendarOutline
                className=' hover-text-aide'
                style={{
                  marginLeft: '.3rem',
                  marginBottom: '.5rem',
                  fontSize: '1.8rem',
                }}
              />
            </button>
            <Tooltip
              className='favourite-buttom-tooltip'
              isOpen={tooltipOpenSchedule}
              placement='left'
              target='TooltipSchedule'
              toggle={() => {
                setTooltipOpenSchedule(!tooltipOpenSchedule);
              }}
            >
              Add Schedule Shopping
            </Tooltip>
          </div>
          <div className='flex items-center'>
            <button id='TooltipGiftCart'>
              <IoGiftOutline
                className=' hover-text-aide'
                style={{
                  marginLeft: '.3rem',
                  marginBottom: '.5rem',
                  fontSize: '1.8rem',
                }}
              />
            </button>
            <Tooltip
              className='favourite-buttom-tooltip'
              isOpen={tooltipOpenGiftCart}
              placement='left'
              target='TooltipGiftCart'
              toggle={() => {
                setTooltipOpenGiftCart(!tooltipOpenGiftCart);
              }}
            >
              Add Gift Cart
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideHoverIcons;

import React, { useEffect, useRef, useState } from 'react';
import Product from '../api/product';
import Category from './Category/Category';
import SidebarMenuList from './SideBarMenuList';

interface ISidebar {
  isFavourite?: any;
  setIsFavourite?: any;
  setOverlay?: any;
  filterExpand?: any;
  setFilterExpand?: any;
  filterFullPage?: any;
  setFilterFullPage?: any;
  allCat?: any;
  setAllCategories?: any;
  // getAllCat?: () => void;
}

function Sidebar({
  isFavourite,
  setIsFavourite,
  setOverlay,
  filterFullPage,
  setFilterFullPage,
  setAllCategories,
  allCat,
}: ISidebar) {
  const [categoryExpand, setCategoryExpand] = useState(false);
  const [filterExpand, setFilterExpand] = useState(false);
  const [offerZoneExpand, setOfferZoneExpand] = useState(false);
  const [shoppingBagExpand, setShoppingBagExpand] = useState(false);
  const [contactUsExpand, setContactUsExpand] = useState(false);
  const [liveChatExpand, setLiveChatExpand] = useState(false);
  const [moreServiceExpand, setMoreServiceExpand] = useState(false);
  const [myFavoriteExpand, setMyFavoriteExpand] = useState(false);
  const [scheduleShoppingExpand, setScheduleShoppingExpand] = useState(false);
  const [profileExpand, setProfileExpand] = useState(false);
  const [menuActive, setMenuActive] = useState('');
  const [showDisplay, setShowDisplay] = useState('none');
  const [showDisplayTwo, setShowDisplayTwo] = useState('none');
  const [showDisplayThree, setShowDisplayThree] = useState('none');
  const [allCategoriesLoading, setAllCategoriesLoading] = useState(false);
  const [selecter, setSelecter] = useState('Category');

  const sidebarRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);
  const shoppingBagRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const favoriteRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: any) {
    if (
      !sidebarRef.current?.contains(event.target) &&
      !categoryRef.current?.contains(event.target) &&
      !filterRef.current?.contains(event.target) &&
      !offerRef.current?.contains(event.target) &&
      !shoppingBagRef.current?.contains(event.target) &&
      !contactRef.current?.contains(event.target) &&
      !chatRef.current?.contains(event.target) &&
      !serviceRef.current?.contains(event.target) &&
      !favoriteRef.current?.contains(event.target) &&
      !scheduleRef.current?.contains(event.target) &&
      !profileRef.current?.contains(event.target)
    ) {
      setCategoryExpand(false);
      setFilterExpand(false);
      setOfferZoneExpand(false);
      setLiveChatExpand(false);
      setContactUsExpand(false);
      setMoreServiceExpand(false);
      setShoppingBagExpand(false);
      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
      setOverlay(false);
      setMenuActive('');
      setAllCategories('');
      setShowDisplay('none');
      setShowDisplayTwo('none');
      setShowDisplayThree('none');
      setSelecter('Category');
    }
  }
  document.addEventListener('mousedown', handleClickOutside);

  const handleCategoryExpand = () => {
    if (categoryExpand) {
      setCategoryExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setTimeout(() => {
        setOverlay(true);
      }, 400);
      // setShowDisplay('block');
      setMenuActive('category');
      setCategoryExpand(true);
      setFilterExpand(false);
      setOfferZoneExpand(false);
      setLiveChatExpand(false);
      setContactUsExpand(false);
      setMoreServiceExpand(false);
      setShoppingBagExpand(false);

      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
    }
  };
  const handleFilterExpand = () => {
    if (filterExpand) {
      setFilterExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('filter');
      setFilterExpand(true);
      setCategoryExpand(false);
      setOfferZoneExpand(false);
      setLiveChatExpand(false);
      setContactUsExpand(false);
      setMoreServiceExpand(false);
      setShoppingBagExpand(false);
      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
    }
  };
  const handleOfferZoneExpand = () => {
    if (offerZoneExpand) {
      setOfferZoneExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('offer');
      setOfferZoneExpand(true);
      setFilterExpand(false);
      setCategoryExpand(false);
      setLiveChatExpand(false);
      setContactUsExpand(false);
      setMoreServiceExpand(false);
      setShoppingBagExpand(false);
      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
    }
  };
  const handleShoppingBagExpand = () => {
    if (shoppingBagExpand) {
      setShoppingBagExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('shopping');
      setShoppingBagExpand(true);
      setOfferZoneExpand(false);
      setFilterExpand(false);
      setCategoryExpand(false);
      setContactUsExpand(false);
      setLiveChatExpand(false);
      setMoreServiceExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
      setMyFavoriteExpand(false);
    }
  };
  const handleContactUsExpand = () => {
    if (contactUsExpand) {
      setContactUsExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('contact');
      setContactUsExpand(true);
      setShoppingBagExpand(false);
      setOfferZoneExpand(false);
      setFilterExpand(false);
      setCategoryExpand(false);
      setLiveChatExpand(false);
      setMoreServiceExpand(false);
      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
    }
  };
  const handleLiveChatExpand = () => {
    if (liveChatExpand) {
      setLiveChatExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('chat');
      setLiveChatExpand(true);
      setOfferZoneExpand(false);
      setFilterExpand(false);
      setCategoryExpand(false);
      setContactUsExpand(false);
      setMoreServiceExpand(false);
      setShoppingBagExpand(false);
      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
    }
  };
  const handleMoreServiceExpand = () => {
    if (moreServiceExpand) {
      setMoreServiceExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('service');
      setMoreServiceExpand(true);
      setOfferZoneExpand(false);
      setFilterExpand(false);
      setCategoryExpand(false);
      setContactUsExpand(false);
      setLiveChatExpand(false);
      setShoppingBagExpand(false);
      setMyFavoriteExpand(false);
      setScheduleShoppingExpand(false);
      setProfileExpand(false);
    }
  };
  const handleMyFavoriteExpand = () => {
    if (myFavoriteExpand) {
      setMyFavoriteExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('favorite');
      setMyFavoriteExpand(true);
      setScheduleShoppingExpand(false);
      setMoreServiceExpand(false);
      setOfferZoneExpand(false);
      setContactUsExpand(false);
      setFilterExpand(false);
      setCategoryExpand(false);
      setLiveChatExpand(false);
      setShoppingBagExpand(false);
      setProfileExpand(false);
    }
  };
  const handleScheduleShoppingExpand = () => {
    if (scheduleShoppingExpand) {
      setScheduleShoppingExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
      setMenuActive('schedule');
      setScheduleShoppingExpand(true);
      setMoreServiceExpand(false);
      setOfferZoneExpand(false);
      setFilterExpand(false);
      setCategoryExpand(false);
      setContactUsExpand(false);
      setLiveChatExpand(false);
      setShoppingBagExpand(false);
      setMyFavoriteExpand(false);
      setProfileExpand(false);
    }
  };
  const handleProfileExpand = () => {
    if (profileExpand) {
      setProfileExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
    }
  };

  return (
    <div
      className={
        categoryExpand ||
        filterExpand ||
        offerZoneExpand ||
        shoppingBagExpand ||
        contactUsExpand ||
        liveChatExpand ||
        moreServiceExpand ||
        myFavoriteExpand ||
        scheduleShoppingExpand ||
        profileExpand
          ? 'sidebar border-transparent'
          : 'sidebar '
      }
    >
      <SidebarMenuList
        handleCategoryExpand={handleCategoryExpand}
        handleFilterExpand={handleFilterExpand}
        handleOfferZoneExpand={handleOfferZoneExpand}
        handleShoppingBagExpand={handleShoppingBagExpand}
        handleContactUsExpand={handleContactUsExpand}
        handleLiveChatExpand={handleLiveChatExpand}
        handleMoreServiceExpand={handleMoreServiceExpand}
        handleMyFavoriteExpand={handleMyFavoriteExpand}
        handleScheduleShoppingExpand={handleScheduleShoppingExpand}
        handleProfileExpand={handleProfileExpand}
        menuActive={menuActive}
        sidebarRef={sidebarRef}
        setShowDisplay={setShowDisplay}
        setShowDisplayTwo={setShowDisplayTwo}
        setShowDisplayThree={setShowDisplayThree}
      />

      <Category
        categoryExpand={categoryExpand}
        handleCategoryExpand={handleCategoryExpand}
        categoryRef={categoryRef}
        allCat={allCat}
        allCategoriesLoading={allCategoriesLoading}
        showDisplay={showDisplay}
        setShowDisplay={setShowDisplay}
        showDisplayTwo={showDisplayTwo}
        setShowDisplayTwo={setShowDisplayTwo}
        showDisplayThree={showDisplayThree}
        setShowDisplayThree={setShowDisplayThree}
        selecter={selecter}
        setSelecter={setSelecter}
        setAllCategories={setAllCategories}
      />
    </div>
  );
}

export default Sidebar;

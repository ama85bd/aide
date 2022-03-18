import React, { useEffect, useRef, useState } from 'react';
import Category from './Category/Category';
// import Filter from './Filter/Filter';
// import OfferZone from './OfferZone/OfferZone';
// import LiveChat from './LiveChat/LiveChat';
// import MoreService from './MoreService/MoreService';
// import ShoppingBag from './ShoppingBag/ShoppingBag'
import SidebarMenuList from './SidebarMenuList';
// import MyFavorite from './MyFavorite/MyFavorite';
// import ScheduleShoppingRendering from './ScheduleShopping/ScheduleShoppingRendering';
// import ContactUs from './ContactUs/ContactUs';
// import Profile from './Profile/Profile';
import './Sidebar.css';

interface ISidebar {
  isFavourite?: boolean;
  setIsFavourite?: boolean;
  setOverlay?: any;
  filterFullPage?: any;
  setFilterFullPage?: any;
}

function Sidebar2({
  isFavourite,
  setIsFavourite,
  setOverlay,
  filterFullPage,
  setFilterFullPage,
}: ISidebar) {
  const [profileMenu, setProfileMenu] = useState('personal');

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
  // const isShoppingOpen = clickEventReducer.isShoppingOpen
  // const isMyFavOpen = clickEventReducer.isMyFavOpen
  // const isShoppingBagOpen = clickEventReducer.isShoppingBagOpen
  // const registerInfoStorage = localStorage.getItem('UserRegistration') ? JSON.parse(localStorage.getItem('UserRegistration')) : null
  // const loginInfoStorage = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : null
  // const registerUserInfo = useSelector((state) => state.registerUserInfo)
  // const userRegister = registerUserInfo.userRegister
  // const loginUserInfo = useSelector((state) => state.loginUserInfo)
  // const userLogin = loginUserInfo.userLogin
  // const modalReducer = useSelector((state) => state.modalReducer)
  // const modalStatus = modalReducer.openModal
  // const userInfo = (userRegister ? userRegister.OBJ : null) || (userLogin) || (loginInfoStorage) || (registerInfoStorage ? registerInfoStorage.OBJ : null)

  // const [closeBtn, setCloseBtn] = useState(true);
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
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      categoryRef.current &&
      !categoryRef.current.contains(event.target) &&
      filterRef.current &&
      !filterRef.current.contains(event.target) &&
      offerRef.current &&
      !offerRef.current.contains(event.target) &&
      shoppingBagRef.current &&
      !shoppingBagRef.current.contains(event.target) &&
      contactRef.current &&
      !contactRef.current.contains(event.target) &&
      chatRef.current &&
      !chatRef.current.contains(event.target) &&
      serviceRef.current &&
      !serviceRef.current.contains(event.target) &&
      favoriteRef.current &&
      !favoriteRef.current.contains(event.target) &&
      scheduleRef.current &&
      !scheduleRef.current.contains(event.target) &&
      profileRef.current &&
      !profileRef.current.contains(event.target)
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
    }
  }
  document.addEventListener('mousedown', handleClickOutside);

  const handleCategoryExpand = () => {
    if (categoryExpand) {
      setCategoryExpand(false);
      setOverlay(false);
      setMenuActive('');
    } else {
      setOverlay(true);
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
      // if (userInfo) {
      //     setOverlay(true)
      //     setMenuActive('profile')
      //     setProfileExpand(true)
      //     setScheduleShoppingExpand(false)
      //     setMoreServiceExpand(false)
      //     setOfferZoneExpand(false)
      //     setFilterExpand(false)
      //     setCategoryExpand(false)
      //     setContactUsExpand(false)
      //     setLiveChatExpand(false)
      //     setShoppingBagExpand(false)
      //     setMyFavoriteExpand(false)
      // } else {
      //     if (modalStatus) {
      //         dispatch(setOpenModal(false))
      //     } else {
      //         dispatch(setOpenModal(true))
      //     }
      // }
    }
  };
  //console.log(isShoppingOpen)

  // useEffect(() => {

  //     // isShoppingOpen && handleScheduleShoppingExpand()
  //     // isMyFavOpen && handleMyFavoriteExpand()
  //     // isShoppingBagOpen && handleShoppingBagExpand()

  // }, [isShoppingOpen, isMyFavOpen, isShoppingBagOpen])

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
          ? 'menuBar_container border-transparent shadow-xl '
          : 'menuBar_container shadow-xl '
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
      />

      <Category
        categoryExpand={categoryExpand}
        handleCategoryExpand={handleCategoryExpand}
        categoryRef={categoryRef}
      />
      {/* <Filter
                filterExpand={filterExpand}
                handleFilterExpand={handleFilterExpand}
                filterRef={filterRef}
                setFilterFullPage={setFilterFullPage}
                filterFullPage={filterFullPage}
            />
            <OfferZone
                offerZoneExpand={offerZoneExpand}
                handleOfferZoneExpand={handleOfferZoneExpand}
                offerRef={offerRef}
            />
            <ShoppingBag
                shoppingBagExpand={shoppingBagExpand}
                handleShoppingBagExpand={handleShoppingBagExpand}
                shoppingBagRef={shoppingBagRef}
            />
            <ContactUs
                contactUsExpand={contactUsExpand}
                handleContactUsExpand={handleContactUsExpand}
                contactRef={contactRef}
            />
            <LiveChat
                liveChatExpand={liveChatExpand}
                handleLiveChatExpand={handleLiveChatExpand}
                chatRef={chatRef}
            />
            <MoreService
                moreServiceExpand={moreServiceExpand}
                handleMoreServiceExpand={handleMoreServiceExpand}
                serviceRef={serviceRef}
            />
            <MyFavorite
                myFavoriteExpand={myFavoriteExpand}
                handleMyFavoriteExpand={handleMyFavoriteExpand}
                isFavourite={isFavourite}
                setIsFavourite={setIsFavourite}
                favoriteRef={favoriteRef}
            />
            <ScheduleShoppingRendering
                scheduleShoppingExpand={scheduleShoppingExpand}
                handleScheduleShoppingExpand={handleScheduleShoppingExpand}
                scheduleRef={scheduleRef}
            />
            <Profile
                profileExpand={profileExpand}
                handleProfileExpand={handleProfileExpand}
                profileRef={profileRef}
                profileMenu={profileMenu}
                setProfileMenu={setProfileMenu}
            /> */}
    </div>
  );
}

export default Sidebar2;

import React, { useContext, useEffect, useRef, useState } from 'react';
import Product from '../api/product';
import { RootStoreContext } from '../stores/rootStore';
import Sidebar from './SideBar';
import SideBarMenuList from './SideBarMenuList';
import TopSearchBar from './TopSearchBar';

function Layout() {
  const [overlay, setOverlay] = useState(false);
  const [allCat, setAllCategories] = useState<any>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayScreen = overlay ? 'h-screen overflow-y-hidden pr-4' : '';

  const rootStore = useContext(RootStoreContext);
  const { getCommonToken } = rootStore.userStore;
  const { allCategories, getAllCat } = rootStore.commonStore;
  console.log('allCategories', allCategories);

  // useEffect(() => {
  //   setAllCategories('');
  // }, [!overlay]);
  useEffect(() => {
    setAllCategories(allCategories);
    getAllCat();
  }, [overlay]);
  useEffect(() => {
    setAllCategories(allCategories);
    getAllCat();
    getCommonToken();
  }, []);
  // function handleClickOutside(event: any) {
  //   if (!overlayRef.current?.contains(event.target)) {
  //     setAllCategories('');
  //   }
  // }
  // document.addEventListener('mousedown', handleClickOutside);
  return (
    <div className={`mainBody ${overlayScreen}`}>
      <Sidebar
        setOverlay={setOverlay}
        allCat={allCat}
        setAllCategories={setAllCategories}
      />
      <div className='page_container'>
        <TopSearchBar />
      </div>
      <div style={{ marginTop: '20rem' }}>{/* <h1>HIIII</h1> */}</div>
      {overlay ? (
        <div ref={overlayRef} className='overlay_on_home_screen'></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Layout;

import React, { useContext, useEffect, useRef, useState } from 'react';
import AllProducts from '../../features/products/AllProducts';
import FeatureSlider from '../../features/slideCarousel/FeatureSlider';
import SlideCarousel from '../../features/slideCarousel/SlideCarousel';
import TopCategory from '../../features/slideCarousel/TopCategory';
import Product from '../api/product';
import { RootStoreContext } from '../stores/rootStore';
import RoutesPages from './RoutesPages';
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

  useEffect(() => {
    setAllCategories(allCategories);
    getAllCat();
  }, [overlay]);
  useEffect(() => {
    setAllCategories(allCategories);
    getAllCat();
    getCommonToken();
  }, []);
  return (
    <div className={`mainBody ${overlayScreen}`}>
      <Sidebar
        setOverlay={setOverlay}
        allCat={allCat}
        setAllCategories={setAllCategories}
      />
      <TopSearchBar />
      <div className='page_container'>
        <RoutesPages />
      </div>
      {overlay ? (
        <div ref={overlayRef} className='overlay_on_home_screen'></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Layout;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import SideBarMenuList from './SideBarMenuList';
import TopSearchBar from './TopSearchBar';

function Layout() {
  const [overlay, setOverlay] = useState(false);
  const overlayScreen = overlay ? 'h-screen overflow-y-hidden pr-4' : '';
  return (
    <div className={`mainBody ${overlayScreen}`}>
      <Sidebar setOverlay={setOverlay} />
      <div className='page_container'>
        <TopSearchBar />
      </div>
      <div style={{ marginTop: '20rem' }}>
        <h1>HIIII</h1>
      </div>
      {overlay ? <div className='overlay_on_home_screen'></div> : <div></div>}
    </div>
  );
}

export default Layout;

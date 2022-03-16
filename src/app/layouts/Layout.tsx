import React from 'react';
import SideBar from './SideBar';
import TopSearchBar from './TopSearchBar';

function Layout() {
  return (
    <div className='row mainBody'>
      <div className='col-1-of-9 mainBody__left'>
        <SideBar />
      </div>
      <div className='col-8-of-9 mainBody__right'>
        <TopSearchBar />
      </div>
    </div>
  );
}

export default Layout;

import React, { useState } from 'react';
import './App.css';
import Sidebar from '../components/Sidebar/Sidebar';
// import 'animate.css';
import { useEffect } from 'react';
// import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const [filterExpand, setFilterExpand] = useState(false);

  //   const authorizationInfoStorage = localStorage.getItem('Authorization') ? JSON.parse(localStorage.getItem('Authorization')) : null

  //const userAuthorizationInfoStorage = localStorage.getItem('UserAuthorization') ? JSON.parse(localStorage.getItem('UserAuthorization')) : null

  //console.log(authorizationInfoStorage['.expires']< Date())

  //   useEffect(() => {

  //     var currentTime = new Date()
  //     var expireTime = new Date(authorizationInfoStorage && authorizationInfoStorage['.expires'])

  //     var currentTimeSecond = Math.floor(currentTime.getTime()/1000)
  //     var expiretimeSecond = Math.floor(expireTime.getTime()/1000)

  //     if (!authorizationInfoStorage || (authorizationInfoStorage && (expiretimeSecond < currentTimeSecond))) {
  //       dispatch(authorize())
  //     }

  //   }, [dispatch,])

  //   useEffect(() => {

  //   }, [authorization, userAuthorization])
  //   //for auto reloading

  //   const registerUserInfo = useSelector((state) => state.registerUserInfo)
  //   const registerLoading = registerUserInfo.loading
  //   const userRegister = registerUserInfo.userRegister
  //   const registerError = registerUserInfo.error

  //   const loginUserInfo = useSelector((state) => state.loginUserInfo)
  //   const loginLoading = loginUserInfo.loading
  //   const userLogin = loginUserInfo.userLogin
  //   const loginError = loginUserInfo.error

  //   const userAuthorizationInfoStorage = localStorage.getItem('UserAuthorization') ? JSON.parse(localStorage.getItem('UserAuthorization')) : null
  //   const registerInfoStorage = localStorage.getItem('UserRegistration') ? JSON.parse(localStorage.getItem('UserRegistration')) : null
  //   const loginInfoStorage = localStorage.getItem('UserLogin') ? JSON.parse(localStorage.getItem('UserLogin')) : null

  //   useEffect(() => {

  //     var currentTime = new Date()
  //     var expireTime = new Date(userAuthorizationInfoStorage && userAuthorizationInfoStorage['.expires'])

  //     var currentTimeSecond = Math.floor(currentTime.getTime()/1000)
  //     var expiretimeSecond = Math.floor(expireTime.getTime()/1000)

  //     if ((userRegister || userLogin) ||  (userAuthorizationInfoStorage && (expiretimeSecond < currentTimeSecond)) && !userAuthorizationInfoStorage) {
  //       //handleCloseModal()

  //       dispatch(authorizeRegisteredUser())

  //     }

  //   }, [userRegister, userLogin, dispatch])

  const [overlay, setOverlay] = useState(false);
  const [filterFullPage, setFilterFullPage] = useState(false);

  // useEffect(() => {
  //   if(!userAuthorizationInfoStorage){
  //     dispatch(authorizeRegisteredUser())
  //   }

  // }, [dispatch,])

  // console.log("m")
  const overlayScreen = overlay ? 'h-screen overflow-y-hidden pr-4' : '';

  return (
    <div className={`App ${overlayScreen} `}>
      <Sidebar
        filterExpand={filterExpand}
        setFilterExpand={setFilterExpand}
        setOverlay={setOverlay}
        setFilterFullPage={setFilterFullPage}
        filterFullPage={filterFullPage}
      />

      <div className='main_container '>
        <div>
          {/* <Header
            setFilterFullPage={setFilterFullPage}
            filterFullPage={filterFullPage}
          /> */}
        </div>

        <div className='my_container'>
          {/* <RoutesContainer
            filterExpand={filterExpand}
            setFilterExpand={setFilterExpand}
          /> */}
        </div>
        {/* <div>
          <Footer/>
        </div> */}
      </div>
      {overlay ? <div className='overlay_on_home_screen'></div> : <div></div>}
    </div>
  );
}

export default App;

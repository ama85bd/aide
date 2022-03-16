import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './app/sass/styles.css';
import './app/lineaIcon/icon-font.css';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './app/layouts/App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '@fontsource/lato';
import ScrollToTop from './app/layouts/ScrollToTop';
import CustomizedAlert from './app/container/CustomizedAlert';

const { API_URL } = process.env;
export const history = createBrowserHistory({ basename: API_URL });

//global dismissible alert message
//require AlertContainer rendered in the body first
export const showDismissAlert = (props: { type: string; message: string }) => {
  //TODO: impl custom id to enable multiple container in a page
  //always show in the first matched container
  let alertContainer = document.getElementsByClassName(
    'dismiss-alert-container'
  )[0];
  let title = 'SUCCESS';
  switch (props.type) {
    case 'danger':
      title = 'ERROR';
      break;
    default:
      title = props.type.toUpperCase();
      break;
  }
  const callback = () => {
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  };
  //we need an unique key for the component to be rendered at the next time
  let uniqueKey = new Date().toJSON();
  if (alertContainer)
    ReactDOM.render(
      <CustomizedAlert
        color={props.type}
        key={uniqueKey}
        fade={false}
        onDismissCallback={callback}
      >
        {`${title}: ${props.message}`}
      </CustomizedAlert>,
      alertContainer
    );
};

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
      <ToastContainer
        autoClose={3000}
        newestOnTop
        pauseOnFocusLoss={false}
        style={{ opacity: '0.95' }}
      />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

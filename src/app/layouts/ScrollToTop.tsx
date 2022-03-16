import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

// reset scroll to top when navigated to another url (route changed)
const ScrollToTop = ({ children, location: { pathname } }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);

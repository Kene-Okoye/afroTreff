import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useAnnounceActivePage = () => {
  /* Create reference for the element to be used to announce the active page
   * to assistive technologies like screen readers.
   */
  const activePageAnnouncerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (activePageAnnouncerRef.current) {
      activePageAnnouncerRef.current.focus();
    }

    /* Dynamically add a text content to the element that announces
     * the active page. Also update the HTML document title accordignly.
     */

    if (activePageAnnouncerRef.current && location.pathname === '/') {
      activePageAnnouncerRef.current.textContent = 'home page';
    }
    if (activePageAnnouncerRef.current && location.pathname !== '/') {
      activePageAnnouncerRef.current.textContent =
        'Navigated to the ' + location.pathname.split('/')[1] + ' page';

      document.title = `${location.pathname.split('/')[1]} | Afrotreff`;
    }
  }, [location.pathname]);

  return { activePageAnnouncerRef };
};

export default useAnnounceActivePage;

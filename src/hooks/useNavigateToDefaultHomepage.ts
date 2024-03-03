import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import paths from '@/routes/paths';

function useNavigateToDefaultHomepage() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/') {
      navigate(paths.en.HOME);
    }
  }, [location, navigate]);
}

export default useNavigateToDefaultHomepage;

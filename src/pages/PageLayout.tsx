import { Outlet } from 'react-router-dom';

import TheHeader from '@/components/header/TheHeader';
import TheFooter from '@/components/footer/TheFooter';

const PageLayout = () => {
  return (
    <>
      <TheHeader />
      <main id="main-content" className="inert-target">
        <Outlet />
      </main>
      <TheFooter />
    </>
  );
};

export default PageLayout;

import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

import PageLoading from '@/pages/pageLoading/PageLoading';
import SkipNavLinkProvider from '@/contexts/skipNavLinkContext/SkipNavLinkContext';

const TheHeader = lazy(() => import('@/components/header/TheHeader'));
const TheFooter = lazy(() => import('@/components/footer/TheFooter'));

const PageLayout = () => {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <SkipNavLinkProvider>
          <TheHeader />
          <main id="main-content" className="inert-target">
            <Outlet />
          </main>
          <TheFooter />
        </SkipNavLinkProvider>
      </Suspense>
    </>
  );
};

export default PageLayout;

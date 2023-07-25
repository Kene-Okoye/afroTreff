import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import paths from '@/routes/paths';
import lazyLoadElementImports from '@/pages/lazyLoadElementImports';

import PageLayout from '@/pages/PageLayout';
import PageNotFound from '@/pages/pageNotFound/PageNotFound';
import PageLoading from '@/pages/PageLoading';

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <Component />
  </Suspense>
);

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.HOME} element={<PageLayout />}>
          <Route index element={getRouteElement(lazyLoadElementImports.Home)} />
          <Route
            path={paths.VISION_AND_TEAM}
            element={getRouteElement(lazyLoadElementImports.Vision_and_team)}
          />
          <Route path={paths.FAQ} element={getRouteElement(lazyLoadElementImports.Faq)} />
          <Route
            path={paths.ACTIVITIES}
            element={getRouteElement(lazyLoadElementImports.Activities)}
          />
          <Route path={paths.BLOG} element={getRouteElement(lazyLoadElementImports.Blog)} />
          <Route path={paths.GALLERY} element={getRouteElement(lazyLoadElementImports.Gallery)} />

          <Route path={paths.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';

import paths from '@/routes/paths';
import lazyLoadedElementImports from '@/pages/lazyLoadedElementImports';

import PageLayout from '@/pages/PageLayout';
import PageNotFound from '@/pages/pageNotFound/PageNotFound';

const getRouteElement = (Component: React.ElementType): React.ReactNode => <Component />;

function App() {
  return (
    <>
      <Routes>
        <Route path={paths.HOME} element={<PageLayout />}>
          <Route index element={getRouteElement(lazyLoadedElementImports.Home)} />
          <Route
            path={paths.VISION_AND_TEAM}
            element={getRouteElement(lazyLoadedElementImports.Vision_and_team)}
          />
          <Route path={paths.FAQ} element={getRouteElement(lazyLoadedElementImports.Faq)} />
          <Route
            path={paths.ACTIVITIES}
            element={getRouteElement(lazyLoadedElementImports.Activities)}
          />
          <Route path={paths.BLOG} element={getRouteElement(lazyLoadedElementImports.Blog)} />
          <Route path={paths.GALLERY} element={getRouteElement(lazyLoadedElementImports.Gallery)} />
          <Route path={paths.CONTACT} element={getRouteElement(lazyLoadedElementImports.Contact)} />
          <Route
            path={paths.SUPPORT}
            element={getRouteElement(lazyLoadedElementImports.ComingSoon)}
          />
          <Route path={paths.PAGE_NOT_FOUND} element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';

import LanguageSelectContext from '@/contexts/languageSelectContext/LanguageSelectContext';
import useNavigateToDefaultHomepage from '@/hooks/useNavigateToDefaultHomepage';

import PageLayout from '@/pages/PageLayout';
import lazyLoadedElementImports from '@/pages/lazyLoadedElementImports';
import PageNotFound from '@/pages/pageNotFound/PageNotFound';

const getRouteElement = (Component: React.ElementType): React.ReactNode => <Component />;

function App() {
  const languageSelectContext = useContext(LanguageSelectContext);
  const currentLanguage: LanguageType =
    (languageSelectContext?.selectedLanguage as LanguageType) || 'en';

  useNavigateToDefaultHomepage();

  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          {/* --------------------------------------------------------------------------
           *                          EN - ENGLISH ROUTES
           * ------------------------------------------------------------------------ */}
          <Route path={paths.en.HOME}>
            <Route index element={getRouteElement(lazyLoadedElementImports.Home)} />
            <Route
              path={paths.en.VISION_AND_TEAM}
              element={getRouteElement(lazyLoadedElementImports.Vision_and_team)}
            />
            <Route
              path={paths.en.ACTIVITIES}
              element={getRouteElement(lazyLoadedElementImports.Activities)}
            />
            <Route path={paths.en.BLOG}>
              <Route index element={getRouteElement(lazyLoadedElementImports.Blog)} />
              <Route path=":blogId" element={getRouteElement(lazyLoadedElementImports.BlogPost)} />
            </Route>
            <Route path={paths.en.ALBUMS}>
              <Route index element={getRouteElement(lazyLoadedElementImports.Album)} />
              <Route
                path=":meetUpMonth"
                element={getRouteElement(lazyLoadedElementImports.PhotoGallery)}
              />
            </Route>
            <Route
              path={paths.en.SUPPORT_US}
              element={getRouteElement(lazyLoadedElementImports.Support)}
            />
            <Route path={paths.en.FAQ} element={getRouteElement(lazyLoadedElementImports.Faq)} />

            <Route
              path={paths.en.REGISTER}
              element={getRouteElement(lazyLoadedElementImports.Register)}
            />
            <Route
              path={paths.en.THANKYOU}
              element={getRouteElement(lazyLoadedElementImports.Thank_you)}
            />
            <Route
              path={paths.en.CONTACT}
              element={getRouteElement(lazyLoadedElementImports.Contact)}
            />
            <Route
              path={paths.en.IMPRINT}
              element={getRouteElement(lazyLoadedElementImports.ComingSoon)}
            />
            <Route
              path={paths.en.PRIVACY}
              element={getRouteElement(lazyLoadedElementImports.ComingSoon)}
            />
            <Route path={paths.en.PAGE_NOT_FOUND} element={<PageNotFound />} />
          </Route>

          {/* --------------------------------------------------------------------------
           *                          DE - GERMAN ROUTES
           * ------------------------------------------------------------------------ */}
          <Route path={paths.de.HOME}>
            <Route index element={getRouteElement(lazyLoadedElementImports.Home)} />
            <Route
              path={paths.de.VISION_AND_TEAM}
              element={getRouteElement(lazyLoadedElementImports.Vision_and_team)}
            />
            <Route
              path={paths.de.ACTIVITIES}
              element={getRouteElement(lazyLoadedElementImports.Activities)}
            />
            <Route path={paths.de.BLOG}>
              <Route index element={getRouteElement(lazyLoadedElementImports.Blog)} />
              <Route path=":blogId" element={getRouteElement(lazyLoadedElementImports.BlogPost)} />
            </Route>
            <Route path={paths.de.ALBUMS}>
              <Route index element={getRouteElement(lazyLoadedElementImports.Album)} />
              <Route
                path=":meetUpMonth"
                element={getRouteElement(lazyLoadedElementImports.PhotoGallery)}
              />
            </Route>
            <Route
              path={paths.de.SUPPORT_US}
              element={getRouteElement(lazyLoadedElementImports.Support)}
            />
            <Route path={paths.de.FAQ} element={getRouteElement(lazyLoadedElementImports.Faq)} />

            <Route
              path={paths.de.REGISTER}
              element={getRouteElement(lazyLoadedElementImports.Register)}
            />
            <Route
              path={paths.de.THANKYOU}
              element={getRouteElement(lazyLoadedElementImports.Thank_you)}
            />
            <Route
              path={paths.de.CONTACT}
              element={getRouteElement(lazyLoadedElementImports.Contact)}
            />
            <Route
              path={paths.de.IMPRINT}
              element={getRouteElement(lazyLoadedElementImports.ComingSoon)}
            />
            <Route
              path={paths.de.PRIVACY}
              element={getRouteElement(lazyLoadedElementImports.ComingSoon)}
            />
            <Route path={paths.de.PAGE_NOT_FOUND} element={<PageNotFound />} />
          </Route>

          <Route
            path="*"
            element={
              <>
                <Navigate to={`/${currentLanguage}/${paths[currentLanguage].PAGE_NOT_FOUND}`} />
                <PageNotFound />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { lazy } from 'react';

const lazyLoadElementImports = {
  Home: lazy(() => import('@/pages/home/Home')),
  Vision_and_team: lazy(() => import('@/pages/visionAndTeam/VisionAndTeam')),
  Activities: lazy(() => import('@/pages/activities/Activities')),
  Blog: lazy(() => import('@/pages/blog/Blog')),
  Gallery: lazy(() => import('@/pages/gallery/Gallery')),
  Faq: lazy(() => import('@/pages/faq/Faq')),
};

export default lazyLoadElementImports;

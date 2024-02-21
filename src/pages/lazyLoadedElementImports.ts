import { lazy } from 'react';

const lazyLoadedElementImports = {
  Home: lazy(() => import('@/pages/home/Home')),
  Vision_and_team: lazy(() => import('@/pages/visionAndTeam/VisionAndTeam')),
  Activities: lazy(() => import('@/pages/activities/Activities')),
  Support: lazy(() => import('@/pages/support/Support')),
  Blog: lazy(() => import('@/pages/blog/Blog')),
  BlogPost: lazy(() => import('@/pages/blog/blogPost/BlogPost')),
  Album: lazy(() => import('@/pages/album/Album')),
  PhotoGallery: lazy(() => import('@/pages/album/photoGallery/PhotoGallery')),
  Faq: lazy(() => import('@/pages/faq/Faq')),
  Contact: lazy(() => import('@/pages/contact/Contact')),
  Thank_you: lazy(() => import('@/pages/contact/ThankYou')),
  ComingSoon: lazy(() => import('@/pages/comingSoon/ComingSoon')),
  Register: lazy(() => import('@/pages/register/Register')),
};

export default lazyLoadedElementImports;

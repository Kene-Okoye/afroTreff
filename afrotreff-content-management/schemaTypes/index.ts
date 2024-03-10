import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import hero from './heroSection'
import smallLargeHeading from './smallLargeHeading'

// Schemas for The Tnidividual Pages
import homePage from './pages/homePage'
import visionAndTeamPage from './pages/visionAndTeamPage'
import teamBio from './pages/teamBio'
import activitiesPage from './pages/activitiesPage'
import FAQPage from './pages/FAQPage'
import getInvolvedPage from './pages/getInvolvedPage'
import albumsPage from './pages/albumsPage'
import yearlyAlbum from './pages/yearlyAlbum'
import countryFlag from './countryFlag'
import blogPage from './pages/blogPage'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  hero,
  smallLargeHeading,
  yearlyAlbum,
  countryFlag,
  teamBio,
  homePage,
  visionAndTeamPage,
  activitiesPage,
  getInvolvedPage,
  FAQPage,
  albumsPage,
  blogPage,
]

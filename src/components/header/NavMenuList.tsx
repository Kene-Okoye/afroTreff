import { useState, useEffect, useRef, RefObject, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LanguageType } from '@/routes/types/languageType';
import paths from '@/routes/paths';
import LinkOpenInNewWindow from '@/components/linkInOpenNewWindow/LinkOpenInNewWindow';

import headerStyles from '@/components/header/TheHeader.module.css';

interface NavMenuListProps {
  firstFocusableElementRef: RefObject<HTMLButtonElement>;
  onNavLinkClick: () => void;
}

const NavMenuList = ({ firstFocusableElementRef, onNavLinkClick }: NavMenuListProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the menu is open or closed
  const menuRef = useRef<HTMLUListElement>(null); // Reference to the menu element

  const { i18n } = useTranslation();
  const currentLanguage: LanguageType = i18n.resolvedLanguage as LanguageType;

  // Get the last segment of an URL
  const location = useLocation();
  const lastSegmentOfURL = location?.pathname.split('/').pop();

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle button click event
  const handleButtonClick = () => {
    toggleMenu();
  };

  // Function to close the main menu and sub menu when nav link is clicked
  const handleNavLinkClick = () => {
    onNavLinkClick();
    closeMenu();
  };

  // Handle Escape key press to close the menu
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    // Add event listeners for outside click and Escape key press
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      // Clean up event listeners when the component is unmounted
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <>
      {/* NOTE: the role="list" has been added to account for the VoiceOver
       * in Safari to behave like all the other screen readers and announce
       * the unordered list.
       */}
      <ul role="list" className={headerStyles['main-menu']}>
        <li className={`${headerStyles['sub-menu']}`}>
          <button
            type="button"
            ref={firstFocusableElementRef}
            onClick={handleButtonClick}
            aria-expanded={isOpen}
            className={`${headerStyles['sub-menu--button']} ${
              headerStyles['sub-menu--button-arrow-down']
            } ${isOpen && headerStyles['sub-menu--button-arrow-up']} ${
              (paths[currentLanguage].VISION_AND_TEAM === lastSegmentOfURL ||
                paths[currentLanguage].ALBUMS === lastSegmentOfURL ||
                paths[currentLanguage].BLOG === lastSegmentOfURL) &&
              headerStyles['child-active']
            }`}
          >
            About
          </button>
          <ul ref={menuRef}>
            <li>
              <NavLink
                to={`/${currentLanguage}/${paths[currentLanguage].VISION_AND_TEAM}`}
                onClick={handleNavLinkClick}
              >
                Vision & Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${currentLanguage}/${paths[currentLanguage].ALBUMS}`}
                onClick={handleNavLinkClick}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/${currentLanguage}/${paths[currentLanguage].BLOG}`}
                onClick={handleNavLinkClick}
              >
                News / Blog
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={`/${currentLanguage}/${paths[currentLanguage].ACTIVITIES}`}>
            Activities
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${currentLanguage}/${paths[currentLanguage].SUPPORT_US}`}
            onClick={handleNavLinkClick}
          >
            Get involved
          </NavLink>
        </li>
        <li>
          <LinkOpenInNewWindow
            href="https://community.afrotreff.com/"
            text={'Community'}
            hideOpenInNewTablIcon
          />
        </li>
        {/* <li>
           // TODO: Replace this with the appropriate tag (radio button) once the language switch radio button is implemented *
          <a href="#">EN</a>
        </li> */}
      </ul>
    </>
  );
};

export default NavMenuList;

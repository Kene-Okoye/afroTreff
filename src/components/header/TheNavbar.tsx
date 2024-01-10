import { useState, RefObject } from 'react';

import headerStyles from '@/components/header/TheHeader.module.css';

import useInert from '@/hooks/useInert';

import NavMenuList from '@/components/header/NavMenuList';

import LanguageSwitch from '@/components/nav/languageSwitch/LanguageSwitch';

const TheNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Function to watch when a menu link is clicked within the 'NavMenuList.tsx'
  // component in order to close on mobile view
  const handleIsNavLinkClicked = () => {
    handleMenuClose();
  };

  // Event handlers to toggle the Menu state
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const { triggerRef, dialogRef, firstFocusableElementRef } = useInert(isMenuOpen, handleMenuClose);

  return (
    <>
      <nav
        ref={dialogRef as RefObject<HTMLElement>}
        id="main-nav"
        aria-label="Select a page"
        className={`${isMenuOpen && headerStyles['nav-fixed']}`}
      >
        <LanguageSwitch />

        {/* Hamburger Menu */}
        <button
          ref={triggerRef as RefObject<HTMLButtonElement>}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={handleMenuToggle}
          className={`${headerStyles['hamburger-menu']} ${headerStyles['hamburger-menu--spring']} ${
            isMenuOpen && headerStyles['is-active']
          }`}
        >
          <span className={headerStyles['hamburger-menu-box']}>
            <span className={headerStyles['hamburger-menu-inner']}></span>
          </span>
          {!isMenuOpen && (
            <span
              className={`${headerStyles['hamburger-menu-label']} ${headerStyles['visually-hidden']}`}
            >
              menu
            </span>
          )}
          {isMenuOpen && (
            <span
              className={`${headerStyles['hamburger-menu-label']} ${headerStyles['visually-hidden']}`}
            >
              close
            </span>
          )}
        </button>

        <NavMenuList
          firstFocusableElementRef={firstFocusableElementRef as RefObject<HTMLButtonElement>}
          onNavLinkClick={handleIsNavLinkClicked}
        />
      </nav>
    </>
  );
};

export default TheNavbar;

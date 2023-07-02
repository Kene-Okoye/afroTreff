import { useState, RefObject } from 'react';

import headerStyles from '@/components/header/TheHeader.module.css';

import useInert from '@/hooks/useInert';

import NavMenuList from '@/components/header/NavMenuList';

const TheNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav ref={dialogRef as RefObject<HTMLElement>} id="main-nav" aria-label="Select a page">
        {/* Hamburger Menu */}
        <button
          ref={triggerRef as RefObject<HTMLButtonElement>}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={handleMenuToggle}
          className={`${headerStyles['hamburger-menu']} ${headerStyles['hamburger-menu--spin']} ${
            isMenuOpen && headerStyles['is-active']
          }`}
        >
          <span className={headerStyles['hamburger-menu-box']}>
            <span className={headerStyles['hamburger-menu-inner']}></span>
          </span>
          {!isMenuOpen && <span className={headerStyles['hamburger-menu-label']}>menu</span>}
          {isMenuOpen && <span className={headerStyles['hamburger-menu-label']}>close</span>}
        </button>

        <NavMenuList
          firstFocusableElementRef={firstFocusableElementRef as RefObject<HTMLButtonElement>}
        />
      </nav>
    </>
  );
};

export default TheNavbar;

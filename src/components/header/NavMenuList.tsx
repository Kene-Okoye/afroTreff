import { useState, useEffect, useRef, RefObject } from 'react';

import headerStyles from '@/components/header/TheHeader.module.css';

interface NavMenuListProps {
  firstFocusableElementRef: RefObject<HTMLButtonElement>;
}

const NavMenuList = ({ firstFocusableElementRef }: NavMenuListProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the menu is open or closed
  const menuRef = useRef<HTMLUListElement>(null); // Reference to the menu element
  let buttonRef = useRef<HTMLButtonElement>(null); // Reference to the button element

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

  // Handle outside click event to close the menu
  const handleOutsideClick = (event: MouseEvent) => {
    buttonRef = firstFocusableElementRef;
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      closeMenu();
    }
  };

  // Handle Escape key press to close the menu
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  useEffect(() => {
    // Add event listeners for outside click and Escape key press
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      // Clean up event listeners when the component is unmounted
      document.removeEventListener('mousedown', handleOutsideClick);
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
            className={`${headerStyles['sub-menu--button-arrow-down']} ${
              isOpen && headerStyles['sub-menu--button-arrow-up']
            }`}
          >
            About
          </button>
          <ul ref={menuRef}>
            <li>
              <a href="#">Vision & Team</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">News / Blog / AfroTreffzine</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#activities" aria-current="page">
            Activities
          </a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
        <li>
          <a href="#">AfroList</a>
        </li>
        <li>
          <a href="#">EN</a>
        </li>
      </ul>
    </>
  );
};

export default NavMenuList;

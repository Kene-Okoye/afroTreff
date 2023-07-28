import { useState, useEffect, useRef, RefObject } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import paths from '@/routes/paths';
import headerStyles from '@/components/header/TheHeader.module.css';

interface NavMenuListProps {
  firstFocusableElementRef: RefObject<HTMLButtonElement>;
  onNavLinkClick: () => void;
}

const NavMenuList = ({ firstFocusableElementRef, onNavLinkClick }: NavMenuListProps) => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the menu is open or closed
  const menuRef = useRef<HTMLUListElement>(null); // Reference to the menu element
  let buttonRef = useRef<HTMLButtonElement>(null); // Reference to the button element

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
            } ${
              (paths.VISION_AND_TEAM === lastSegmentOfURL ||
                paths.GALLERY === lastSegmentOfURL ||
                paths.BLOG === lastSegmentOfURL) &&
              headerStyles['child-active']
            }`}
          >
            About
          </button>
          <ul ref={menuRef}>
            <li>
              <NavLink to={paths.VISION_AND_TEAM} onClick={onNavLinkClick}>
                Vision & Team
              </NavLink>
            </li>
            <li>
              <NavLink to={paths.GALLERY} onClick={onNavLinkClick}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to={paths.BLOG} onClick={onNavLinkClick}>
                News / Blog
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to={paths.ACTIVITIES} onClick={onNavLinkClick}>
            Activities
          </NavLink>
        </li>
        <li>
          <NavLink to={paths.SUPPORT} onClick={onNavLinkClick}>
            Support
          </NavLink>
        </li>
        <li>
          {/* // TODO: Change this path to external link for the AfroList after the website has also been created*/}
          <a href="#">AfroList</a>
        </li>
        <li>
          {/* // TODO: Replace this eith the appropriate tag once the language switch radio button is implemented */}
          <a href="#">EN</a>
        </li>
      </ul>
    </>
  );
};

export default NavMenuList;

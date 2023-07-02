/* NOTES ABOUT THIS HOOK
-------------------------------------------------------------------------------
* @Purpose: This custom hook can be used to manage the inert and aria-hidden attributes 
* of elements in a React component. It is particularly useful for creating modals
* or overlays that should prevent interaction with elements outside of the modal.
* @param {boolean} isOpen - Determines whether the modal or overlay is open
* @param {function} onClose - Callback function to be called when the modal or 
* overlay is closed
* @returns {object} - An object containing the following refs:
* - triggerRef: Ref object for the trigger element that opens the modal or overlay
* - dialogRef: Ref object for the dialog or wrapper element that represents the 
*   modal or overlay.
* - firstFocusableElementRef: Ref object for the first focusable element inside the 
*   modal or overlay.


* HOW TO USE THE HOOK
--------------------------------------------------------------------------------
* 1.) Import and use the 'useInert' hook in your desired component file
* 2.) Add the respective refs ( trigger, dialog, and first focusable element) to
*     your desired elements using type assertion like below for e.g.:
*     ref={dialogRef as RefObject<HTMLElement>}
*     Please ensure to import the React.RefObject into your component before the ref
*     is assigned
* 3.) Add your specific logic and state: That is the 'isOpen' state and the logic
*     for the 'onClose' function that should be passed as arguments to the hook.
*  
* X--- Please refer to the component 'TheNavbar.tsx' to see a working e.g. of the hook. ---X
*/

import { useState, useEffect, useRef, RefObject } from 'react';

type ElementRefs<T extends HTMLElement> = {
  triggerRef: RefObject<T | null>;
  dialogRef: RefObject<T | null>;
  firstFocusableElementRef: RefObject<T | null>;
};

const useInert = <T extends HTMLElement>(isOpen: boolean, onClose: () => void): ElementRefs<T> => {
  // Refs for trigger, dialog, and first focusable element
  const triggerRef = useRef<T | null>(null);
  const dialogRef = useRef<T | null>(null);
  const firstFocusableElementRef = useRef<T | null>(null);

  // State to track whether the trigger element should be focused
  const [shouldFocusTriggerElement, setShouldFocusTriggerElement] = useState(false);

  useEffect(() => {
    // Select the root element within the document
    const reactRootElement = document.querySelector('#root');

    // Select the modal dialog wrapper and all of its children / siblings
    const wrapperElement = dialogRef.current;
    const elementsToExclude = wrapperElement
      ? Array.from(wrapperElement.querySelectorAll('*'))
      : [];

    // Select the entire elements within the App root excluding the modal dialog
    // wrapper and all of its children
    const elementsToInert = reactRootElement
      ? Array.from(reactRootElement.querySelectorAll('*')).filter(
          (element) =>
            wrapperElement &&
            !element.contains(wrapperElement) &&
            !elementsToExclude.includes(element),
        )
      : [];

    // Ref to select the first focusable element
    const firstFocusableElement = firstFocusableElementRef.current;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        setShouldFocusTriggerElement(true);
      }
    };

    if (isOpen) {
      // Set 'inert' and 'aria-hidden' attributes for elements outside the modal dialog
      elementsToInert.forEach((element) => {
        element?.setAttribute('inert', '');
        element?.setAttribute('aria-hidden', 'true');
      });

      // Focus the first focusable element inside the modal dialog after some delay.
      // This delay is necessary in case the CSS visibilty: hidden is set to the parent div
      timeoutId = setTimeout(() => {
        firstFocusableElement?.focus();
      }, 100);

      // Listen for the 'Escape' keydown event to close the modal dialog
      document.addEventListener('keydown', handleEscapeKey);
    } else {
      // Disable the 'inert' and 'aria-hidden' attributes
      elementsToInert.forEach((element) => {
        element?.removeAttribute('inert');
        element?.removeAttribute('aria-hidden');
      });

      // Remove the 'Escape' keydown event listener
      document.removeEventListener('keydown', handleEscapeKey);
    }

    // Clean up the event listeners ane setTimeout when the component is unmounted
    return () => {
      elementsToInert.forEach((element) => {
        element?.removeAttribute('inert');
        element?.removeAttribute('aria-hidden');
      });
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    // Focus the trigger element when the modal dialog is closed and shouldFocusTriggerElement is true
    if (!isOpen && shouldFocusTriggerElement) {
      triggerRef.current?.focus();
      setShouldFocusTriggerElement(false);
    }
  }, [isOpen, shouldFocusTriggerElement]);

  return { triggerRef, dialogRef, firstFocusableElementRef };
};

export default useInert;

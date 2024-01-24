import { useEffect, useRef } from 'react';

const useModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Generate a unique identifier for the transient style tag
  const uniqueId = `modal-dialog-style-${Date.now()}`;

  const openModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();

      /*  Create a transient stylesheet: the style tag with a unique id. 
        The implementation below TURNS OFF / PREVENTS scrolling on the 
        body when the modal window is open*/

      const node = document.createElement('style');
      node.setAttribute('type', 'text/css');
      node.setAttribute('id', uniqueId);
      node.textContent = 'html, body { height: auto ! important ; overflow: hidden ! important ; }';
      document.head.prepend(node);
    }
  };

  const closeModal = () => {
    if (dialogRef.current !== null) {
      dialogRef.current.close();

      /*  Select and remove the style tag with the unique id in oder to
        re-enable scrolling on the body when the modal is closed. */

      const styleTag = document.head.querySelector(`style[id="${uniqueId}"]`);
      styleTag?.remove();
    }
  };

  useEffect(() => {
    // Select and remove the style tag with the unique id when the escape key is pressed

    const handleEscapeKey = (event: KeyboardEvent) => {
      const styleTag = document.head.querySelector(`style[id="${uniqueId}"]`);
      if (event.key === 'Escape') {
        styleTag?.remove();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [uniqueId]);

  return { dialogRef, openModal, closeModal };
};

export default useModal;

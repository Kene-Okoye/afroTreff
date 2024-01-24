import { useId, PropsWithChildren, CSSProperties } from 'react';

import useModal from '@/hooks/useModal';

import modalDialogStyles from '@/components/modalDialog/ModalDialog.module.css';

import expandFullscreenIcon from '@/assets/svg/expand_fullscreen_icon.svg';
import closeIcon from '@/assets/svg/close_icon.svg';

type ModalDialogProps = {
  dialogTitle?: string;
  styleDialog?: CSSProperties;
  openButtonText?: string;
  closeButtonText?: string;
  styleopenButton?: CSSProperties;
  openButtonWrapperClassName?: string;
  closeButtonWrapperClassName?: string;
};

const ModalDialog = ({
  dialogTitle,
  styleDialog,
  openButtonText,
  closeButtonText,
  styleopenButton,
  openButtonWrapperClassName,
  closeButtonWrapperClassName,
  children,
}: PropsWithChildren<ModalDialogProps>) => {
  const { dialogRef, openModal, closeModal } = useModal();
  const dialogId = useId();

  return (
    <>
      <div className={openButtonWrapperClassName}>
        <button
          type="button"
          onClick={openModal}
          style={styleopenButton}
          className={`${modalDialogStyles['modal-dialog__button']} ${
            !openButtonText && modalDialogStyles['modal-dialog__button--smaller-size']
          }`}
        >
          {openButtonText}
          {!openButtonText && (
            <>
              <img
                src={expandFullscreenIcon}
                alt="View image on fullscreen"
                role="image"
                className={modalDialogStyles['modal-dialog__expand-fullscreen-icon']}
              />
            </>
          )}
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className={modalDialogStyles['modal-dialog__dialog']}
        style={styleDialog}
        aria-describedby={`dialog-title-${dialogId}`}
      >
        <h2
          id={`dialog-title-${dialogId}`}
          className={modalDialogStyles['visually-hidden']}
        >{`Image of ${dialogTitle}`}</h2>

        <div className={closeButtonWrapperClassName}>
          <button
            type="button"
            onClick={closeModal}
            style={styleopenButton}
            className={`${modalDialogStyles['modal-dialog__button']} ${
              modalDialogStyles['modal-dialog__button--close']
            }  ${!closeButtonText && modalDialogStyles['modal-dialog__button--smaller-size']}`}
          >
            {closeButtonText}
            {!closeButtonText && (
              <>
                <img
                  src={closeIcon}
                  alt="Close and return to normal view"
                  role="image"
                  className={modalDialogStyles['modal-dialog__expand-fullscreen-icon']}
                />
              </>
            )}
          </button>
        </div>

        {children}
      </dialog>
    </>
  );
};

export default ModalDialog;

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
  const expandIconId = useId();
  const closeIconId = useId();

  return (
    <>
      <div className={openButtonWrapperClassName}>
        {/* ---------------------------------------------------------------------------------------------
            // TODO: ACCESSIBILITY ISSUE: 
            ----------------------------------------------------------------------------------------------
            When using I am currently experiencing an issue with NVDA screen reader 
            and the HTM Dialog element. When I close my modal dialog (useing ESC key or clicking a button),
            the first link or another focusable element on my web page gets announced first before the
            announcement of the button / element that opened the dialog. Find out if this is a general 
            bug/issue with NVDA how to fix thus?  
        */}

        <button
          type="button"
          onClick={openModal}
          style={styleopenButton}
          aria-labelledby={`expand-fullscreen-icon-${expandIconId}`}
          className={`${modalDialogStyles['modal-dialog__button']} ${
            !openButtonText && modalDialogStyles['modal-dialog__button--smaller-size']
          }`}
        >
          {openButtonText}
          {!openButtonText && (
            <>
              <img
                src={expandFullscreenIcon}
                alt=""
                role="presentation"
                aria-hidden="true"
                className={modalDialogStyles['modal-dialog__expand-fullscreen-icon']}
              />
              <span
                id={`expand-fullscreen-icon-${expandIconId}`}
                className={modalDialogStyles['visually-hidden']}
              >
                View image on fullscreen
              </span>
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
            autoFocus
            aria-labelledby={`close-fullscreen-icon-${closeIconId}`}
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
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  className={modalDialogStyles['modal-dialog__expand-fullscreen-icon']}
                />
                <span
                  id={`close-fullscreen-icon-${closeIconId}`}
                  className={modalDialogStyles['visually-hidden']}
                >
                  Close and return to normal view
                </span>
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

import ModalDialog from '@/components/modalDialog/ModalDialog';

import galleryImageModalDialogStyles from '@/pages/gallery/GalleryImageModalDialog.module.css';

type GalleryImageModalDialogProps = {
  imageSrc: string;
  imageAlt: string;
};

const GalleryImageModalDialog = ({ imageSrc, imageAlt }: GalleryImageModalDialogProps) => {
  return (
    <>
      <div className={galleryImageModalDialogStyles['gallery__container']}>
        <div className={galleryImageModalDialogStyles['gallery__image-wrapper']}>
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className={galleryImageModalDialogStyles['gallery__image']}
          />
        </div>

        <ModalDialog
          dialogTitle={imageAlt}
          openButtonWrapperClassName={
            galleryImageModalDialogStyles['gallery__view-image-button-wrapper']
          }
          styleDialog={{ overflow: 'hidden' }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className={galleryImageModalDialogStyles['gallery__image-modal']}
          />
        </ModalDialog>
      </div>
    </>
  );
};

export default GalleryImageModalDialog;

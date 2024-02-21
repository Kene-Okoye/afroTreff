export type photoCollectionType = {
  id: number;
  imageSrc: string;
  alt: string;
};

export type albumDataType = {
  id: number;
  month: string;
  albumBackgroundImage: string;
  photoCollection: photoCollectionType[];
};

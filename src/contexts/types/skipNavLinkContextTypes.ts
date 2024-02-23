import { ReactNode } from 'react';

export type SkipNavLinkContextType = {
  skipNavClicked: boolean;
  setSkipNavClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SkipNavLinkProviderPropsType = {
  children: ReactNode;
};

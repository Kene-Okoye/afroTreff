import { useState, createContext } from 'react';

import {
  SkipNavLinkContextType,
  SkipNavLinkProviderPropsType,
} from '@/contexts/types/skipNavLinkContextTypes';

export const SkipNavLinkContext = createContext<SkipNavLinkContextType | undefined>(undefined);

/* Export Component for the SkipNavLink Context Provider */
const SkipNavLinkProvider = ({ children }: SkipNavLinkProviderPropsType) => {
  const [skipNavClicked, setSkipNavClicked] = useState<boolean>(false);

  return (
    <SkipNavLinkContext.Provider value={{ skipNavClicked, setSkipNavClicked }}>
      {children}
    </SkipNavLinkContext.Provider>
  );
};

export default SkipNavLinkProvider;

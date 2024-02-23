import { useContext } from 'react';
import { SkipNavLinkContext } from './SkipNavLinkContext';
import { SkipNavLinkContextType } from '@/contexts/types/skipNavLinkContextTypes';

/* Export variable for using the created SkipNavLink context */
export const useSkipNavLinkContext = (): SkipNavLinkContextType | undefined => {
  return useContext(SkipNavLinkContext);
};

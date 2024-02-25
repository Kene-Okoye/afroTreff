import { createContext } from 'react';
import { LanguageSelectContextType } from '@/contexts/types/LanguageSelectContextType';

const LanguageSelectContext = createContext<LanguageSelectContextType | undefined>(undefined);

export default LanguageSelectContext;

import { createContext } from 'react'
import { ICategory } from '../interfaces/categories';

interface ContextProps {
    categories : ICategory[];
    actualCategory : ICategory;
    handleChangeCategory : (id : number) => void;
}

export const QuioscoContext = createContext( {} as ContextProps );
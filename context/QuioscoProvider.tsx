import useSWR from 'swr';
import { FC, useEffect, useState } from 'react';
import { QuioscoContext } from './QuioscoContext';
import { ICategory } from '../interfaces/categories';
import { Category } from '../components/ui/Category';


export const QuioscoProvider = ({ children } : any) => {
    const fetcher = (...args:[ key : string ]) => fetch(...args).then(res => res.json())
    
    const [categories, setCategories] = useState<ICategory[]>([])
    const [actualCategory, setactualCategory ] = useState({} as ICategory)
    
    
    const { data, error, isLoading } = useSWR<ICategory[]>(`/api/categories`, fetcher )
    useEffect(() => {
        if( !isLoading ){
            setCategories( data! )
        }  
    }, [isLoading])

    useEffect(() => {
        setactualCategory( categories[0] )
    }, [categories])
    
    

    const handleChangeCategory = ( id : number ) => {
        const cat : ICategory[] = categories.filter( category => category.id === id )
        setactualCategory( cat[0] )
    }

    return (
        <QuioscoContext.Provider value={{
            categories,
            actualCategory,
            handleChangeCategory
        }}>
            { children }
        </QuioscoContext.Provider>
    )
}
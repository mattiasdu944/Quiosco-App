import Image from 'next/image';
import { FC } from 'react';
import { useQuiosco } from '../../hooks';
import { ICategory } from '../../interfaces/categories';


interface Props{
    category : ICategory
}

export const Category:FC<Props> = ({ category }) => {

    const { icon, id, name } = category;
    const { actualCategory, handleChangeCategory } = useQuiosco();

    return (
        <div 
            className={`
                ${ actualCategory?.id === id ? 'bg-amber-400' : '' }     
                flex items-center gap-4 w-full 
                px-5 py-4 rounded-2xl cursor-pointer 
                hover:bg-amber-400 transition-all`}
            onClick={ () => handleChangeCategory( category.id ) }
        >
            <Image
                width={ 40 }
                height={ 40 }
                src={`/images/icono_${ icon }.svg`}
                alt={ name }
            />

            <p className='font-bold text-xl'>
                { name }
            </p>

        </div>
    )
}

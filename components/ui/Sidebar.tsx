import Image from 'next/image'
import { Category } from './Category';

import { useQuiosco } from '../../hooks'

export const Sidebar = () => {
    const { categories } = useQuiosco();
    return (
        <>
            <Image
                width={ 300 }
                height={ 100 }
                src="/images/logo.svg"
                alt='Logo'
                className='mb-20'
                priority
            />

            <nav className='grid gap-5'>
                {
                    categories.map( category => 
                        <Category key={ category.id } category={ category }/>
                    
                    ) 
                }
            </nav>
            

        </>
    )
}

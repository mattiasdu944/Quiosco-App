import React from 'react'
import { Layout } from '../components/layouts/Layout'
import { useQuiosco } from '../hooks/useQuiosco';

const HomePage = () => {
  const { actualCategory } = useQuiosco();
  
  return (
    <Layout title={`Menu ${ actualCategory?.name }`} description={''} >
      <div className='text-3xl gap-1 flex font-medium'>
        <p className='text-gray-400'>Fresh Cofee {'>'}</p>
        
        <h1>{ actualCategory?.name }</h1>
      </div>
    </Layout>
  )
}

export default HomePage
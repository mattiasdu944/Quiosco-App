import Head from 'next/head'
import React, { FC } from 'react'
import { Sidebar } from '../ui';

interface Props{
    title : string;
    description : string;
    children : JSX.Element;
}

export const Layout:FC<Props> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{`Cafe - ${ title }`}</title>
                <meta name={ description } content="Quisco Cafeteria" />
            </Head>

            <div className="md:flex">

                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 px-5 py-3 bg-gray-50 shadow-md'>
                    <Sidebar/>
                </aside>

                <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-scroll p-10'>
                    { children }
                </main>
        
            </div>
        </>
    )
}

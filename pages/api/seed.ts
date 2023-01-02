import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedCategories, seedProducts } from '../../database';

type Data = { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (  process.env.NODE_ENV === 'production'){
        return res.status(401).json({ message: 'No tiene acceso a este API'});
    }

    await db.$connect();
    await db.category.createMany({
        data: seedCategories.initialCategoriesData
    });
    await db.product.createMany({
        data: seedProducts.initialProductsData
    });
    db.$disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}
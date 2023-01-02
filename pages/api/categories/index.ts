import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'

type Data = {
    message: string
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method){
        case 'GET':
            return getAllCategories( req, res )
    }

    res.status(200).json({ message: 'Invalid method' })
}

const getAllCategories = async (req: NextApiRequest, res: NextApiResponse) => {
    await db.$connect();
    const categories = await db.category.findMany();
    await db.$disconnect();
    return res.status(200).json( categories )
}

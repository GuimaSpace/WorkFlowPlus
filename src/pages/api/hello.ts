//Post UserAPI Rest 02/03/23
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({Status: "ok"})
}
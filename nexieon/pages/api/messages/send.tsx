import { createMessage } from "@/lib/prisma/messages";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const data = req.body
            console.log(data);
            
            const { message, error }:any = await createMessage(data);

            console.log('message: ' + message);
            

            if (error) throw new Error(error);
            return res.status(200).json({ message })

        } catch (err) {
            return res.status(200).json({ error: err })
        }
    }

    return res.status(425).end('Must be a POST')
}

export default handler;
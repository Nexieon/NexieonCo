import { createAdmin } from "@/lib/prisma/adminusers";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      console.log(data);
            
      const { admin, error } = await createAdmin(data);

      console.log('admin: ' + admin);
            
      if (error) throw new Error(error as any);

      return res.status(200).json({ message: 'Success' });
    } catch (err) {
      return res.status(500).json({ error: 'An error occurred' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};

export default handler;

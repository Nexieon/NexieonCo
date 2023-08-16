import { AdminUser } from "@prisma/client";
import prisma from ".";
import { encrypt, verify } from "../utils/encryption";

interface AdminInterfaceCreator {
    name: string
    content: any
}

export async function createAdmin(admin: AdminInterfaceCreator) {
    try {
        let adminU = {
            name: admin.name,
            hash: JSON.stringify(encrypt(admin.content))
        }

        const adminDbUser = await prisma.adminUser.create({ data: adminU });

        return { admin: adminDbUser }
    } catch (error) {
        console.log(error);
        
        return { error }
    }
}

export async function verifyAdmin(admin: AdminInterfaceCreator) {
    try {
        let name = admin.name;

        const ad = await prisma.adminUser.findFirst({ where: { name }});
        
        if (!verify(admin.content, JSON.parse(ad!.hash))) {
            return;
        }

        return {admin: ad};
    } catch (error) {
        console.log(error);
        
        return { error }
    }
}
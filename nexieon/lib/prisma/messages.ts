import { Message } from "@prisma/client";
import prisma from ".";

export async function getMessages() {
    try {
        const messages = await prisma.message.findMany();

        return { messages }
    } catch (error) {
        return { error } 
    }
}

export async function  createMessage(message: Message) {
    try {
        const messageFromDB = await prisma.message.create({ data: message });

        return { message: messageFromDB }
    } catch (error) {
        console.log(error);
        
        return { error }
    }
}


export async function getMessageById(id: string) {
    try {
        const message = await prisma.message.findUnique({ where: { id }});

        return { message }
    } catch (error) {
        return { error } 
    }
}

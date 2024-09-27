import { PrismaClient } from '@prisma/client'

// Creating a new instance of PrismaClient
const prisma = new PrismaClient()

const prismaConnection = async () => {
    try {
        await prisma.$connect()
        console.log('Database connected')
    } catch (error) {
        console.error('Error connecting to the database')
        console.error(error)
    }
}

export { 
    prisma, 
    prismaConnection
}
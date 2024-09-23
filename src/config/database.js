const { PrismaClient } = require('@prisma/client')

// Creating a new instance of PrismaClient
const prisma = new PrismaClient()

async function prismaConnection () {
    try {
        await prisma.$connect()
        console.log('Database connection established')
    } catch (error) {
        console.error('Error establishing database connection', error)
    }
}

module.exports = { 
    prisma,
    prismaConnection
}
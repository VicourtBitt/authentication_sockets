const { PrismaClient } = require('@prisma/client')

// Creating a new instance of PrismaClient
const prisma = new PrismaClient()

module.exports = { 
    prisma
}
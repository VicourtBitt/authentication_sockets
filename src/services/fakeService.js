const { prisma } = require('../config/database.js')

class FakeService {
    // Remover instancia **
    constructor () {
        this.prisma = prisma
    }

    async sendBS (data) {
        return {
            msg : 'Hello world'
        }
    }
}

module.exports = FakeService
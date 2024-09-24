const FakeService = require('../services/fakeService.js')
const fakeService = new FakeService()

class FakeController {
    async sendBS(req, res) {
        try {
            const data = req.body

            // Lembrar que não é necessário instanciar dentro do this
            const user = await fakeService.sendBS(data)
            res.status(201).json({ user })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = FakeController
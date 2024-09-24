const FakeService = require('../services/fakeService.js')
const fakeService = new FakeService()

class FakeController {
    async createUser(req, res) {
        try {
            const data = req.body
            const user = await fakeService.createUser(data)
            res.status(201).json({ user })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = FakeController
const { Router } = require('express')

const FakeController = require('../controller/fakeController.js')

const fakeController = new FakeController()
const routes = Router()

routes.post('/fake', fakeController.sendBS)

module.exports = routes
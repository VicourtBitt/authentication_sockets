const UserService = require('../services/UserService.js')
const userService = new UserService()

class UserController {
    // Create only the user
    async createUser(req, res) {
        try {
            const data = req.body
            const user = await userService.createUser(data)
            res.status(201).json({ user })
        } catch (error) {
            res.status(400).json({ error: "Não foi possível criar o novo usuário (unitário)" })
        }
    }

    // Function that will create the full register
    async createFullRegister (req, res) {
        try {
            const data = req.body
            const { name, cpf_cnpj, email, password } = data
            const hashedPassword = await bcrypt.hash(password, 12)
        
            // To create the user based in the Prisma Model
            const user = await userService.createUser({ 
                name, cpf_cnpj 
            })

            // To create the credential based in the Prisma Model
            const credential = await credentialService.createCredential({
                email, 
                password: hashedPassword, 
                user_id: user.id
            })

            res.status(201).json({ user })
        } catch (error) {
            res.status(400).json({ error: "Não foi possível gerar o novo usuário (completo)" })
        }
    }

    async findAllUsers(req, res) {
        try {
            const users = await userService.findAllUsers()
            res.status(200).json({ users })
        } catch (error) {
            res.status(400).json({ error: "Algum erro ocorreu no momento de pegar todos os users" })
        }
    }

    async deleteUser(req, res) {
        try {
            const { cpf_cnpj } = req.params
            const user = await userService.deleteUser(cpf_cnpj)
            res.status(200).json({ message: 'User deleted' })
        } catch (error) {
            res.status(400).json({ error: "Algum erro ocorreu no momento de deletar o usuário" })
        }
    }
}

module.exports = UserController
import UserService from '../services/UserService.js'
import CredentialService from '../services/CredentialService.js'

const userService = new UserService()
const credentialService = new CredentialService()

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

    // Create the full user register, which is user and credentials
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

    async findUserById (req, res) {
        try {
            const { id } = req.params
            const user = await userService.findUserById(id)
            res.status(200).json({ user })
        } catch (error) {
            res.status(400).json({ error: "Algum erro ocorreu no momento de pegar o usuário" })
        }
    }
 
    async findAllUsers(req, res) {
        try {
            const users = await userService.findAllUsers()
            res.cookie('TEST', "TESTCOOKIE")
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

export default UserController
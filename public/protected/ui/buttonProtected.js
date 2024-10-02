import dotenv from 'dotenv'
dotenv.config()
// import { nonRegisteredModal, closeNonRegisteredModal, openNonRegisteredModal } from "../../public/ui/modal/nonRegistered.js"

document.addEventListener('DOMContentLoaded', () => {
    const protectedBtn = document.getElementById('protected')

    protectedBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const sendSomething = async () => {
            const response = await axios.get(`${process.env.GET_ALL_USERS}`)
            const info = await response.json()
            console.log(info)
            return info
        }

        sendSomething()
    })
    // let nonRegistered = false

    // if (!nonRegistered) {
    //     protectedBtn.addEventListener('click', () => {
    //         nonRegisteredModal()
    //         closeNonRegisteredModal()
    //         openNonRegisteredModal()
    //     })
    // }
})
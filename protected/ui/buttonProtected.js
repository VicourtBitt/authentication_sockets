import { nonRegisteredModal, closeNonRegisteredModal, openNonRegisteredModal } from "../../public/ui/modal/nonRegistered.js"

document.addEventListener('DOMContentLoaded', () => {
    const protectedBtn = document.getElementById('protected')
    let nonRegistered = false

    if (!nonRegistered) {
        protectedBtn.addEventListener('click', () => {
            nonRegisteredModal()
            closeNonRegisteredModal()
            openNonRegisteredModal()
        })
    }
})
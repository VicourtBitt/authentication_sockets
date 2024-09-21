const modal = document.getElementById('modal')

export function nonRegisteredModal () {

    modal.removeChild(modal.firstChild)
    modal.classList.add('non__registered')

    const template = `
        <div class="modal__content">
            <h2>You are not registered</h2>
            <a href='login.html'>Register/Login</a>
            <button id='close__non__registered'>Close</button>
        </div>
    `

    modal.innerHTML = template
}

export function openNonRegisteredModal () {
    modal.showModal()
}

export function closeNonRegisteredModal () {
    const closeBtn = document.getElementById('close__non__registered')

    closeBtn.addEventListener('click', () => {
        modal.close()
    })
}

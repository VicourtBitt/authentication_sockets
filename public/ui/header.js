document.addEventListener('DOMContentLoaded', () => {
    // Get the header element from the DOM
    const header = document.querySelector('header')

    // Set the innerHTML of the headerElem to the template
    const template = `
        <div class="header__logo__box">
            <img src='../assets/images' alt='Logo do site'>
        </div>

        <div class="header__navigation">
            <a class="header__navigation__item">Home</a>
            <a class="header__navigation__item">Profile</a>
            <a class="header__navigation__item">Login</a>
        </div>
    `

    header.innerHTML = template
})
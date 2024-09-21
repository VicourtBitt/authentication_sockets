document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer')

    const template = `
        <div class="footer__navigation">
            <a class="footer__navigation__item" href="#">Home</a>
            <a class="footer__navigation__item" href="#">Profile</a>
            <a class="footer__navigation__item" href="#">Login</a>
        </div>
    `

    footer.innerHTML = template
})
import userAuthentication from "./userAuth";
const userAuth = new userAuthentication();

const initHeader = () => {
    const userMenu = document.querySelector('.circle');
    const userIcon = userMenu.querySelector('#userMenu');
    const userHover = userMenu.querySelector('.click-area');
    const userSelections = userMenu.querySelectorAll('.selection');
    const heading = document.querySelector('header h1.title');


    userMenu.addEventListener('mouseover', e => {
        userIcon.classList.add('active');
        userHover.classList.add('active')
    });
    userMenu.addEventListener('mouseout', e => {
        userIcon.classList.remove('active');
        userHover.classList.remove('active')
    });

    userSelections[0].addEventListener('click', e => userAuth.logout());
    userSelections[1].addEventListener('click', e => window.open('einstellungen.html', '_self'));
    heading.addEventListener('click', e => window.open('/', '_self'));
}

initHeader();
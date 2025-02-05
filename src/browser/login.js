class Login {
    constructor() {
        this.user = {
            name : undefined,
            passwort : undefined
        }
    }

    login() {
        const login = document.querySelector('section.login');
        const form = document.querySelector('form.login');
        const createAccount = document.querySelector('#linkLogin');
        let data;
        
        login.style.visibility = 'visible';
        form.addEventListener('submit', e => {
            e.preventDefault();
            data = {
                name: e.target[0].value,
                password: e.target[1].value,
            }
            login.style.visibility = 'hidden';
            this.user = data;
        });

        createAccount.addEventListener('click', e => {
            login.style.visibility = 'hidden';
            this.register();
        });

    }

    register() {
        const register = document.querySelector('section.register');
        const form = document.querySelector('form.register');
        const login = document.querySelector('#linkRegister');

        register.style.visibility = 'visible';
        form.addEventListener('submit', e => {
            e.preventDefault();
            data = {
                name: e.target[0].value,
                password: e.target[1].value,
            }
            register.style.visibility = 'hidden';
            this.user = data;
        });

        login.addEventListener('click', e => {
            register.style.visibility = 'hidden';
            this.login();
        });

    }


}

export {Login as default}
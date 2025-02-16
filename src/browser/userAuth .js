class UserAuth {
    constructor() {
        this.user;
    }

    login() {
        const login = document.querySelector('section.login');
        const form = document.querySelector('form.login');
        const createAccount = document.querySelector('#linkLogin');

        login.style.visibility = 'visible';
        form.addEventListener('submit', e => {
            e.preventDefault();
            const name = e.target[0].value;
            const password = e.target[1].value;

            let url;
            if(this.#isEmail(name)) url = '/api/getUserByEmail';
            else url = '/api/getUserByUsername';

            fetch(url, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    password
                })
            })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(err => {
                        this.#showError(err.error, 'login');
                    });
                }
                return response.json()
            })
            .then(user => {
                this.user = user;
                console.log(this.user)
                login.style.visibility = 'hidden';
                this.#hideError('login');
            })
            .catch(err => console.log(err));
        });

        createAccount.addEventListener('click', e => {
            login.style.visibility = 'hidden';
            this.#hideError('login');
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
            
            if(!(e.target[4].value === e.target[5].value)) return this.#showError('Passwörter stimmen nicht überein', 'register');
            if(!this.#isEmail(e.target[3].value)) return this.#showError('Email ist nicht gültig', 'register');

            const user = {
                first_name: e.target[0].value,
                last_name: e.target[1].value,
                user_name: e.target[2].value,
                email: e.target[3].value,
                password: e.target[4].value
            };
            
            fetch('/api/createAccount', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(err => {
                        this.#showError(err.error, 'register');
                    });
                }
                return response.json();
            })
            .then(user => {
                this.user = user;
                console.log(this.user)
                register.style.visibility = 'hidden';
                this.#hideError('register');
            })
            .catch(err => console.log(err));
        });

        login.addEventListener('click', e => {
            register.style.visibility = 'hidden';
            this.#hideError('register');
            this.login();
        });

    }

    #showError(errMessage, location) {
        let error;
        if(location === 'login') error = document.querySelector('#errorLogin');
        else if(location === 'register') error = document.querySelector('#errorRegister');

        error.classList.add('errorUserAuthShow');
        error.textContent = errMessage;
        throw new Error(errMessage);

    }
    #hideError(location) {
        let error;
        if(location === 'login') error = document.querySelector('#errorLogin');
        else if(location === 'register') error = document.querySelector('#errorRegister');

        error.classList.remove('errorUserAuthShow');
        error.textContent = null;
    }
    #isEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    }
}

export {UserAuth as default}
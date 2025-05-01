class UserAuth {
    constructor() {
        
    }

    login() {
        const login = document.querySelector('section.login');
        const form = document.querySelector('form.login');
        const createAccount = document.querySelector('#linkLogin');

        login.style.visibility = 'visible';

        return new Promise(resolve => {
            form.addEventListener('submit', e => {
                e.preventDefault();
                const name = e.target[0].value;
                const password = e.target[1].value;
    
                let url = '/api/login';
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
                .then(response => {
                    console.log(response.message);
                    login.style.visibility = 'hidden';
                    this.#hideError('login');
                    resolve();
                })
                .catch(err => console.error(err));
            });
            
            createAccount.addEventListener('click', e => {
                login.style.visibility = 'hidden';
                this.#hideError('login');

                this.register().then(() => resolve());
            });
        });
    }

    register() {
        const register = document.querySelector('section.register');
        const form = document.querySelector('form.register');
        const login = document.querySelector('#linkRegister');
        
        register.style.visibility = 'visible';
        return new Promise(resolve => {
            form.addEventListener('submit', e => {
                e.preventDefault();
                
                if(!(e.target[4].value === e.target[5].value)) return this.#showError('Passwörter stimmen nicht überein', 'register');
                if(!this.#isEmail(e.target[3].value)) return this.#showError('Email ist nicht gültig', 'register');
    
                //devault profile picture erstellen 
                const colors = [
                    'red', 'blue', 'green', 'purple', 'orange',
                    'brown', 'gray', 'teal', 'navy', 'maroon',
                    'olive', 'darkgreen', 'darkblue', 'darkred', 'chocolate'
                ];
                const randomIndex = Math.floor(Math.random() * colors.length);
                const color = colors[randomIndex];
                const profilePictureText = e.target[2].value.slice(0,2)
                const profilePicture = `<div style="background-color:${color};" class="defaultProfilePicture">${profilePictureText}</div>`;

                const user = {
                    first_name: e.target[0].value,
                    last_name: e.target[1].value,
                    user_name: e.target[2].value,
                    email: e.target[3].value,
                    password: e.target[4].value,
                    profile_picture: profilePicture
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
                .then(response => {
                    console.log(response.message);
                    register.style.visibility = 'hidden';
                    this.#hideError('register');
                    resolve();
                })
                .catch(err => console.error(err));
            });
    
            return login.addEventListener('click', e => {
                register.style.visibility = 'hidden';
                this.#hideError('register');
                
                return this.login().then(() => resolve());
            });
        });
    }

    logout() {
        return new Promise((resolve) => {
            fetch('/api/logout', {
                method: 'post',
                credentials: 'include'
            })
            .then(response => {
                if(!response.ok) {
                console.log('Logout fehlgeschlagen');}
                return response.json();
            })
            .then(data => {
                console.log(data.message);
                location.reload();
                resolve();
            })
            .catch(err => console.log(err));
        });
    }

    authenticate() {
        return new Promise((resolve) => {
            fetch('/api/checkAuthStatus', {
                method: 'post',
                credentials: 'include'
            })
            .then(response => {
                if(!response.ok) {
                    response.json().then(err => console.log(err.error));
                    return this.login();
                }
                else {
                    response.json().then(data => console.log(data.message));
                    resolve(); 
                }
            })
            .catch(err => {
                console.log(err);
                return this.login();
            })
            .then(() => resolve())
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
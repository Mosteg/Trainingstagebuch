import "./header";
import userAuthentication from "./userAuth";
const userAuth = new userAuthentication();

init().then(() => main());

async function init() {
    await userAuth.authenticate();

    switch(document.body.dataset.page) {
        case 'Startseite': 
            break;

        case 'Challenge': 
            await import('./challenge/challengeMain');
            break;

        case '404':
            break;
    }
}


function main() {
    
    




}

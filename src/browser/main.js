import "./header";
import userAuthentication from "./userAuth";
const userAuth = new userAuthentication();

init().then(() => main());

async function init() {
    await userAuth.authenticate();

    console.log(document.body.dataset.page);
    switch(document.body.dataset.page) {
        case 'Startseite': 
            break;

        case 'Challenge': 
            const {default: Render} = await import('./render');
            const render = new Render();
            await render.renderStatistic();
            break;

        case '404':
            break;
    }
}


function main() {
    console.log('main');
    




}

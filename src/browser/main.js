import userAuthentication from "./userAuth";
import Render from "./render";
import "./header";
const userAuth = new userAuthentication();
const render = new Render();

//init
userAuth.authenticate()
.then(() => render.renderStatistic())
.then(() => main())
.catch(err => console.log(err));




function main() {
    console.log('main');
    




}

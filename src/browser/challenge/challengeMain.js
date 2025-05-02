import Render from "./render";
const render = new Render();


render.renderStatistic()
.then(() => {

})
.catch(err => {
    console.error(err)
    if(err === 'keine Challenge') {
        const createChallenge = document.querySelector('section.createChallenge');
        createChallenge.classList.remove('hidden');
    }
});
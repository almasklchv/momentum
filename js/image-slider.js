import { getTimeOfDay } from "./greeting.js";

export function getRandomNum() {
    let randNum = Math.floor(Math.random() * 20)
    if (randNum != 0) {
        if (randNum < 10) {
            return (randNum+'').padStart(2, '0');
        } else {
            return randNum + '';
        }
        
    }
}

const timeOfDay = getTimeOfDay();
let bgNum = getRandomNum();
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

export function setBg() {
    const img = new Image();
    if (bgNum < 10) {
        bgNum = (bgNum+'').padStart(2, '0');
    }
    img.src = `https://raw.githubusercontent.com/almasklchv/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/almasklchv/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    }
    slideNext.addEventListener('click', getSlideNext);
    slidePrev.addEventListener('click', getSlidePrev);
    

}

export function getSlideNext() {
    if (bgNum < 20) {
        bgNum++;
    } else {
        bgNum = 1;
    }
    setBg()
}

export function getSlidePrev() {
    if (bgNum > 1) {
        bgNum--;
    } else {
        bgNum = 20;
    }
    setBg()
}
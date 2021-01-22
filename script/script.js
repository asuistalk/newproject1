// !this is slider
let headerMain = document.getElementById('header-main');
let leftTopSlider = document.getElementById('left-slider');
let rightTopSlider = document.getElementById('right-slider');
let newsLeft = document.getElementById('news-left');
let newsRigth = document.getElementById('news-right');
let newsSlidersTitle = document.getElementById('news__sliders-title');
let newsSlidersText = document.getElementById('news__sliders-text');
let newsSlidersFooter = document.getElementById('news__sliders-footer');
let massTitle = ['Левый', 'Банкротство и ликвидация предприятия в Украине', 'Правый'];
let massText = ['Левый текст', '«На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права.На сегодняшний день, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права.На сегодняшнийдень, коллектив компании объединяет высокопрофессиональных экспертов имеющих специализации в отдельных областях права...» ', 'Правый текст'];
let massFooter = ['Левый footer', 'Андрей Ворошилов, генеральный д иректор компании Bankom', 'Правый footer'];
newsSlidersTitle.innerHTML = massTitle[1];
newsSlidersText.innerHTML = massText[1];
newsSlidersFooter.innerHTML = massFooter[1];
leftTopSlider.addEventListener('click', () => {
    headerMain.classList.toggle('header-main__leftsliders');
    headerMain.classList.toggle('header-main__rightsliders');
    console.log(headerMain.classList);
});
rightTopSlider.addEventListener('click', () => {
    headerMain.classList.toggle('header-main__leftsliders');
    headerMain.classList.toggle('header-main__rightsliders');
    console.log(headerMain.classList);
});
newsLeft.addEventListener('click', () => { leftslid(newsSlidersTitle, massTitle) });
newsLeft.addEventListener('click', () => { leftslid(newsSlidersText, massText) });
newsLeft.addEventListener('click', () => { leftslid(newsSlidersFooter, massFooter) });
newsRigth.addEventListener('click', () => { rightslid(newsSlidersTitle, massTitle) });
newsRigth.addEventListener('click', () => { rightslid(newsSlidersText, massText) });
newsRigth.addEventListener('click', () => { rightslid(newsSlidersFooter, massFooter) });
function leftslid(elem, arr) {
    if (elem.innerHTML === arr[1]) {
        elem.innerHTML = '';
        elem.innerHTML = arr[0];
    }
    else if (elem.innerHTML === arr[0]) {
        elem.innerHTML = '';
        elem.innerHTML = arr[2];
    }
    else if (elem.innerHTML === arr[2]) {
        elem.innerHTML = '';
        elem.innerHTML = arr[1]
    }
};
function rightslid(elem, arr) {
    if (elem.innerHTML === arr[1]) {
        elem.innerHTML = '';
        elem.innerHTML = arr[2];
    }
    else if (elem.innerHTML === arr[0]) {
        elem.innerHTML = '';
        elem.innerHTML = arr[1];
    }
    else if (elem.innerHTML === arr[2]) {
        elem.innerHTML = '';
        elem.innerHTML = arr[0]
    }
};
// !this is modal
let body = document.getElementById('body');
let modals = document.querySelectorAll('.modal');
let close = document.getElementById('modal__close');
let modalWindow = document.getElementById('modal-window');
close.addEventListener('click', closemodal);
for (let modal of modals) {
    modal.addEventListener('click', getWindow);
}
function getWindow(event) {
    event.preventDefault();
    modalWindow.classList.add('modalOn');
}
function closemodal(event) {
    event.preventDefault();
    modalWindow.classList.remove('modalOn');
}
console.log(close);
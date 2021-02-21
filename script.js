const btn = document.querySelector('.mobmenu__bars');

const mobMenuList = document.querySelector('.mobmenu__list');

btn.onclick = () => {
    mobMenuList.classList.toggle('mobmenu__list-show');
}
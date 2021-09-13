var header = document.getElementById('header');
const menuBtn = document.querySelector ('.js-menu-btn');
const headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll ('#nav li a[href *="#"]');

const Buybtns = document.querySelectorAll ('.js-buy-ticket')
const modal = document.querySelector ('.js-modal')
const modalClose = document.querySelector ('.js-modal-close')
const modalContainer = document.querySelector ('.js-modal-container')

function showBuyTicket() {
    modal.classList.add('open')
}

function closeBuyTicket() {
    modal.classList.remove('open')
}

for (const Buybtn of Buybtns) {
    Buybtn.addEventListener('click', showBuyTicket);
}

modalClose.addEventListener('click', closeBuyTicket);
modal.addEventListener('click', closeBuyTicket);
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

menuBtn.addEventListener('click', function(event) {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
})

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.addEventListener('click', function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    })
}
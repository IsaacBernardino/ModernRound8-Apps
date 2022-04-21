// Pages HTML Elements
const home_screen = document.querySelector('#home');
const expanse_screen = document.querySelector('#expanse');
const gain_screen = document.querySelector('#gain');
const add_screen = document.querySelector('#add');

const pages = [
    home_screen,
    expanse_screen,
    gain_screen,
    add_screen
]

const page_title = document.querySelector('#title');

// Menu buttons
// const butt
const home_button = document.querySelector('#home_btn');
const expanse_button = document.querySelector('#expanse_btn');
const gain_button = document.querySelector('#gain_btn');
const add_button = document.querySelector('#add_btn');
const about_button = document.querySelector('#about');

const buttons = [
    home_button,
    expanse_button,
    gain_button,
    add_button,
    about_button
]

// On load
window.addEventListener('load', () => {
    // Active first on load
    // Home
    page_title.innerHTML = 'Inicio'
    home_screen.style.display = 'block';
    home_button.classList.add('item-ativo');

    expanse_screen.style.display = 'none';
    gain_screen.style.display = 'none';
    add_screen.style.display = 'none';
});

// Cliques no menu
home_button.addEventListener('click', () => {
    page_title.innerHTML = 'Inicio'
    disablePages()
    activePageOnClick(home_screen, home_button);
});

expanse_button.addEventListener('click', () => {
    page_title.innerHTML = 'Gastos Gerais'
    disablePages();
    activePageOnClick(expanse_screen, expanse_button);
});

gain_button.addEventListener('click', () => {
    page_title.innerHTML = 'Ganhos Gerais'
    disablePages();
    activePageOnClick(gain_screen, gain_button);
})

add_button.addEventListener('click', () => {
    page_title.innerHTML = 'Adicionar Ação'
    disablePages();
    activePageOnClick(add_screen, add_button)
})

about_button.addEventListener('click', () => {
  alert('Version: 0.5 \nBy Senior')
})

function disablePages() {
    pages.forEach(item => {
        item.style.display = 'none';
    });
}

function activePageOnClick(page, button) {
    switchMenuIndicator();

    page.style.display = 'block';
    button.classList.add('item-ativo');
}

function switchMenuIndicator() {
    buttons.forEach(btn => {
        btn.classList.remove('item-ativo');
    });
}

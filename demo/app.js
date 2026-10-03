const views = [...document.querySelectorAll('[data-section]')];
const navLinks = [...document.querySelectorAll('[data-view]')];
const pageTitle = document.querySelector('#page-title');
const titles = {
    resumen: 'Resumen del proyecto',
    generar: 'Preparar generación',
    historial: 'Historial de demostración'
};

function showView(viewName) {
    views.forEach((view) => {
        const active = view.dataset.section === viewName;
        view.hidden = !active;
        view.classList.toggle('is-visible', active);
    });

    navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.dataset.view === viewName);
    });

    pageTitle.textContent = titles[viewName] || titles.resumen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        showView(link.dataset.view);
        history.replaceState(null, '', `#${link.dataset.view}`);
    });
});

document.querySelector('#demo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const result = document.querySelector('#form-result');
    result.hidden = false;
    result.textContent = 'Solicitud validada. Demo preparada para el procesamiento simulado.';
});

const initialView = window.location.hash.slice(1);
if (titles[initialView]) showView(initialView);

export default function code(container) {
    let isGlobalVisible = false;
    const content = document.getElementById('content');
    container.addEventListener('click', handleGlobalClick);

    document.addEventListener('iframeloaded', (e) => {
        content.contentDocument.addEventListener('click', handleLocalClick);
    });

    function handleGlobalClick(e) {
        e.target.classList[isGlobalVisible ? 'remove' : 'add']('is-active');

        const markupEls = [...content.contentDocument.querySelectorAll('.kss_markup__wrapper')];
        markupEls.forEach((markup) => {
            toggle(markup, !isGlobalVisible);
        });

        isGlobalVisible = !isGlobalVisible;
    }

    function handleLocalClick(e) {
        if (e.target.classList.contains('kss_markup__btn')) {
            const markup = e.target.nextElementSibling;
            const isVisible = markup.classList.contains('is-visible');

            toggle(markup, !isVisible);
        }
    }

    function toggle(markup, setVisible) {
        markup.classList[setVisible ? 'add' : 'remove']('is-visible');
        markup.style.height = setVisible ? outerHeight(markup.children[0]) + 'px' : 0;
    }

    function outerHeight(el) {
        const style = window.getComputedStyle(el);
        const marginTop = parseInt(style.getPropertyValue('margin-top'), 10);
        const marginBottom = parseInt(style.getPropertyValue('margin-bottom'), 10);
        const borderTop = parseInt(style.getPropertyValue('border-top'), 10);
        const borderBottom = parseInt(style.getPropertyValue('border-bottom'), 10);
        return marginTop + marginBottom + borderTop + borderBottom + el.offsetHeight;
    }
}

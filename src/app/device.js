export default function device(container) {
    const content = document.getElementById('content');
    container.addEventListener('click', handleClick);

    function handleClick(e) {
        const width = e.target.getAttribute('data-width');

        if (width) {
            content.style.width = width + 'px';
        } else {
            content.style.width = '100%';
        }

        [...container.querySelectorAll('button')].forEach((btn) => {
            btn.classList.remove('is-active');
        });
        e.target.classList.add('is-active');
    }
}

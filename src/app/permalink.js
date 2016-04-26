export default function permalink() {
    const content = document.getElementById('content');

    document.addEventListener('iframeloaded', (e) => {
        if (location.hash) {
            const anchor = content.contentDocument.getElementById(location.hash.substr(1));
            content.contentWindow.scrollTo(0, anchor.offsetTop);
        }

        content.contentDocument.addEventListener('click', handleClick);
    });

    function handleClick(e) {
        if (e.target.classList.contains('kss_title__permalink') && e.target.hash) {
            location.hash = e.target.hash;
        }
    }
}

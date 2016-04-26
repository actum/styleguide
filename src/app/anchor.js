export default function anchor() {
    const content = document.getElementById('content');

    window.addEventListener('hashchange', (e) => {
        content.contentWindow.location.hash = e.newURL.substr(e.newURL.indexOf('#'));
    });
}

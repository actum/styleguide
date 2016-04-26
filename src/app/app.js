import device from './device.js';
import code from './code.js';
import permalink from './permalink.js';
import anchor from './anchor.js';

let app = {};

app.start = () => {
    return {
        device: init(device, document.getElementById('device')),
        code: init(code, document.getElementById('code')),
        permalink: permalink(),
        anchor: anchor(),
        iframeLoaded: () => {
            const e = new Event('iframeloaded');
            document.dispatchEvent(e);
        }
    };
};

function init(module, container, ...args) {
    if (container) {
        return module(container, ...args);
    }
}

window.app = app;

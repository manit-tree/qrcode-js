import bwipjs from '@bwip-js/browser';

export default function qrcode(text = 'https://8columns.com', scale = 3) {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas');
        let options = {
            bcid: 'qrcode',
            text: text,
            scale: scale,
        }

        try {
            bwipjs.toCanvas(canvas, options);
            resolve(canvas.toDataURL('image/png'));
            canvas = null;
        } catch (err) {
            reject(err);
        }
    })
}

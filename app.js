$.ready(() => {
    let img = $.query('#app img');

    qrcode('https://8columns.com').then(imgData => {
        img.src = imgData;
    })
})
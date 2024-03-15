const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest;

        request.open('GET', resource);
        request.send();
    
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error while loading your page');
            }
        });
    });
};

getTodos('JSON/cpu.json').then(data => {
    console.log(data);
    return getTodos('JSON/gpu.json')
}).then(data => {
    console.log(data);
    return getTodos('JSON/co.json')
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('error while loading')
});
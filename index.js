

document.querySelector('#root').addEventListener('click', function (event) {
    if (event.target.nodeName == 'DIV' && event.target != event.currentTarget) {
        console.log(event.target.id);
    }
    event.stopImmediatePropagation();
});
const listBook = document.querySelector('#listBooks');
const boxText = document.querySelector('#boxText');
const buttonAdd = document.querySelector('#buttonAdd');

buttonAdd.addEventListener('click', function() {
    const valueBoxText = boxText.value;
    boxText.value = '';

    listBook.appendChild(addBook(valueBoxText));

    boxText.focus();
});

function addBook(valueBoxText) {
    const elementLi = document.createElement('li');
    const elementSpan = document.createElement('span');

    elementLi.style.marginBottom = '10px';

    elementSpan.setAttribute('id', 'book');
    elementSpan.textContent = valueBoxText;

    elementLi.className = 'unrealized';
    elementLi.appendChild(elementSpan);
    elementLi.appendChild(addButtonRemove());

    elementSpan.addEventListener('click', function() {
        if (this.id === 'book') {
            if (this.parentNode.className === 'unrealized') {
                this.parentNode.className = 'executed';
            } else {
                this.parentNode.className = 'unrealized';
            }
        }
    });
    return elementLi
}

function addButtonRemove() {
    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = '✖';
    buttonRemove.className = 'removeBook';

    buttonRemove.addEventListener('click', function() {
        listBook.removeChild(this.parentNode);
    })
    return buttonRemove;
}
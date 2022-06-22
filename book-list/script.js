const listBook = document.querySelector('#listBooks');
const boxText = document.querySelector('#boxText');
const buttonAdd = document.querySelector('#buttonAdd');
const listOptions = document.querySelector('#listOptions');

buttonAdd.addEventListener('click', function() {
    const valueBoxText = boxText.value;
    boxText.value = '';

    listBook.appendChild(addBook(valueBoxText));
    displayHiddenListOptions();

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
        displayHiddenListOptions();
    });
    return buttonRemove;
}

function displayHiddenListOptions() {
    const elementSpan = document.querySelector('#book');
    if (elementSpan == null) {
        listOptions.setAttribute('hidden', 'hidden');
    } else {
        listOptions.removeAttribute('hidden');
    }
}

listOptions.addEventListener('change', function() {
    if (listOptions.selectedIndex === 1 || listOptions.selectedIndex === 2) {
        const vetorBooks = listBook.querySelectorAll('#book');
        for (book of vetorBooks) {
            book.dispatchEvent(new Event('click'));
        }
    } else if (listOptions.selectedIndex === 3) {
        const vetorButtonRemove = listBook.querySelectorAll('.removeBook');
        for (button of vetorButtonRemove) {
            button.dispatchEvent(new Event('click'));
        }
    }
});
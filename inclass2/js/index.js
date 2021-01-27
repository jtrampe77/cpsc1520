function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

updateInnerHTML('h1', 'Updated Title');
updateInnerHTML('h2.intro', 'Updated text as well');

function strong(value) {
    return '<strong>' + value + '</strong>';
}

var strongText;
strongText = document.querySelector('p.important').innerHTML;
strongText = strong(strongText);

updateInnerHTML('p.important', strongText);
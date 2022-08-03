let string = document.querySelector('.heading').innerHTML;
let characters = [...string];
function createSpan(characters) {
    let html = '';
    for (const value of characters) {
        html += `
          <span>${value}</span>
        `;
    }
    document.querySelector('.heading').innerHTML = html;
}

createSpan(characters);
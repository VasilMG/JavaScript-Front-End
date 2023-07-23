

// result();

let textareas = document.getElementsByTagName('textarea');

textareas[0].value = '[{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]';

document.getElementsByTagName('button')[0].click();

let rows = document.querySelectorAll('tbody tr');

assert.equal(rows.length, 2, 'The table rows is incorrect');

let tds = rows[1].children;

assert.equal(tds[0].innerHTML, '<img src="https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg">', 'First td includes something different');

assert.equal(tds[1].textContent, 'Sofa', 'Second td includes something different');

assert.equal(tds[2].textContent, '150', 'Third td includes something different');

assert.equal(tds[3].textContent, '1.2', 'Fourth td includes something different');

assert.equal(tds[4].innerHTML, '<input type="checkbox">', 'Fifth td includes something different');
const btn = document.querySelector('.btn');
const con = document.querySelector('.notes');
let note = document.querySelectorAll('.input');

function updateStorage() {
  localStorage.setItem('note', con.innerHTML);
}

function showNote() {
  const savedNote = localStorage.getItem('note');
  if (savedNote) {
    con.innerHTML = savedNote;
  }
}

showNote();

btn.addEventListener('click', () => {
  let inputbox = document.createElement('p');
  let img = document.createElement('img');
  inputbox.className = 'input';
  inputbox.setAttribute('contentEditable', 'true');
  img.src = './images/delete.png';
  con.appendChild(inputbox).appendChild(img);

  // Listen for changes in the content of the newly created paragraph
  inputbox.addEventListener('keyup', () => {
    updateStorage();
  });
});

con.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  }
});




const addBtn = document.querySelector('.addBtn');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const form = document.querySelector('.bookForm');
const title = form.querySelector('.title');
const pages = form.querySelector('.pages');
const grid = document.querySelector('.bookGrid');

// open form popup
addBtn.addEventListener('click', () => {
  popup.classList.add('visible');
  author.value = '';
  title.value = '';
  pages.value = '';
});

// close form popup on 'X'
close.addEventListener('click', () => {
  popup.classList.remove('visible');
});

// add single book
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let bookRead = false;

  if (document.querySelector('.checkbox').checked) {
    bookRead = true;
  }

  const template = `
    <div class="book ${bookRead ? 'read' : ''}">
      <div>
        <h2>Author: <span>${author.value}</span></h2>
        <h2>Title: <span>${title.value}</span></h2>
        <h2>Number of pages: <span>${pages.value}</span></h2>
      </div>
      <div class="bookBtns">
        <button class="isRead"><span class='test'>${
          bookRead ? 'Read' : 'Not Read'
        }</span></button>
        <button class="remove">Remove</button>
      </div>  
  `;

  grid.innerHTML += template;

  document.querySelector('.checkbox').checked = false;
  popup.classList.remove('visible');
});

// remove single book
grid.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('remove') &&
    e.target.parentElement.classList.contains('bookBtns')
  ) {
    if (confirm('Wanna remove this book?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
});

// toggle read / not read
grid.addEventListener('click', (e) => {
  if (e.target.classList.contains('isRead')) {
    if (e.target.innerText === 'Read') {
      e.target.innerText = 'Not Read';
      e.target.parentElement.parentElement.classList.remove('read');
    } else {
      e.target.innerText = 'Read';
      e.target.parentElement.parentElement.classList.add('read');
    }
  }
});

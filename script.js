//for comment boxes
const commentForm = document.getElementById('comment-form');
const commentList = document.querySelector('.comment-list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get comment data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  // Create comment element
  const newComment = document.createElement('li');
  if (name) {
    newComment.textContent = `${name}: ${comment}`;
  } else {
    newComment.textContent = comment;
  }

  // Append comment to list
  commentList.appendChild(newComment);

  // Clear form (optional)
  document.getElementById('comment').value = '';
});

//for contact
const contactForm = document.getElementById('contact-form');
const contactList = document.querySelector('.contact-list');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const query = document.getElementById('comment').value;

  const newConmment = document.createElement('li');
  if(name){
    newComment.textContent = `${name}: ${comment}`;
  }else{
    newComment.textComment = comment;
  }

  commentList.appendChild(newComment);

  document.getElementById('comment').value = '';
});

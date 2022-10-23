const articles = [
    {
      id: 1,
      title: "Septimus Heap Book One: Magyk",
      date: "July 5, 2022",
      description:
        "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
      imgAlt: "Book cover for Septimus Heap 1",
      ages: "10-14",
      genre: "Fantasy",
      stars: "****"
    },
    {
      id: 2,
      title: "Magnus Chase Book One: Sword of Summer",
      date: "December 12, 2021",
      description:
        "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
      imgSrc:
        "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
      imgAlt: "Book cover for Magnus Chase 1",
      ages: "12-16",
      genre: "Fantasy",
      stars: "⭐⭐⭐⭐"
    },
    {
      id: 3,
      title: "The little Prince",
      date: "Oct 22, 2022",
      description: 
      "About a kid in love of his rose, left his own world t get over her, realizes he cans and goes back to her to find the unspeakable...",
      imgSrc:
       "https://books.google.com/books/content?id=CQYg20lTHtMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71G8XT3cOAG7kXyib33ULv6u1pxLTw9-MoK2v5RMQEukosxJ9yQjFwceruQi4093Og0FounIPX9-N9cUXAMjTUeCIONqDEKjVGwJXijn1TmwNebWuJcUh6yjDuLVgANSuXExoNv",
      imgAlt: "Book Cover for The Little Prince",
      ages: "all public",
      genre:"Fantasy",
      stars: "⭐⭐⭐⭐⭐"
    },
];

function articleTemplate(article){
  return `<div class="info">
  <p class="date"> ${article.date}</p>
  <p> ${article.ages}</p>
  <p> ${article.genre}</p>
  <p> ${article.stars}</p>
  </div>
  <div class="book">
  <h2> ${article.title}</h2>
  <img alt="${article.imgAlt}" src="${article.imgSrc}">
  <p> ${article.description}</p>
  </div>`;
}

function renderArticle(){
  const htmlArticle = articles.map(articleTemplate);
  const newArticle = document.createElement('article');
  newArticle.classList.add('article1')
  newArticle.insertAdjacentHTML('afterbegin', htmlArticle.join(''));
  document.querySelector('main').insertAdjacentElement('beforeend', newArticle);
}

renderArticle()

  
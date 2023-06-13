const gallery = [
   {
    url: "img/bentley.jpg",
    title: "Бентли"
  },
   {
    url: "img/bmw.jpg",
    title: "БМВ"
  },
   {
    url: "img/buick-riviera.jpg",
    title: "Бьюик-Ривера"
  },
   {
    url: "img/ferrari.jpg",
    title: "Феррари"
  },
   {
    url: "img/ford.jpg",
    title: "Форд"
  },
   {
    url: "img/jaguar.jpg",
    title: "Ягуар"
  },
   {
    url: "img/mazda.jpg",
    title: "Мазда"
  },
   {
    url: "img/shevrolee.jpg",
    title: "Шевроле"
  },
];
const div = document.createElement('div');
div.className = "app";
document.body.append(div);

div.style.border = '3px solid olive';
div.style.maxWidth = '1225px';
div.style.margin = '0 auto';
div.style.padding = '20px';

function addList() {
const cardList = document.createElement('ul');
cardList.className = "card__list";
div.append(cardList);

for (let i = 0; i <= 7; i++) {
  const cardItem = document.createElement('li');
  cardItem.className = "card__item";
  cardList.append(cardItem);

  cardItem.innerHTML = `
  <figure>
  <img src="${gallery[i].url}" alt="">
  <figcaption>${gallery[i].title}</figcaption>
</figure>
  `;

}
  cardList.style.cssText = `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 236px);
    column-gap: 20px;
  `;
 
const img = cardList.querySelectorAll('img');
img[1].style.width = '100%';
img[6].style.width = '100%';
img[6].style.minHeight = '190px';

img[3].style.maxHeight = '190px';
img[3].style.width = '100%';
img[7].style.maxHeight = '190px';
img[7].style.width = '100%';
img[4].style.maxHeight = '190px';
img[4].style.width = '100%';

}
addList();

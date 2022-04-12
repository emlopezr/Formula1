newsTitles = [
  "Dominant Leclerc beats Perez to Australian GP win as Verstappen retires",
  "Bottas commends Alfa Romeo performance after P8 finish in Melbourne",
  "Albon says P10 finish was 'unimaginable' before pulling off inspired strategy in Australia",
  "Alonso 'speechless' after weekend unravels to leave him last in Melbourne",
];
newsTag = ["Report", "News", "News", "News"];
newsTime = ["10 April 2022", "11 April 2022", "11 April 2022", "10 April 2022"];

const body = document.querySelector("body");
const news = document.querySelector(".news");
const title = document.querySelector(".title h1");
const tag = document.querySelector(".tag p");

// Start app

document.addEventListener("DOMContentLoaded", function () {
  createNews();
  // First is active on charge
  document.querySelector(".new").classList.add("active");
  body.classList.add("bg-0");
});

// Create news

function createNews() {
  for (let i = 0; i <= 3; i++) {
    const article = document.createElement("ARTICLE");
    article.innerHTML = `
      <div class="row-1">
        <p>${newsTag[i]}</p>
        <p>${newsTime[i]}</p>
      </div>
      <h2 class="title">${newsTitles[i]}</h2>
    `;

    article.classList.add("new");

    // Chage news
    article.onclick = function () {
      cleanActive();
      article.classList.add("active");
      body.removeAttribute("class"); // Clean Background
      body.classList.add(`bg-${i}`);
      title.innerHTML = newsTitles[i];
      tag.innerHTML = newsTag[i];
    };

    news.appendChild(article);
  }
}

// Change news

// Clean active Tag

function cleanActive() {
  const allNews = document.querySelectorAll(".new");
  allNews.forEach((article) => article.classList.remove("active"));
}

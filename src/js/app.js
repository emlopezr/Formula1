newsTitles = [
  "Verstappen beats Leclerc by just 0.5s in epic Saudi Arabian Grand Prix",
  "Sainz encouraged by 'important' Saudi Arabian podium despite 'unlucky' start",
  "Norris loses P6 by 0.1s at Jeddah, but praises improved showing from McLaren",
  "Perez says Safety Car 'ruined' his chance of victory from pole position at Jeddah",
];
newsTag = ["Report", "News", "News", "News"];
newsTime = ["A day ago", "8 hours ago", "2 hours ago", "3 hours ago"];

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

// Clean active Tag

function cleanActive() {
  const allNews = document.querySelectorAll(".new");
  allNews.forEach((article) => article.classList.remove("active"));
}

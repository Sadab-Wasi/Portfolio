const all_projects = [
  {
    name: "Responsive_Web_App",
    "link-live": "https://react-frontend-sample-1.vercel.app",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/Responsive_Web_App---Sample_1/main/preview/desktop.png",
    tags: ["HTML", "React", "Tailwind", "TypeScript"],
    top: true,
  },
  {
    name: "Recipe-page",
    "link-live": "https://recipe-page-seven-mocha.vercel.app",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/Recipe-page/main/preview/desktop.png",
    tags: ["CSS", "HTML"],
    top: false,
  },
  {
    name: "Social-links-profile",
    "link-live": "https://social-links-profile-five.vercel.app",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/Social-links-profile/main/preview/desktop.png",
    tags: ["CSS", "HTML"],
    top: false,
  },
  {
    name: "Blog-preview-card",
    "link-live": "https://blog-preview-card-six-eta-62.vercel.app",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/Blog-preview-card/main/preview/desktop.png",
    tags: ["CSS", "HTML"],
    top: false,
  },
  {
    name: "QR-code-component",
    "link-live": "https://qr-code-component-theta-murex.vercel.app",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/QR-code-component/main/preview/desktop.png",
    tags: ["CSS", "HTML"],
    top: false,
  },
  {
    name: "Manual Testing",
    "link-live":
      "https://docs.google.com/spreadsheets/d/1KYgqQNswuA-Axrk9Gd-PIkLT9mJPua7RVBAe7QMJhAE/edit?usp=sharing",
    img: "./images/previews/Manual test cases.webp",
    tags: ["AppScript", "Spreadsheet"],
    top: false,
  },
  {
    name: "Rental Website",
    "link-live": "https://rental-website-dy4b.onrender.com/",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/rental-website/main/preview/desktop.png",
    tags: ["Express", "CSS", "HTML", "Sequelize"],
    top: true,
  },
  {
    name: "Book Rental Request",
    "link-live":
      "https://drive.google.com/drive/folders/18XdxeO41n5WMxPcj903idsTjkE-grbPn?usp=sharing",
    img: "./images/previews/Book-Rental-Request-Responses-Google-Sheets.webp",
    tags: ["AppScript", "Forms", "Gmail", "Spreadsheet"],
    top: false,
  },
  {
    name: "GraphQL API",
    "link-live": "https://github.com/Sadab-Wasi/graphql_api",
    img: "https://raw.githubusercontent.com/Sadab-Wasi/graphql_api/main/preview/Schema.png",
    tags: ["GraphQL", "UnitTest"],
    top: false,
  },
  {
    name: "Power BI Dashboard design",
    "link-live":
      "https://app.powerbi.com/view?r=eyJrIjoiNjgxOGFmYjktNTQwZi00OWMxLTlmOWItYWRkYmQxNDZiNzU1IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D",
    img: "./images/previews/Microsoft-Power-BI.webp",
    tags: ["Power_BI", "Spreadsheet"],
    top: false,
  },
];

// Nav menu toggler
const nav_icon = document.querySelector(".nav__toggler");
nav_icon.addEventListener("click", function () {
  let nav = document.querySelector("nav");
  nav.classList.toggle("collapsible__extended");
  document.querySelector("body").classList.toggle("no-scroll");
});
const nav_links = document.querySelectorAll(".nav__item > a");
nav_links.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector("nav").classList.remove("collapsible__extended");
    document.querySelector("body").classList.remove("no-scroll");
  });
});
// ----------

// Animator
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    root: null, // use the viewport
    rootMargin: "0px", // margin around the root
    threshold: 0.1, // trigger when 10% of the element is visible
  },
);

reveals.forEach((el) => observer.observe(el));
// ----------

// Top previews
const top_projects = all_projects.filter((project) => project.top == true);
let top_preview = "";
for (let i = 0; i < 4; i++) {
  const element = top_projects[i];
  if (element) {
    top_preview += `
    <article class="preview__content">
      <h3 class="preview__topic">${element.name}</h3>
      <a href="${element["link-live"]}" class="btn btn--default preview__link">View</a>
      <img src="${element.img}" alt="" />
    </article>`;
  } else {
    top_preview += `
    <article class="preview__content">
      <h3 class="preview__topic">Topic ${i + 1}</h3>
      <a href="" class="btn btn--default preview__link">in progress ...</a>
      <img src="./images/webp/default picture.webp" alt="" />
    </article>`;
  }
}
document.getElementById("top_preview").innerHTML = top_preview;

// ----------

// Search Tag
var project__slider = "";
all_projects.forEach((project, index) => {
  const tag_names = project.tags.join();

  project__slider += `
    <article class="card" data-tags="${tag_names}">
      <div class="card__img">
        <img src="${project.img}" alt="" />
        <span class="card__img-overlay"><a href="${project["link-live"]}">Preview</a></span>
      </div>
      <h3 class="card__name">${project.name}</h3>
      <ul class="card__tags">`;

  project.tags.forEach((tag) => {
    project__slider += `<li>${tag}</li>`;
  });

  project__slider += `
      </ul>
    </article>`;
});
const slider = document.getElementById("project__slider");
slider.innerHTML = project__slider;

// ----------

// Pagination
let currentPage = 1;
const window_width_2 = window.innerWidth;
var totalPages =
  window_width_2 <= 768 ? Math.ceil(all_projects.length / 2) : Math.ceil(all_projects.length / 4);
// const slider = document.getElementById("project__slider");

document.getElementById("page-first").addEventListener("click", () => {
  goToPage(1);
});
document.getElementById("page-prev").addEventListener("click", () => {
  prevPage();
});
document.getElementById("page-next").addEventListener("click", () => {
  nextPage();
});
document.getElementById("page-last").addEventListener("click", () => {
  goToPage(0);
});

// Update page number
function create_page(totalPages) {
  var project__page = "";
  for (let i = 0; i < totalPages; i++) {
    const page_num = i + 1;
    const activeClass = i === 0 ? "active" : "";
    project__page += `<button class="num ${activeClass}" data-page="${page_num}">${page_num}</button>`;
  }
  const page_container = document.getElementById("page-numbers");
  page_container.innerHTML = project__page;
  page_container.addEventListener("click", (event) => {
    // Check if the clicked thing was actually a button
    if (event.target.classList.contains("num")) {
      const pageNum = event.target.getAttribute("data-page");
      goToPage(parseInt(pageNum));

      // Optional: Update 'active' class UI
      // container.querySelectorAll('.num').forEach(btn => btn.classList.remove('active'));
      // event.target.classList.add('active');
    }
  });
}
create_page(totalPages);

function goToPage(pageNum) {
  if (pageNum < 0 || pageNum > totalPages) return;
  if (pageNum == 0) pageNum = totalPages;

  const buttons = document.querySelectorAll(".num");

  currentPage = pageNum;

  const window_width = window.innerWidth;

  if (window_width <= 768) {
    // Mobile
    slider.style.transform = `translateX(calc(${currentPage - 1}*(-100vw + 10px + 6rem)))`;
  } else {
    // Desktop
    slider.style.transform = `translateX(calc(${currentPage - 1}*(-100vw + 10px + 20rem)))`;
  }

  // Update active button UI
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("active", idx + 1 === pageNum);
  });
}

function nextPage() {
  if (currentPage < totalPages) goToPage(currentPage + 1);
}

function prevPage() {
  if (currentPage > 1) goToPage(currentPage - 1);
}
let touchstartX = 0;
let touchendX = 0;
const threshold = 50; // Minimum distance in pixels to count as a swipe

function checkDirection() {
  if (touchendX < touchstartX - threshold) {
    // console.log("Swiped Left");
    nextPage();
  }
  if (touchendX > touchstartX + threshold) {
    // console.log("Swiped Right");
    prevPage();
  }
}

document.getElementById("project__slider").addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.getElementById("project__slider").addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});

const page_tags = document.getElementById("projects_tags");
page_tags.addEventListener("click", (event) => {
  if (!event.target.classList.contains("checked") && event.target.classList.contains("tag")) {
    const tag = event.target.getAttribute("data-tag");

    // Update active button UI
    document.querySelector(".tag.checked").classList.remove("checked");
    event.target.classList.add("checked");

    // Filter cards
    let hidden_count = 0;
    const cards = document.querySelectorAll("#project__slider > .card");
    cards.forEach((card) => {
      const cardTags = card.getAttribute("data-tags");

      // If "all" is selected or card contains the tag, show it
      if (tag === "all" || cardTags.includes(tag)) {
        card.classList.remove("card-hidden");
      } else {
        card.classList.add("card-hidden");
        hidden_count++;
      }
    });
    const window_width_2 = window.innerWidth;
    totalPages =
      window_width_2 <= 768
        ? Math.ceil((all_projects.length - hidden_count) / 2)
        : Math.ceil((all_projects.length - hidden_count) / 4);

    create_page(totalPages);
    goToPage(1);
  }
});

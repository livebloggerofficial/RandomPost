const postsData = [
  {
    title: "The Future of Artificial Intelligence",
    thumbnail:
      "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Discover the latest advancements and future prospects of Artificial Intelligence.",
    link: "#",
    dateUpdated: "23 May, 2023",
  },
  {
    title: "Exploring Quantum Computing Technologies",
    thumbnail:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Delve into the fascinating world of Quantum Computing and its potential applications.",
    link: "#",
    dateUpdated: "4 Jun, 2023",
  },
  {
    title: "Top 10 Programming Languages for Web Development",
    thumbnail:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    summary:
      "Explore the most popular programming languages used in web development and their key features.",
    link: "#",
    dateUpdated: "20 Jun, 2023",
  },
];

const randomPost = document.querySelector(".random-post");
const nextPostBtn = document.querySelector(
  ".random-post-container .next-post-btn"
);
let postIndex = 1;

const displayRandomPost = () => {
  const html = `<img
    src="${postsData[postIndex].thumbnail}"
  />

  <div class="content">
    <div class="date">${postsData[postIndex].dateUpdated}</div>
    <h2>${postsData[postIndex].title}</h2>
    <p>
      ${postsData[postIndex].summary}
    </p>
    <a class="read-more-btn" href="${postsData[postIndex].link}">Read More...</a>
  </div>`;

  randomPost.innerHTML = html;
};

displayRandomPost();

nextPostBtn.addEventListener("click", () => {
  let newIndex = postIndex;

  while (newIndex === postIndex) {
    newIndex = Math.floor(Math.random() * postsData.length);
  }

  postIndex = newIndex;
  displayRandomPost();
});

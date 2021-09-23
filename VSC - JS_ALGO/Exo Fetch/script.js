const Cards = document.querySelector(".Cards");

const generateCard = (title, body) => {
  const article = document.createElement("article");
  article.classList.add("Card");
  const content = `<div class="Card-content"><h2>${title}</h2><p>${body}</p></div>`;
  article.innerHTML = content;
  Cards.appendChild(article);
};

// https://jsonplaceholder.typicode.com

// fetch then
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => {
//     json.map(post => generateCard(post.title, post.body))
//   } )

// fetch async await
// let getPosts = async () => {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   let json = await response.json()
//   json.map(post => generateCard(post.title, post.body))
// }
// getPosts()


// try catch
// const getPosts = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     if (response.ok) {
//       const json = await response.json();
//       return json.map(post => generateCard(post.title, post.body));
//     }
//     console.error(response.status);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getPosts();

// POST async await
const createPost = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Un article créé pour la promo CNAM",
          body: "<3",
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    if (response.ok) {
      const json = await response.json();
      console.log(json)
      return generateCard(json.title, json.body);
    }
    console.error(response.status);
  } catch (error) {
    console.error(error);
  }
};
createPost();